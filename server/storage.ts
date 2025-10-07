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
        name: "Oyebimpe (Bibi)",
        role: "bridesmaid",
        title: "Bride's Best Girl",
        photoUrl: "/attached_assets/bimpe_1759827170279.jpg",
        story: "Hiiyyyyyyaaaaa😘😘😘 My name is Oyebimpe, but everyone calls me Bibi. the bride's best girl and favorite person to argue with. 😜 We met at work ,and from day one, we've been the definition of love and war ,and between all the laughter, eye rolls, and \"don't talk to me\" moments, a beautiful friendship was born. Through it all, she's my sister at heart, and I couldn't be prouder to see her marry the love of her life! 💕",
        relationTo: "bride",
      },
      {
        name: "Kofoworola Rabiu",
        role: "bridesmaid",
        title: "Bride's Cousin",
        photoUrl: "/attached_assets/kofo_1759828085583.jpg",
        story: "My Name is Kofoworola Rabiu, I'm 27 and I'm yemisi cousin",
        relationTo: "bride",
      },
      {
        name: "Bimpe (Bimpizzle)",
        role: "bridesmaid",
        title: "Bride's Cousin",
        photoUrl: "/attached_assets/bimpizzle_1759829102989.jpg",
        story: "Hi, I'm Bimpe to family and friends — Bimpizzle on social media! I'm an introverted fashionista who loves to travel and has a favorite color that's the perfect combo of black and white. Growing up with the beautiful bride as little cousins to now watching her step into this new chapter is such a full-circle moment, and I'm so honored to be part of it!",
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
