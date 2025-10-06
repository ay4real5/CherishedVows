import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface PasswordGateProps {
  onUnlock: () => void;
}

export function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const verifyPasswordMutation = useMutation({
    mutationFn: async (pwd: string) => {
      return apiRequest("POST", "/api/verify-password", { password: pwd });
    },
    onSuccess: (data: any) => {
      if (data.valid) {
        sessionStorage.setItem("wedding_authenticated", "true");
        onUnlock();
      } else {
        setError(true);
        setTimeout(() => setError(false), 2000);
      }
    },
    onError: () => {
      setError(true);
      setTimeout(() => setError(false), 2000);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyPasswordMutation.mutate(password);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('#')}9C27B0' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative w-full max-w-md px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-serif text-5xl mb-4 text-foreground">
            Yemisi <span className="font-script text-primary">&</span> Bisoye
          </h1>
          <p className="text-muted-foreground">Please enter the event password from your invitation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`text-center text-lg h-14 ${error ? 'border-destructive' : ''}`}
              data-testid="input-password"
              autoFocus
              disabled={verifyPasswordMutation.isPending}
            />
            {error && (
              <p className="text-destructive text-sm mt-2 text-center">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-lg"
            variant="default"
            data-testid="button-unlock"
            disabled={verifyPasswordMutation.isPending}
          >
            {verifyPasswordMutation.isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Verifying...
              </>
            ) : (
              "Enter Wedding Website"
            )}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Password hint: Event password from your invitation
        </p>
      </div>
    </div>
  );
}
