import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export function OurStorySection() {
  const milestones = [
    {
      date: "March 2020",
      title: "First Meeting",
      description: "Our paths crossed at a mutual friend's gathering, and we instantly connected over our shared love for music and adventure.",
      side: "left",
    },
    {
      date: "August 2020",
      title: "First Date",
      description: "A simple coffee date turned into hours of conversation and laughter. We both knew this was something special.",
      side: "right",
    },
    {
      date: "December 2021",
      title: "Relationship Official",
      description: "After a year of growing closer, we made it official during a romantic beach sunset walk.",
      side: "left",
    },
    {
      date: "May 2023",
      title: "The Proposal",
      description: "Under the stars at our favorite restaurant, Tambari got down on one knee and asked the question that changed our lives forever.",
      side: "right",
    },
    {
      date: "July 2024",
      title: "Forever Begins",
      description: "And now we're getting married! Join us as we celebrate the beginning of our forever.",
      side: "left",
    },
  ];

  return (
    <section id="story" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  milestone.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
                data-testid={`milestone-${index}`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <Card className={`p-6 hover-elevate ${
                    milestone.side === "left" ? "md:mr-auto" : "md:ml-auto"
                  }`}>
                    <div className="text-sm font-semibold text-primary mb-2">
                      {milestone.date}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                </div>

                {/* Heart Icon (center) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center z-10">
                  <Heart className="w-6 h-6 text-primary-foreground fill-current" />
                </div>

                {/* Spacer for the other side */}
                <div className="w-full md:w-5/12" />
              </div>
            ))}
          </div>
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
