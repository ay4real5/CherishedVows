import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import backgroundImage from "@assets/background_1759834199809.jpg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date("2026-03-21T15:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt="Wedding background" 
          className="w-full h-full object-cover blur-sm scale-105"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-7xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/50"></div>
          <div className="mx-4 w-2 h-2 rotate-45 bg-white/50"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/50"></div>
        </div>
        
        <div className="mb-12">
          <h1 className="font-serif text-7xl md:text-9xl font-bold mb-6 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Yemisi
          </h1>
          <div className="font-script text-6xl md:text-8xl text-primary mb-6 animate-float">&</div>
          <h1 className="font-serif text-7xl md:text-9xl font-bold mb-12 text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Bisoye
          </h1>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        </div>

        <div className="space-y-4 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl text-white font-serif tracking-wide">
            Wedding Ceremony
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-primary font-serif">
            Saturday 21st March 2026
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 md:gap-8 mb-16 animate-slide-up" style={{ animationDelay: '0.8s' }} data-testid="countdown-timer">
          <div className="text-center group">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 min-w-[90px] md:min-w-[120px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
              <div className="relative text-4xl md:text-6xl font-bold text-white font-serif">{timeLeft.days}</div>
              <div className="relative text-xs md:text-sm text-white/80 mt-2 uppercase tracking-wider">Days</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 min-w-[90px] md:min-w-[120px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
              <div className="relative text-4xl md:text-6xl font-bold text-white font-serif">{timeLeft.hours}</div>
              <div className="relative text-xs md:text-sm text-white/80 mt-2 uppercase tracking-wider">Hours</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 min-w-[90px] md:min-w-[120px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
              <div className="relative text-4xl md:text-6xl font-bold text-white font-serif">{timeLeft.minutes}</div>
              <div className="relative text-xs md:text-sm text-white/80 mt-2 uppercase tracking-wider">Minutes</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 min-w-[90px] md:min-w-[120px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
              <div className="relative text-4xl md:text-6xl font-bold text-white font-serif">{timeLeft.seconds}</div>
              <div className="relative text-xs md:text-sm text-white/80 mt-2 uppercase tracking-wider">Seconds</div>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/50"></div>
          <div className="mx-4 w-2 h-2 rotate-45 bg-white/50 animate-pulse"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/50"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
