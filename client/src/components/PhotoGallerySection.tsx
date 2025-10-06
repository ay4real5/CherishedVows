import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Upload, QrCode, X, Loader2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ObjectUploader } from "./ObjectUploader";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import QRCode from "qrcode";
import type { GalleryPhoto } from "@shared/schema";
import type { UploadResult } from "@uppy/core";

export function PhotoGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [showQR, setShowQR] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const { toast } = useToast();

  const { data: photos = [], isLoading, error } = useQuery<GalleryPhoto[]>({
    queryKey: ["/api/gallery-photos"],
  });

  useEffect(() => {
    const generateQR = async () => {
      try {
        const uploadUrl = `${window.location.origin}/#gallery`;
        const qrDataUrl = await QRCode.toDataURL(uploadUrl, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });
        setQrCodeUrl(qrDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQR();
  }, []);

  const completeUploadMutation = useMutation({
    mutationFn: async (data: { photoUrl: string; caption?: string }) => {
      return apiRequest("POST", "/api/photos/complete", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/gallery-photos"] });
      toast({
        title: "Photo Uploaded!",
        description: "Your photo has been added to the gallery.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Upload Error",
        description: error.message || "Failed to save photo. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleGetUploadParameters = async () => {
    try {
      const response = await apiRequest("POST", "/api/photos/upload", {});
      return {
        method: "PUT" as const,
        url: response.uploadURL,
      };
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to get upload URL. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const handleUploadComplete = (result: UploadResult<Record<string, unknown>, Record<string, unknown>>) => {
    if (result.successful && result.successful.length > 0) {
      const uploadedFile = result.successful[0];
      completeUploadMutation.mutate({
        photoUrl: uploadedFile.uploadURL,
        caption: uploadedFile.name,
      });
    }
  };

  if (error) {
    return (
      <section id="gallery" className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <p className="text-destructive">Failed to load gallery. Please try again later.</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing moments from our journey to forever
          </p>
        </div>

        {/* Upload Section */}
        <Card className="p-8 mb-12 text-center bg-primary/5">
          <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
            Share Your Photos
          </h3>
          <p className="text-muted-foreground mb-6">
            Upload your favorite moments from our celebrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ObjectUploader
              maxNumberOfFiles={5}
              maxFileSize={10485760}
              onGetUploadParameters={handleGetUploadParameters}
              onComplete={handleUploadComplete}
              buttonClassName="min-h-10"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Photos
            </ObjectUploader>
            <Button
              variant="outline"
              onClick={() => setShowQR(true)}
              data-testid="button-show-qr"
            >
              <QrCode className="w-4 h-4 mr-2" />
              Show QR Code
            </Button>
          </div>
        </Card>

        {/* Photo Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : photos.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">
              No photos yet. Be the first to upload!
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.photoUrl)}
                className="relative aspect-square overflow-hidden rounded-lg hover-elevate group"
                data-testid={`photo-${photo.id}`}
              >
                <img
                  src={photo.photoUrl}
                  alt={photo.caption || "Gallery photo"}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm">{photo.caption || "Wedding photo"}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedPhoto && (
          <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
            <DialogContent className="max-w-4xl p-0">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedPhoto}
                alt="Selected photo"
                className="w-full h-auto"
              />
            </DialogContent>
          </Dialog>
        )}

        {/* QR Code Modal */}
        {showQR && (
          <Dialog open={showQR} onOpenChange={setShowQR}>
            <DialogContent className="sm:max-w-md">
              <div className="text-center p-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Scan to Upload Photos
                </h3>
                {qrCodeUrl ? (
                  <div className="bg-white p-8 rounded-lg inline-block mb-4">
                    <img src={qrCodeUrl} alt="QR Code" className="w-64 h-64" />
                  </div>
                ) : (
                  <div className="w-64 h-64 mx-auto bg-muted flex items-center justify-center mb-4">
                    <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                  </div>
                )}
                <p className="text-muted-foreground">
                  Scan this QR code with your phone to access the gallery
                </p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
