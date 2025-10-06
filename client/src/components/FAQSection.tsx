import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What is the dress code?",
      answer: "For the Traditional Engagement (July 11), please wear Traditional Attire. For the Wedding Ceremony (July 13), the dress code is Formal / Black Tie Optional.",
    },
    {
      question: "Where should I stay?",
      answer: "We have arranged special rates at the Grand Hotel Lagos and Victoria Suites. Please mention the Awopetu-Ralph wedding when booking. Both hotels are within 15 minutes of our venues.",
    },
    {
      question: "Will transportation be provided?",
      answer: "Yes, we will have shuttle services running between the recommended hotels and both venues. The shuttle schedule will be shared closer to the event dates.",
    },
    {
      question: "Can I bring a plus one?",
      answer: "If your invitation includes 'and guest,' you are welcome to bring a plus one. Please include their information when you RSVP.",
    },
    {
      question: "Is there parking available at the venues?",
      answer: "Yes, both venues have ample parking available. Valet service will also be provided at the Wedding Ceremony venue.",
    },
    {
      question: "What time should I arrive?",
      answer: "Please plan to arrive 15-20 minutes before the ceremony start time to allow for parking and seating.",
    },
    {
      question: "Will there be vegetarian/vegan meal options?",
      answer: "Absolutely! We will have vegetarian and vegan options available. Please indicate your dietary preferences in your RSVP.",
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: "We kindly ask that you enjoy an unplugged ceremony. Our professional photographers will capture all the special moments. You're welcome to take photos during the reception!",
    },
    {
      question: "What if I have food allergies?",
      answer: "Please let us know about any food allergies or dietary restrictions in your RSVP, and we will ensure appropriate accommodations are made.",
    },
    {
      question: "Will the events be outdoors or indoors?",
      answer: "The Traditional Engagement will be held outdoors (weather permitting, with indoor backup). The Wedding Ceremony and Reception will be held indoors.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our special day
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-card"
            >
              <AccordionTrigger
                className="font-serif text-lg font-semibold text-foreground hover:no-underline py-6"
                data-testid={`faq-question-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Have more questions?{" "}
            <a href="mailto:wedding@example.com" className="text-primary hover:underline font-medium">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
