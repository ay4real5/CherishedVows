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
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-card">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 18A32 32 0 1 0 50 82 32 32 0 1 0 50 18M50 25A25 25 0 1 1 50 75 25 25 0 1 1 50 25' fill='%23${encodeURIComponent('#')}000' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-foreground animate-fade-in">
            Yemisi
          </h1>
          <div className="font-script text-5xl md:text-7xl text-primary mb-6">&</div>
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-12 text-foreground animate-fade-in">
            Bisoye
          </h1>
        </div>

        <div className="space-y-4 mb-16">
          <p className="text-lg md:text-xl text-foreground/90 font-serif">
            Wedding Ceremony: <span className="font-semibold">Saturday 21st March 2026</span>
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 md:gap-8 mb-16" data-testid="countdown-timer">
          <div className="text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold text-primary font-serif">{timeLeft.days}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">Days</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold text-primary font-serif">{timeLeft.hours}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">Hours</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold text-primary font-serif">{timeLeft.minutes}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">Minutes</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold text-primary font-serif">{timeLeft.seconds}</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2">Seconds</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-foreground/60" />
        </div>
      </div>
    </section>
  );
}
