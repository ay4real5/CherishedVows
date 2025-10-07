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
        <Heart className="absolute top-20 left-10 w-8 h-8 text-primary/30 animate-float" />
        <Heart className="absolute bottom-32 right-20 w-6 h-6 text-accent/30 animate-float" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-40 right-32 w-6 h-6 text-primary/40 animate-pulse" />
        <Sparkles className="absolute bottom-48 left-24 w-8 h-8 text-accent/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-primary/20 p-12 md:p-16 space-y-10 animate-fade-in">
          
          {/* Top Decorative Element */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="mx-4">
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>

          {/* Invitation Text */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-muted-foreground font-serif tracking-wide italic">
              You are invited to the wedding of
            </p>
          </div>
          
          {/* Couple Names */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h1 className="font-serif text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              Yemisi
            </h1>
            <div className="flex items-center justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <div className="font-script text-6xl md:text-8xl text-primary mx-4 animate-float">&</div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h1 className="font-serif text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer" style={{ animationDelay: '0.5s' }}>
              Abisoye
            </h1>
          </div>

          {/* Hashtag */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-2xl md:text-3xl text-primary font-bold tracking-wide">
              #AbifoundhisMis
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-8">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <div className="h-px w-32 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-4"></div>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>

          {/* Wedding Details */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Wedding Ceremony
            </p>
            <p className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-wider">
              21 . 03 . 2026
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-6 pt-6 animate-slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-widest">
              All details are available on our website
            </p>
            
            <Button
              onClick={handleEnter}
              size="lg"
              className="px-16 py-7 text-lg font-serif shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
              data-testid="button-enter-website"
            >
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Click Here to Go to Our Wedding Website
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>

          {/* Bottom Decorative Element */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="mx-4">
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
