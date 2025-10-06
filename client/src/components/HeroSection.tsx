import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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
      {/* Enhanced Background with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50 dark:from-rose-950 dark:via-pink-950 dark:to-amber-950">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
        {/* Animated floating shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-7xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="mx-4 w-2 h-2 rotate-45 bg-primary/50"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        
        <div className="mb-12">
          <h1 className="font-serif text-7xl md:text-9xl font-bold mb-6 text-foreground animate-fade-in bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
            Yemisi
          </h1>
          <div className="font-script text-6xl md:text-8xl text-primary mb-6 animate-float">&</div>
          <h1 className="font-serif text-7xl md:text-9xl font-bold mb-12 text-foreground animate-fade-in bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
            Bisoye
          </h1>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>

        <div className="space-y-4 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl text-foreground font-serif tracking-wide">
            Wedding Ceremony
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-primary font-serif">
            Saturday 21st March 2026
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 md:gap-8 mb-16 animate-slide-up" style={{ animationDelay: '0.8s' }} data-testid="countdown-timer">
          <div className="text-center group">
            <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md rounded-2xl p-6 md:p-8 min-w-[90px] md:min-w-[120px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"></div>
              <div className="relative text-4xl md:text-6xl font-bold text-primary font-serif">{timeLeft.days}</div>
              <div className="relative text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Days</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md rounded-2xl p-6 md:p-8 min-w-[90px] md:min-w-[120px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"></div>
              <div className="relative text-4xl md:text-6xl font-bold text-primary font-serif">{timeLeft.hours}</div>
              <div className="relative text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Hours</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md rounded-2xl p-6 md:p-8 min-w-[90px] md:min-w-[120px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"></div>
              <div className="relative text-4xl md:text-6xl font-bold text-primary font-serif">{timeLeft.minutes}</div>
              <div className="relative text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Minutes</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md rounded-2xl p-6 md:p-8 min-w-[90px] md:min-w-[120px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20 hover:border-primary/40 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"></div>
              <div className="relative text-4xl md:text-6xl font-bold text-primary font-serif">{timeLeft.seconds}</div>
              <div className="relative text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">Seconds</div>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="mx-4 w-2 h-2 rotate-45 bg-primary/50 animate-pulse"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <ChevronDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
