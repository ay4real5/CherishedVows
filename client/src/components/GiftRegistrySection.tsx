import { Gift, Banknote, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function GiftRegistrySection() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const bankDetails = {
    name: "Yemisi Arogundade",
    bank: "Monzo Bank",
    accountNumber: "25244442",
    sortCode: "04-00-04",
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <section id="registry" className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Registry
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Firstly, we would love to say a massive thank you for the love and support you have all shown to us! The most valued present to us is your presence in sharing our day, but if you should wish to contribute in some other way, we have created a gift registry and savings pot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Gift Registry Card */}
          <Card className="p-8 text-center hover-elevate" data-testid="card-gift-registry">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Gift className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Gift Registry
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Browse our curated selection of gifts for our new home together
            </p>

            <Button
              variant="default"
              className="w-full"
              data-testid="button-view-registry"
              asChild
            >
              <a 
                href="https://www.amazon.co.uk/wedding/registry/27TQPQLKJ0KST" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Registry
              </a>
            </Button>
          </Card>

          {/* Bank Transfer Card */}
          <Card className="p-8 hover-elevate" data-testid="card-bank-transfer">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Banknote className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-center">
              Bank Transfer
            </h3>
            
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                <span className="text-sm font-medium text-muted-foreground">Name</span>
                <button
                  onClick={() => copyToClipboard(bankDetails.name, "Name")}
                  className="text-foreground font-semibold hover:text-primary transition-colors"
                  data-testid="button-copy-name"
                >
                  {bankDetails.name}
                </button>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                <span className="text-sm font-medium text-muted-foreground">Bank</span>
                <button
                  onClick={() => copyToClipboard(bankDetails.bank, "Bank")}
                  className="text-foreground font-semibold hover:text-primary transition-colors"
                  data-testid="button-copy-bank"
                >
                  {bankDetails.bank}
                </button>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                <span className="text-sm font-medium text-muted-foreground">Account Number</span>
                <button
                  onClick={() => copyToClipboard(bankDetails.accountNumber, "Account number")}
                  className="text-foreground font-semibold hover:text-primary transition-colors font-mono"
                  data-testid="button-copy-account"
                >
                  {bankDetails.accountNumber}
                </button>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                <span className="text-sm font-medium text-muted-foreground">Sort Code</span>
                <button
                  onClick={() => copyToClipboard(bankDetails.sortCode, "Sort code")}
                  className="text-foreground font-semibold hover:text-primary transition-colors font-mono"
                  data-testid="button-copy-sort"
                >
                  {bankDetails.sortCode}
                </button>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center italic">
              Click any detail to copy to clipboard
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-current" />
            Your love and support mean the world to us
          </p>
        </div>
      </div>
    </section>
  );
}
