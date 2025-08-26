import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 gaming-card-gradient border-border/20 gaming-glow text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold gaming-gradient bg-clip-text text-transparent">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist in our gaming platform.
          </p>
        </div>
        
        <Button 
          onClick={() => window.location.href = '/'}
          className="gaming-gradient border-0 gaming-glow-accent transition-smooth hover:scale-105"
        >
          <Home className="w-4 h-4 mr-2" />
          Return Home
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
