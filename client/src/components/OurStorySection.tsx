import { Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export function OurStorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 right-10 w-16 h-16 text-primary/10 animate-float" />
        <Heart className="absolute bottom-32 left-10 w-12 h-12 text-accent/10 animate-float" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-1/3 left-20 w-8 h-8 text-primary/20 animate-pulse" />
        <Sparkles className="absolute bottom-1/4 right-20 w-10 h-10 text-accent/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          {/* Top Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="mx-4">
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Our story isn't perfect, but it's perfectly ours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Center Heart Divider */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl animate-pulse-glow">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
          </div>

          {/* Left Side - Abisoye's Message */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="relative p-8 hover-elevate bg-gradient-to-br from-card to-card border-2 border-primary/20 shadow-xl">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-lg"></div>

              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-primary fill-current animate-float" />
                  </div>
                </div>
              </div>

              <h3 className="font-script text-3xl md:text-4xl font-bold text-center text-primary mb-8">
                From Abisoye
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-center md:text-left">
                <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1">
                  Aduki and I have been through many ups and downs, and each one has only made us stronger, closer, and more certain of what we share.
                </p>
                <p>
                  She's an incredibly good person, smart, ambitious and focused.
                </p>
                <p>
                  With her, life feels fuller, brighter, and more beautiful than I ever imagined. I don't just want to spend my days with her, I want to grow, laugh, dream, and face everything together. She is my heart, my home, and my forever.
                </p>
              </div>

              {/* Bottom Flourish */}
              <div className="flex items-center justify-center mt-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </div>
            </Card>
          </div>

          {/* Right Side - Yemisi's Message */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Card className="relative p-8 hover-elevate bg-gradient-to-bl from-card to-card border-2 border-accent/20 shadow-xl">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/30 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/30 rounded-bl-lg"></div>

              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <Heart className="w-10 h-10 text-accent fill-current animate-float" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

              <h3 className="font-script text-3xl md:text-4xl font-bold text-center text-accent mb-8">
                From Yemisi
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-center md:text-left">
                <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-accent first-letter:mr-1">
                  Abisoye Mi, my amazing man, the man that gives me butterflies.
                </p>
                <p>
                  Abisoye has shown me the importance of having a loving relationship. Over the years our love has grown into something truly special. I have discovered that the best part of life is simply being by his side.
                </p>
                <p>
                  Abiskoko is the most incredible man I have ever met, he is the definition of strong, generous and kind. In him I found a love that is more than I ever dreamt possible
                </p>
                <p>
                  It's you and me today, tomorrow and forever 😊
                </p>
              </div>

              {/* Bottom Flourish */}
              <div className="flex items-center justify-center mt-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="inline-block p-10 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/20 shadow-2xl hover-elevate">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <p className="font-script text-4xl text-primary">
                And now we're getting married!
              </p>
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <p className="text-muted-foreground text-lg">
              We can't wait to celebrate with you
            </p>
          </Card>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex items-center justify-center mt-16">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="mx-4">
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
