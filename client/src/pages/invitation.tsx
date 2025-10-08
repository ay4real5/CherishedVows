import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import backgroundImage from "@assets/background_1759834199809.jpg";

export default function Invitation() {
  const [, setLocation] = useLocation();

  const handleEnter = () => {
    setLocation("/home");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-amber-50 to-orange-50 dark:from-teal-950 dark:via-amber-950 dark:to-orange-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Wedding Background" 
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-amber-500/20 to-orange-500/20" />
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 w-6 h-6 text-primary/30 animate-float" />
        <Heart className="absolute bottom-32 right-20 w-5 h-5 text-accent/30 animate-float" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-40 right-32 w-5 h-5 text-primary/40 animate-pulse" />
        <Sparkles className="absolute bottom-48 left-24 w-6 h-6 text-accent/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content Card - Fits in viewport */}
      <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto h-full flex items-center py-8">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border border-primary/20 p-4 md:p-8 w-full space-y-3 md:space-y-4 animate-fade-in">
          
          {/* Top Decorative Element */}
          <div className="flex items-center justify-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="mx-2">
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>

          {/* Invitation Text */}
          <p className="text-sm md:text-base text-muted-foreground font-serif tracking-wide italic">
            You are invited to the wedding of
          </p>
          
          {/* Couple Names */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
              Yemisi
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="font-script text-3xl md:text-5xl text-primary mx-2 md:mx-3 animate-float">&</div>
              <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
              Abisoye
            </h1>
          </div>

          {/* Hashtag */}
          <p className="text-base md:text-xl text-primary font-bold tracking-wide">
            #AbifoundhisMisi
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center py-2">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-2"></div>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
          </div>

          {/* Wedding Details */}
          <div className="space-y-1">
            <p className="text-lg md:text-xl font-serif font-bold text-foreground">
              Wedding Ceremony
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-primary tracking-wider">
              21 . 03 . 2026
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-3 pt-2">
            <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-widest">
              All details are available on our website
            </p>
            
            <Button
              onClick={handleEnter}
              size="lg"
              className="px-8 md:px-12 py-5 md:py-6 text-sm md:text-base font-serif shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
              data-testid="button-enter-website"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2 animate-pulse" />
              Click Here to Go to Our Wedding Website
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 ml-2 animate-pulse" />
            </Button>
          </div>

          {/* Bottom Decorative Element */}
          <div className="flex items-center justify-center pt-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="mx-2">
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
