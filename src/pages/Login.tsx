import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Login = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  // Mock reCAPTCHA verification for now
  const handleRecaptchaVerify = () => {
    setIsVerified(true);
    // Simulate verification delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
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

          {/* Mock reCAPTCHA - Replace with actual Google reCAPTCHA */}
          <div className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <div className="text-sm text-muted-foreground mb-4">
                reCAPTCHA will be integrated here
              </div>
              <Button 
                onClick={handleRecaptchaVerify}
                disabled={isVerified}
                variant="default"
                className="gaming-gradient border-0 gaming-glow-accent transition-smooth hover:scale-105"
              >
                {isVerified ? "Verified ✓" : "Verify Human"}
              </Button>
            </div>
            
            {isVerified && (
              <div className="text-sm text-gaming-accent animate-pulse">
                Redirecting to dashboard...
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;