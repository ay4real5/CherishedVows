import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Users, Calendar } from "lucide-react";
import type { Rsvp } from "@shared/schema";

export default function Admin() {
  const { data: rsvps, isLoading } = useQuery<Rsvp[]>({
    queryKey: ["/api/rsvps"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading RSVPs...</p>
        </div>
      </div>
    );
  }

  const attendingCount = rsvps?.filter((r) => r.attending).length || 0;
  const notAttendingCount = (rsvps?.length || 0) - attendingCount;
  const totalGuests = attendingCount + (rsvps?.filter((r) => r.attending && r.plusOneName).length || 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
            RSVP Management
          </h1>
          <p className="text-lg text-muted-foreground">
            View all guest responses for your wedding
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{rsvps?.length || 0}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attending</CardTitle>
              <CheckCircle className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{attendingCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Not Attending</CardTitle>
              <XCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-muted-foreground">{notAttendingCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Guests</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{totalGuests}</div>
              <p className="text-xs text-muted-foreground mt-1">Including plus-ones</p>
            </CardContent>
          </Card>
        </div>

        {/* RSVP List */}
        <Card>
          <CardHeader>
            <CardTitle>Guest List</CardTitle>
            <CardDescription>All RSVP submissions in chronological order</CardDescription>
          </CardHeader>
          <CardContent>
            {!rsvps || rsvps.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No RSVPs yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {rsvps.map((rsvp) => (
                  <div
                    key={rsvp.id}
                    className="flex items-start justify-between p-4 border border-border rounded-lg hover-elevate"
                    data-testid={`rsvp-${rsvp.id}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg text-foreground">
                          {rsvp.guestName}
                        </h3>
                        <Badge variant={rsvp.attending ? "default" : "secondary"}>
                          {rsvp.attending ? "Attending" : "Not Attending"}
                        </Badge>
                      </div>
                      
                      {rsvp.plusOneName && rsvp.attending && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>Plus One: {rsvp.plusOneName}</span>
                        </div>
                      )}

                      {rsvp.createdAt && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Submitted: {new Date(rsvp.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
