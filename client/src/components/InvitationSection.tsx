import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function InvitationSection() {
  const events = [
    {
      name: "Wedding Ceremony",
      date: "March 21, 2026",
      time: "11:00 AM",
      venue: "Kirkleatham Walled Garden",
      address: "Plantation Road, Redcar, TS10 4QT",
      locationDetails: "Located just off the A174/B1269 roundabout. The nearest train station is Redcar Central.",
      mapUrl: "https://maps.google.com/?q=Kirkleatham+Walled+Garden+Plantation+Road+Redcar+TS10+4QT",
      dressCode: "Cream coloured outfit / Asoebi fabric available",
      theme: "Elegant Romance",
    },
  ];

  return (
    <section id="invitation" className="relative py-20 md:py-32 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="mx-4 w-2 h-2 rotate-45 bg-primary/50"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            You're Invited
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            Join us in celebrating our special day
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="relative p-10 hover-elevate shadow-2xl border-2 border-primary/10 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-sm overflow-hidden group">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
              
              <div className="relative">
                <div className="text-center mb-10">
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                    {event.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
                    <div className="w-2 h-2 rotate-45 bg-primary"></div>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-5 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-lg">{event.date}</p>
                      <p className="text-muted-foreground text-sm mt-1">Mark your calendar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-lg">{event.time}</p>
                      <p className="text-muted-foreground text-sm mt-1">Please arrive 15 minutes early</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-lg">{event.venue}</p>
                      <p className="text-muted-foreground text-sm mt-1">{event.address}</p>
                      {event.locationDetails && (
                        <p className="text-muted-foreground text-sm mt-2 italic">{event.locationDetails}</p>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t-2 border-primary/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-4 rounded-lg bg-accent/10">
                        <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Dress Code</p>
                        <p className="text-muted-foreground font-serif">{event.dressCode}</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-accent/10">
                        <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Theme</p>
                        <p className="text-muted-foreground font-serif">{event.theme}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-8">
                  <Button
                    variant="default"
                    className="flex-1"
                    onClick={() => {
                      const eventDate = new Date(event.date + " " + event.time);
                      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:${event.name} - Yemisi & Bisoye
LOCATION:${event.address}
END:VEVENT
END:VCALENDAR`;
                      const blob = new Blob([icsContent], { type: 'text/calendar' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `${event.name.replace(/\s+/g, '-')}.ics`;
                      a.click();
                    }}
                    data-testid={`button-add-calendar-${index}`}
                  >
                    Add to Calendar
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(event.mapUrl, '_blank')}
                    data-testid={`button-directions-${index}`}
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
