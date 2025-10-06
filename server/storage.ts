import {
  type Rsvp,
  type InsertRsvp,
  type BridalPartyMember,
  type InsertBridalPartyMember,
  type GuestMessage,
  type InsertGuestMessage,
  type GalleryPhoto,
  type InsertGalleryPhoto,
  type StoryMilestone,
  type InsertStoryMilestone,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
  getAllRsvps(): Promise<Rsvp[]>;
  
  getBridalPartyMembers(): Promise<BridalPartyMember[]>;
  createBridalPartyMember(member: InsertBridalPartyMember): Promise<BridalPartyMember>;
  
  createGuestMessage(message: InsertGuestMessage): Promise<GuestMessage>;
  getAllGuestMessages(): Promise<GuestMessage[]>;
  incrementMessageHearts(id: string): Promise<GuestMessage | undefined>;
  
  createGalleryPhoto(photo: InsertGalleryPhoto): Promise<GalleryPhoto>;
  getAllGalleryPhotos(): Promise<GalleryPhoto[]>;
  
  getStoryMilestones(): Promise<StoryMilestone[]>;
  createStoryMilestone(milestone: InsertStoryMilestone): Promise<StoryMilestone>;
}

export class MemStorage implements IStorage {
  private rsvps: Map<string, Rsvp>;
  private bridalPartyMembers: Map<string, BridalPartyMember>;
  private guestMessages: Map<string, GuestMessage>;
  private galleryPhotos: Map<string, GalleryPhoto>;
  private storyMilestones: Map<string, StoryMilestone>;

  constructor() {
    this.rsvps = new Map();
    this.bridalPartyMembers = new Map();
    this.guestMessages = new Map();
    this.galleryPhotos = new Map();
    this.storyMilestones = new Map();
    
    this.seedBridalParty();
    this.seedStoryMilestones();
  }

  private seedBridalParty() {
    const members: InsertBridalPartyMember[] = [
      {
        name: "Michael Johnson",
        role: "groomsman",
        title: "Best Man",
        story: "Michael has been Tambari's best friend since childhood. They grew up together, sharing countless adventures and creating memories that will last a lifetime.",
        relationTo: "groom",
      },
      {
        name: "David Smith",
        role: "groomsman",
        title: "Groomsman",
        story: "David and Tambari met in university and quickly became inseparable. Their shared passion for sports and music has kept their friendship strong over the years.",
        relationTo: "groom",
      },
      {
        name: "Sarah Williams",
        role: "bridesmaid",
        title: "Maid of Honor",
        story: "Sarah has been Christiana's rock since their school days. Through thick and thin, their sisterhood has only grown stronger with each passing year.",
        relationTo: "bride",
      },
      {
        name: "Emily Brown",
        role: "bridesmaid",
        title: "Bridesmaid",
        story: "Emily and Christiana became instant friends when they met at work. Their bond over shared interests and values has made Emily an irreplaceable part of Christiana's life.",
        relationTo: "bride",
      },
    ];

    members.forEach(member => {
      const id = randomUUID();
      this.bridalPartyMembers.set(id, { ...member, id });
    });
  }

  private seedStoryMilestones() {
    const milestones: InsertStoryMilestone[] = [
      {
        date: "March 2020",
        title: "First Meeting",
        description: "Our paths crossed at a mutual friend's gathering, and we instantly connected over our shared love for music and adventure.",
        order: "1",
      },
      {
        date: "August 2020",
        title: "First Date",
        description: "A simple coffee date turned into hours of conversation and laughter. We both knew this was something special.",
        order: "2",
      },
      {
        date: "December 2021",
        title: "Relationship Official",
        description: "After a year of growing closer, we made it official during a romantic beach sunset walk.",
        order: "3",
      },
      {
        date: "May 2023",
        title: "The Proposal",
        description: "Under the stars at our favorite restaurant, Tambari got down on one knee and asked the question that changed our lives forever.",
        order: "4",
      },
      {
        date: "July 2024",
        title: "Forever Begins",
        description: "And now we're getting married! Join us as we celebrate the beginning of our forever.",
        order: "5",
      },
    ];

    milestones.forEach(milestone => {
      const id = randomUUID();
      this.storyMilestones.set(id, { ...milestone, id });
    });
  }

  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const id = randomUUID();
    const rsvp: Rsvp = { 
      ...insertRsvp, 
      id,
      createdAt: new Date(),
    };
    this.rsvps.set(id, rsvp);
    return rsvp;
  }

  async getAllRsvps(): Promise<Rsvp[]> {
    return Array.from(this.rsvps.values());
  }

  async getBridalPartyMembers(): Promise<BridalPartyMember[]> {
    return Array.from(this.bridalPartyMembers.values());
  }

  async createBridalPartyMember(insertMember: InsertBridalPartyMember): Promise<BridalPartyMember> {
    const id = randomUUID();
    const member: BridalPartyMember = { ...insertMember, id };
    this.bridalPartyMembers.set(id, member);
    return member;
  }

  async createGuestMessage(insertMessage: InsertGuestMessage): Promise<GuestMessage> {
    const id = randomUUID();
    const message: GuestMessage = {
      ...insertMessage,
      id,
      hearts: "0",
      createdAt: new Date(),
    };
    this.guestMessages.set(id, message);
    return message;
  }

  async getAllGuestMessages(): Promise<GuestMessage[]> {
    return Array.from(this.guestMessages.values())
      .sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      });
  }

  async incrementMessageHearts(id: string): Promise<GuestMessage | undefined> {
    const message = this.guestMessages.get(id);
    if (message) {
      const currentHearts = parseInt(message.hearts || "0");
      message.hearts = (currentHearts + 1).toString();
      this.guestMessages.set(id, message);
      return message;
    }
    return undefined;
  }

  async createGalleryPhoto(insertPhoto: InsertGalleryPhoto): Promise<GalleryPhoto> {
    const id = randomUUID();
    const photo: GalleryPhoto = {
      ...insertPhoto,
      id,
      createdAt: new Date(),
    };
    this.galleryPhotos.set(id, photo);
    return photo;
  }

  async getAllGalleryPhotos(): Promise<GalleryPhoto[]> {
    return Array.from(this.galleryPhotos.values())
      .sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return dateB - dateA;
      });
  }

  async getStoryMilestones(): Promise<StoryMilestone[]> {
    return Array.from(this.storyMilestones.values())
      .sort((a, b) => parseInt(a.order) - parseInt(b.order));
  }

  async createStoryMilestone(insertMilestone: InsertStoryMilestone): Promise<StoryMilestone> {
    const id = randomUUID();
    const milestone: StoryMilestone = { ...insertMilestone, id };
    this.storyMilestones.set(id, milestone);
    return milestone;
  }
}

export const storage = new MemStorage();
