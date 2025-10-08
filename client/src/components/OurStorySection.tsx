import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export function OurStorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our story isn't perfect, but it's perfectly ours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Abisoye's Message */}
          <Card className="p-8 hover-elevate">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary fill-current" />
              </div>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
              From Abisoye
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Aduki and I have been through many ups and downs, and each one has only made us stronger, closer, and more certain of what we share.
              </p>
              <p>
                She's an incredibly good person, smart, ambitious and focused.
              </p>
              <p>
                With her, life feels fuller, brighter, and more beautiful than I ever imagined. I don't just want to spend my days with her, I want to grow, laugh, dream, and face everything together. She is my heart, my home, and my forever.
              </p>
            </div>
          </Card>

          {/* Right Side - Yemisi's Message */}
          <Card className="p-8 hover-elevate">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary fill-current" />
              </div>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
              From Yemisi
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
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
          </Card>
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-primary/5">
            <p className="font-script text-3xl text-primary mb-2">
              And now we're getting married!
            </p>
            <p className="text-muted-foreground">
              We can't wait to celebrate with you
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
