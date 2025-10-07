import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import backgroundImage from "@assets/image_1759834063243.png";

export default function Invitation() {
  const [, setLocation] = useLocation();

  const handleEnter = () => {
    setLocation("/home");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="text-center px-8 max-w-4xl mx-auto space-y-8">
        <p className="text-lg md:text-xl text-primary font-serif tracking-wide">
          You are invited to the wedding of
        </p>
        
        <div className="space-y-6">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary">
            Yemisi
          </h1>
          <div className="font-script text-5xl md:text-7xl text-primary">&</div>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary">
            Abisoye
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-primary font-semibold pt-4">
          #AbifoundhisMis
        </p>

        <div className="pt-8 space-y-3">
          <p className="text-xl md:text-2xl font-serif font-semibold text-primary">
            Wedding Ceremony
          </p>
          <p className="text-2xl md:text-3xl text-primary font-serif">
            21 . 03 . 2026
          </p>
        </div>

        <p className="text-sm md:text-base text-primary font-medium uppercase tracking-wider pt-8">
          All details are available on our website
        </p>
        
        <div className="pt-6">
          <Button
            onClick={handleEnter}
            size="lg"
            className="px-12 py-6 text-base font-serif"
            data-testid="button-enter-website"
          >
            Click Here to Go to Our Wedding Website
          </Button>
        </div>
      </div>
    </div>
  );
}
