import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Heart, MessageSquare, Loader2 } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { GuestMessage } from "@shared/schema";

const messageSchema = z.object({
  guestName: z.string().min(2, "Please enter your name"),
  content: z.string().min(10, "Please write at least 10 characters"),
  messageType: z.literal("text"),
});

type MessageFormData = z.infer<typeof messageSchema>;

export function GuestbookSection() {
  const { toast } = useToast();

  const { data: messages = [], isLoading, error } = useQuery<GuestMessage[]>({
    queryKey: ["/api/guest-messages"],
  });

  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      guestName: "",
      content: "",
      messageType: "text",
    },
  });

  const createMessageMutation = useMutation({
    mutationFn: async (data: MessageFormData) => {
      return apiRequest("POST", "/api/guest-messages", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/guest-messages"] });
      form.reset();
      toast({
        title: "Message Posted!",
        description: "Your message has been added to the guestbook.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to post message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const heartMessageMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("POST", `/api/guest-messages/${id}/heart`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/guest-messages"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to add heart. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: MessageFormData) => {
    createMessageMutation.mutate(data);
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Digital Guestbook
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leave us a message to cherish forever
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Message Form */}
          <div>
            <Card className="p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Leave a Message
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="guestName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-guestbook-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share your well wishes for the happy couple..."
                            rows={5}
                            {...field}
                            data-testid="textarea-guestbook-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={createMessageMutation.isPending}
                    data-testid="button-submit-message"
                  >
                    {createMessageMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Posting...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Post Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          {/* Messages Feed */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Messages from Loved Ones
            </h3>
            {error ? (
              <Card className="p-8 text-center">
                <p className="text-destructive">
                  Failed to load messages. Please try again later.
                </p>
              </Card>
            ) : isLoading ? (
              <div className="flex justify-center items-center min-h-[200px]">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {messages.length === 0 ? (
                  <Card className="p-8 text-center">
                    <p className="text-muted-foreground">
                      No messages yet. Be the first to leave a message!
                    </p>
                  </Card>
                ) : (
                  messages.map((message) => (
                    <Card key={message.id} className="p-6 hover-elevate" data-testid={`message-${message.id}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{message.guestName}</h4>
                          <p className="text-sm text-muted-foreground">
                            {message.createdAt ? new Date(message.createdAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            }) : 'Just now'}
                          </p>
                        </div>
                        <button
                          onClick={() => heartMessageMutation.mutate(message.id)}
                          disabled={heartMessageMutation.isPending}
                          className="flex items-center gap-1 text-primary hover-elevate px-3 py-1 rounded-md disabled:opacity-50"
                          data-testid={`button-heart-${message.id}`}
                        >
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{message.hearts || "0"}</span>
                        </button>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{message.content}</p>
                    </Card>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
