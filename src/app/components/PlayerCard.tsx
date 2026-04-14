import { Card } from "@/components/ui/layout";
import { Badge } from "@/components/ui/feedback";

export const PlayerCard = ({ player }: any) => {
  return (
    <Card>
      <Card.Header>{player.name}</Card.Header>
      <Card.Content>
        <p>Score: {player.score}</p>
        <Badge>{player.team}</Badge>
      </Card.Content>
    </Card>
  );
};
