import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const rsvpSchema = z.object({
  guestName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  attendingEngagement: z.boolean(),
  attendingWedding: z.boolean(),
  mealPreference: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  plusOneName: z.string().optional(),
  plusOneEmail: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  songRequest: z.string().optional(),
});

type RsvpFormData = z.infer<typeof rsvpSchema>;

export function RsvpForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 6;
  const { toast } = useToast();

  const form = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guestName: "",
      email: "",
      attendingEngagement: false,
      attendingWedding: false,
      mealPreference: "",
      dietaryRestrictions: "",
      plusOneName: "",
      plusOneEmail: "",
      songRequest: "",
    },
  });

  const createRsvpMutation = useMutation({
    mutationFn: async (data: RsvpFormData) => {
      return apiRequest("POST", "/api/rsvps", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "RSVP Received!",
        description: "Thank you for confirming your attendance.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit RSVP. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: RsvpFormData) => {
    createRsvpMutation.mutate(data);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 md:py-32 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center">
            <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
              Thank You!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                form.reset();
              }}
              variant="outline"
              data-testid="button-submit-another"
            >
              Submit Another RSVP
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground">
            Please let us know if you can join us
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 mx-1 rounded-full transition-colors ${
                  i + 1 <= currentStep ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="p-8">
              {/* Step 1: Guest Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Your Information
                  </h3>
                  <FormField
                    control={form.control}
                    name="guestName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-guest-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 2: Attendance */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Which Events Will You Attend?
                  </h3>
                  <FormField
                    control={form.control}
                    name="attendingEngagement"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-3 space-y-0 p-4 border rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-engagement"
                          />
                        </FormControl>
                        <div className="flex-1">
                          <FormLabel className="font-medium cursor-pointer">
                            Traditional Engagement - July 11, 2024
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="attendingWedding"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-3 space-y-0 p-4 border rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-wedding"
                          />
                        </FormControl>
                        <div className="flex-1">
                          <FormLabel className="font-medium cursor-pointer">
                            Wedding Ceremony - July 13, 2024
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 3: Meal Preference */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Meal Preference
                  </h3>
                  <FormField
                    control={form.control}
                    name="mealPreference"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Please select your meal preference</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-meal">
                              <SelectValue placeholder="Select a meal option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="chicken">Chicken</SelectItem>
                            <SelectItem value="beef">Beef</SelectItem>
                            <SelectItem value="fish">Fish</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian</SelectItem>
                            <SelectItem value="vegan">Vegan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 4: Dietary Restrictions */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Dietary Restrictions
                  </h3>
                  <FormField
                    control={form.control}
                    name="dietaryRestrictions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Any allergies or dietary restrictions?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please let us know about any allergies or dietary requirements..."
                            {...field}
                            data-testid="textarea-dietary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 5: Plus One */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Plus One (Optional)
                  </h3>
                  <FormField
                    control={form.control}
                    name="plusOneName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Guest Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Guest's full name" {...field} data-testid="input-plus-one-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="plusOneEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Guest Email</FormLabel>
                        <FormControl>
                          <Input placeholder="guest@example.com" type="email" {...field} data-testid="input-plus-one-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Step 6: Song Request */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Song Request
                  </h3>
                  <FormField
                    control={form.control}
                    name="songRequest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What song would you like to hear at the reception?</FormLabel>
                        <FormControl>
                          <Input placeholder="Song title and artist" {...field} data-testid="input-song-request" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </Card>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1"
                  data-testid="button-previous"
                >
                  Previous
                </Button>
              )}
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1"
                  data-testid="button-next"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={createRsvpMutation.isPending}
                  data-testid="button-submit-rsvp"
                >
                  {createRsvpMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Confirm Attendance"
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
