import { Storage, File } from "@google-cloud/storage";
import { Response } from "express";
import { randomUUID } from "crypto";

const REPLIT_SIDECAR_ENDPOINT = "http://127.0.0.1:1106";

export const objectStorageClient = new Storage({
  credentials: {
    audience: "replit",
    subject_token_type: "access_token",
    token_url: `${REPLIT_SIDECAR_ENDPOINT}/token`,
    type: "external_account",
    credential_source: {
      url: `${REPLIT_SIDECAR_ENDPOINT}/credential`,
      format: {
        type: "json",
        subject_token_field_name: "access_token",
      },
    },
    universe_domain: "googleapis.com",
  },
  projectId: "",
});

export class ObjectNotFoundError extends Error {
  constructor() {
    super("Object not found");
    this.name = "ObjectNotFoundError";
    Object.setPrototypeOf(this, ObjectNotFoundError.prototype);
  }
}

export class ObjectStorageService {
  constructor() {}

  getPublicObjectSearchPaths(): Array<string> {
    const pathsStr = process.env.PUBLIC_OBJECT_SEARCH_PATHS || "";
    const paths = Array.from(
      new Set(
        pathsStr
          .split(",")
          .map((path) => path.trim())
          .filter((path) => path.length > 0)
      )
    );
    return paths;
  }

  async searchPublicObject(filePath: string): Promise<File | null> {
    const searchPaths = this.getPublicObjectSearchPaths();
    for (const searchPath of searchPaths) {
      const bucketName = searchPath.split("/")[1];
      const prefix = searchPath.split("/").slice(2).join("/");
      const objectPath = `${prefix}/${filePath}`;
      
      const bucket = objectStorageClient.bucket(bucketName);
      const file = bucket.file(objectPath);
      
      const [exists] = await file.exists();
      if (exists) {
        return file;
      }
    }
    return null;
  }

  downloadObject(file: File, res: Response): void {
    file.createReadStream().pipe(res);
  }

  async getObjectEntityUploadURL(): Promise<string> {
    const bucketId = process.env.DEFAULT_OBJECT_STORAGE_BUCKET_ID;
    if (!bucketId) {
      throw new Error("Object storage bucket not configured");
    }

    const privateDir = process.env.PRIVATE_OBJECT_DIR || "";
    const fileName = `${randomUUID()}.jpg`;
    const objectPath = `${privateDir}/${fileName}`;

    const response = await fetch(`${REPLIT_SIDECAR_ENDPOINT}/presigned_url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bucket_id: bucketId,
        object_path: objectPath,
        http_method: "PUT",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate upload URL");
    }

    const { signed_url: signedURL } = await response.json();
    return signedURL;
  }

  normalizeObjectEntityPath(uploadURL: string): string {
    const urlParts = new URL(uploadURL);
    return urlParts.pathname;
  }

  async getObjectEntityFile(objectPath: string): Promise<File> {
    const bucketId = process.env.DEFAULT_OBJECT_STORAGE_BUCKET_ID;
    if (!bucketId) {
      throw new ObjectNotFoundError();
    }

    const cleanPath = objectPath.startsWith("/objects/") 
      ? objectPath.substring("/objects/".length) 
      : objectPath;

    const bucket = objectStorageClient.bucket(bucketId);
    const file = bucket.file(cleanPath);

    const [exists] = await file.exists();
    if (!exists) {
      throw new ObjectNotFoundError();
    }

    return file;
  }
}
