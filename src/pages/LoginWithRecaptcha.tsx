import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const LoginWithRecaptcha = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const navigate = useNavigate();

  // You'll need to add your reCAPTCHA site key here
  const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY_HERE";

  const handleRecaptchaChange = async (token: string | null) => {
    if (token) {
      setIsLoading(true);
      try {
        // Here you would verify the token with your backend
        // For now, we'll simulate verification
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsVerified(true);
        toast({
          title: "Verification successful!",
          description: "Redirecting to game dashboard...",
        });
        
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } catch (error) {
        console.error("Verification failed:", error);
        toast({
          title: "Verification failed",
          description: "Please try again.",
          variant: "destructive",
        });
        recaptchaRef.current?.reset();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 gaming-card-gradient border-border/20 gaming-glow">
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold gaming-gradient bg-clip-text text-transparent">
              Gaming Platform
            </h1>
            <p className="text-muted-foreground">
              Verify you're human to continue
            </p>
          </div>

          <div className="flex justify-center">
            {RECAPTCHA_SITE_KEY !== "YOUR_RECAPTCHA_SITE_KEY_HERE" ? (
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
                theme="dark"
              />
            ) : (
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
                <div className="text-sm text-muted-foreground">
                  reCAPTCHA configuration needed
                </div>
                <div className="text-xs text-muted-foreground">
                  Add your site key to enable reCAPTCHA
                </div>
                <Button 
                  onClick={() => navigate("/dashboard")}
                  variant="default"
                  className="gaming-gradient border-0 gaming-glow-accent transition-smooth hover:scale-105"
                >
                  Skip to Dashboard (Demo)
                </Button>
              </div>
            )}
          </div>

          {isVerified && (
            <div className="text-sm text-gaming-accent animate-pulse flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-gaming-accent rounded-full animate-ping"></div>
              <span>Redirecting to dashboard...</span>
            </div>
          )}
          
          {isLoading && (
            <div className="text-sm text-muted-foreground">
              Verifying...
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default LoginWithRecaptcha;