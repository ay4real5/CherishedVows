import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import backgroundImage from "@assets/image_1759834063243.png";

export default function Invitation() {
  const [, setLocation] = useLocation();

  const handleEnter = () => {
    setLocation("/home");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Background with the invitation design */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Wedding Invitation" 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for better button visibility */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="mx-4 w-2 h-2 rotate-45 bg-primary/50"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>

        <div className="space-y-8 mb-12">
          <p className="text-xl md:text-2xl text-primary font-serif tracking-wide">
            You are invited to the wedding of
          </p>
          
          <div className="space-y-4">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary">
              Yemisi
            </h1>
            <div className="font-script text-5xl md:text-7xl text-primary">&</div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary">
              Abisoye
            </h1>
          </div>

          <p className="text-lg md:text-xl text-primary font-semibold">
            #AbifoundhisMis
          </p>

          <div className="pt-8">
            <p className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">
              Wedding Ceremony
            </p>
            <p className="text-xl md:text-2xl text-primary">
              21 . 03 . 2026
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-primary font-medium uppercase tracking-wider">
            All details are available on our website
          </p>
          
          <Button
            onClick={handleEnter}
            size="lg"
            className="px-12 py-6 text-lg font-serif"
            data-testid="button-enter-website"
          >
            Click Here to Go to Our Wedding Website
          </Button>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center mt-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="mx-4 w-2 h-2 rotate-45 bg-primary/50"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
      </div>
    </div>
  );
}
