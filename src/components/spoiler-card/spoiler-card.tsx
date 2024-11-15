"use client";
import { useState } from "react";
import { Character } from "@prisma/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SpoilerCardProps = {
  characters: Character[];
};

const SpoilerCard: React.FC<SpoilerCardProps> = ({ characters }) => {
  const [showSpoilers, setShowSpoilers] = useState(false);
  const spoilers = characters.filter((character) => character.selected);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Spoilers 🤫</CardTitle>
      </CardHeader>
      <CardContent>
        {!showSpoilers ? (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>SPOILERS!!</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Se mostrarán los personajes elegidos
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col">
                  <span>¿💯%?</span>
                  <span>
                    Si clicas &quot;Palante&quot; verás los personajes que ya ha
                    elegido la gente.
                  </span>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Parapara</AlertDialogCancel>
                <AlertDialogAction onClick={() => setShowSpoilers(true)}>
                  Palante
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <ul>
            {spoilers.map((character) => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default SpoilerCard;
