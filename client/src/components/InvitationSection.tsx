import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function InvitationSection() {
  const events = [
    {
      name: "Wedding Ceremony",
      date: "March 21, 2026",
      time: "3:00 PM",
      venue: "Kirkleatham Walled Garden",
      address: "Plantation Road, Redcar, TS10 4QT",
      locationDetails: "Located just off the A174/B1269 roundabout. The nearest train station is Redcar Central.",
      mapUrl: "https://maps.google.com/?q=Kirkleatham+Walled+Garden+Plantation+Road+Redcar+TS10+4QT",
      dressCode: "Formal / Black Tie Optional",
      theme: "Elegant Romance",
    },
  ];

  return (
    <section id="invitation" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            You're Invited
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating our special day
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="p-8 hover-elevate">
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl font-bold text-primary mb-2">
                  {event.name}
                </h3>
                <div className="w-16 h-1 bg-primary/30 mx-auto" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">{event.date}</p>
                    <p className="text-muted-foreground text-sm">Mark your calendar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">{event.time}</p>
                    <p className="text-muted-foreground text-sm">Please arrive 15 minutes early</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">{event.venue}</p>
                    <p className="text-muted-foreground text-sm">{event.address}</p>
                    {event.locationDetails && (
                      <p className="text-muted-foreground text-sm mt-1">{event.locationDetails}</p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-foreground">Dress Code</p>
                    <p className="text-muted-foreground text-sm">{event.dressCode}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Theme</p>
                    <p className="text-muted-foreground text-sm">{event.theme}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="default"
                    className="flex-1"
                    onClick={() => {
                      const eventDate = new Date(event.date + " " + event.time);
                      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:${event.name} - Christiana & Tambari
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
