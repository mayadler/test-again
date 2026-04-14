import { Navigation } from "@/components/Navigation";
import { PlayerCard } from "@/components/PlayerCard";

export default function App() {
  const player = {
    name: "John Doe",
    score: 42,
    team: "A",
  };

  return (
    <>
      <Navigation />
      <div className="p-4">
        <PlayerCard player={player} />
      </div>
    </>
  );
}
