import { useState, useEffect } from "react";
import { PasswordGate } from "@/components/PasswordGate";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { InvitationSection } from "@/components/InvitationSection";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("wedding_authenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

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
