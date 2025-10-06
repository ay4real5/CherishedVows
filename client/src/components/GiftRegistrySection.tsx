import { Gift, Heart, Plane } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function GiftRegistrySection() {
  const registryOptions = [
    {
      icon: Gift,
      title: "Traditional Registry",
      description: "Browse our curated selection of gifts for our new home together",
      link: "#",
      buttonText: "View Registry",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Savings Pot",
      description: "Contribute to our future dreams and goals as we start this new chapter",
      link: "#",
      buttonText: "Contribute to Savings",
      color: "text-primary",
    },
    {
      icon: Plane,
      title: "Honeymoon Fund",
      description: "Help us create unforgettable memories on our dream honeymoon adventure",
      link: "#",
      buttonText: "Gift an Experience",
      color: "text-primary",
    },
  ];

  return (
    <section id="registry" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gift Registry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you wish to celebrate with us, here are a few options
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {registryOptions.map((option, index) => (
            <Card key={index} className="p-8 text-center hover-elevate" data-testid={`card-registry-${index}`}>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6`}>
                <option.icon className={`w-10 h-10 ${option.color}`} />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {option.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {option.description}
              </p>

              <Button
                variant="default"
                className="w-full"
                onClick={() => window.open(option.link, '_blank')}
                data-testid={`button-registry-${index}`}
              >
                {option.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            Your love and support mean the world to us
          </p>
        </div>
      </div>
    </section>
  );
}
