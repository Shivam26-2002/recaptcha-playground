import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, Plus, Users } from "lucide-react";

const GameDashboard = () => {
  const handleJoinGame = () => {
    console.log("Joining game...");
  };

  const handleCreateGame = () => {
    console.log("Creating game...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl p-12 gaming-card-gradient border-border/20 gaming-glow">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <div className="w-24 h-24 mx-auto gaming-gradient rounded-full flex items-center justify-center gaming-glow-accent">
              <Gamepad2 className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold gaming-gradient bg-clip-text text-transparent">
              Game Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to play? Choose your action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Button
              onClick={handleJoinGame}
              size="lg"
              className="h-32 flex flex-col items-center justify-center space-y-4 bg-gaming-accent hover:bg-gaming-accent/90 text-gaming-accent-foreground border-0 gaming-glow-accent transition-smooth hover:scale-105"
            >
              <Users className="w-8 h-8" />
              <span className="text-xl font-semibold">Join a Game</span>
            </Button>

            <Button
              onClick={handleCreateGame}
              size="lg" 
              className="h-32 flex flex-col items-center justify-center space-y-4 gaming-gradient border-0 gaming-glow transition-smooth hover:scale-105"
            >
              <Plus className="w-8 h-8" />
              <span className="text-xl font-semibold">Create a Game</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GameDashboard;