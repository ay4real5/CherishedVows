import { useState, useEffect } from "react";
import { InvitationCard } from "@/components/InvitationCard";
import { PasswordGate } from "@/components/PasswordGate";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { InvitationSection } from "@/components/InvitationSection";
import { CouplePhotosSection } from "@/components/CouplePhotosSection";
import { OurStorySection } from "@/components/OurStorySection";
import { BridalPartySection } from "@/components/BridalPartySection";
import { RsvpForm } from "@/components/RsvpForm";
import { GiftRegistrySection } from "@/components/GiftRegistrySection";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";
import { FAQSection } from "@/components/FAQSection";
import { GuestbookSection } from "@/components/GuestbookSection";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("wedding_authenticated");
    const hasSeenInvitation = sessionStorage.getItem("wedding_invitation_seen");
    
    if (auth === "true") {
      setIsAuthenticated(true);
      setShowInvitation(false);
    } else if (hasSeenInvitation === "true") {
      setShowInvitation(false);
    }
  }, []);

  const handleEnterWebsite = () => {
    sessionStorage.setItem("wedding_invitation_seen", "true");
    setShowInvitation(false);
  };

  if (showInvitation) {
    return <InvitationCard onEnter={handleEnterWebsite} />;
  }

  if (!isAuthenticated) {
    return <PasswordGate onUnlock={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeToggle />
      <main>
        <HeroSection />
        <InvitationSection />
        <CouplePhotosSection />
        <OurStorySection />
        <BridalPartySection />
        <RsvpForm />
        <GiftRegistrySection />
        <PhotoGallerySection />
        <FAQSection />
        <GuestbookSection />
      </main>
      <Footer />
    </div>
  );
}
