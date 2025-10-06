import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { BridalPartyMember } from "@shared/schema";

export function BridalPartySection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: members = [], isLoading, error } = useQuery<BridalPartyMember[]>({
    queryKey: ["/api/bridal-party"],
  });

  const groomsmen = members.filter(m => m.role === "groomsman");
  const bridesmaids = members.filter(m => m.role === "bridesmaid");

  if (isLoading) {
    return (
      <section id="bridal-party" className="py-20 md:py-32 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="bridal-party" className="py-20 md:py-32 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <p className="text-destructive">Failed to load bridal party members. Please try again later.</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="bridal-party" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Bridal Party
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The special people standing beside us on our big day
          </p>
        </div>

        {/* Groomsmen */}
        <div className="mb-16">
          <h3 className="font-serif text-3xl font-bold text-center text-foreground mb-8">
            Groomsmen
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {groomsmen.map((member) => (
              <Card key={member.id} className="p-6 hover-elevate" data-testid={`card-groomsman-${member.id}`}>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src={member.photoUrl || undefined} alt={member.name} />
                    <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">
                      {member.name}
                    </h4>
                    <p className="text-primary font-medium">{member.title}</p>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all ${
                  expandedId === member.id ? 'max-h-96' : 'max-h-20'
                }`}>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.story}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                  className="mt-4 w-full"
                  data-testid={`button-expand-${member.id}`}
                >
                  {expandedId === member.id ? (
                    <>
                      Show Less <ChevronUp className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read Story <ChevronDown className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Bridesmaids */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-center text-foreground mb-8">
            Bridesmaids
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {bridesmaids.map((member) => (
              <Card key={member.id} className="p-6 hover-elevate" data-testid={`card-bridesmaid-${member.id}`}>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src={member.photoUrl || undefined} alt={member.name} />
                    <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">
                      {member.name}
                    </h4>
                    <p className="text-primary font-medium">{member.title}</p>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all ${
                  expandedId === member.id ? 'max-h-96' : 'max-h-20'
                }`}>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.story}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                  className="mt-4 w-full"
                  data-testid={`button-expand-${member.id}`}
                >
                  {expandedId === member.id ? (
                    <>
                      Show Less <ChevronUp className="ml-2 w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Read Story <ChevronDown className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
