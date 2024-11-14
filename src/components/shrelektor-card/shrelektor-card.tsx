"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { shrelekcionar } from "@/lib/actions";

type User = {
  id: string;
  name: string;
  character: string | null;
  selected: boolean;
};

type Character = {
  id: string;
  name: string;
  selected: boolean;
};

type ShrelektorCardProps = {
  users: User[];
  characters: Character[];
};

const ShrelektorCard: React.FC<ShrelektorCardProps> = ({
  users,
  characters,
}) => {
  const { toast } = useToast();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [openUsers, setOpenUsers] = useState(false);
  const [openCharacters, setOpenCharacters] = useState(false);

  const handleShrelekcionar = async () => {
    if (!selectedUser || !selectedCharacter) return;

    const result = await shrelekcionar(selectedUser.id, selectedCharacter.id);

    if (result.error) {
      toast({
        variant: "destructive",
        description: result.error,
      });
    } else {
      toast({
        description: result.message,
      });
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Shrelektor</CardTitle>
        <CardDescription>
          Elige quién eres y qué personaje quieres ser.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="user">Quién eres</Label>
            <Popover open={openUsers} onOpenChange={setOpenUsers}>
              <PopoverTrigger asChild>
                <Button
                  id="user"
                  variant="outline"
                  role="combobox"
                  aria-expanded={openUsers}
                  className="justify-between"
                >
                  {selectedUser
                    ? users.find((user) => user.id === selectedUser.id)?.name
                    : "Elige"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Command>
                  <CommandInput placeholder="Elige" />
                  <CommandList>
                    <CommandEmpty>No se ha encontrado el usuario.</CommandEmpty>
                    <CommandGroup>
                      {users.map((user) => (
                        <CommandItem
                          key={user.id}
                          value={user.name}
                          onSelect={(value: string) => {
                            const foundUser = users.find(
                              (user) => user.name === value,
                            );
                            setSelectedUser(
                              foundUser === selectedUser
                                ? null
                                : foundUser || null,
                            );
                            setOpenUsers(false);
                          }}
                        >
                          {user.name}
                          <Check
                            className={cn(
                              "ml-auto",
                              selectedUser === user
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="character">Qué personaje quieres ser</Label>
            <Popover open={openCharacters} onOpenChange={setOpenCharacters}>
              <PopoverTrigger asChild>
                <Button
                  id="character"
                  variant="outline"
                  role="combobox"
                  aria-expanded={openCharacters}
                  className="justify-between"
                >
                  {selectedCharacter
                    ? characters.find(
                        (character) => character.id === selectedCharacter.id,
                      )?.name
                    : "Elige"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Command>
                  <CommandInput placeholder="Elige" />
                  <CommandList>
                    <CommandEmpty>
                      No se ha encontrado el personaje.
                    </CommandEmpty>
                    <CommandGroup>
                      {characters.map((character) => (
                        <CommandItem
                          key={character.id}
                          value={character.name}
                          onSelect={(value: string) => {
                            const foundCharacter = characters.find(
                              (character) => character.name === value,
                            );
                            setSelectedCharacter(
                              foundCharacter === selectedCharacter
                                ? null
                                : foundCharacter || null,
                            );
                            setOpenCharacters(false);
                          }}
                        >
                          {character.name}
                          <Check
                            className={cn(
                              "ml-auto",
                              selectedCharacter === character
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button disabled={!selectedUser || !selectedCharacter}>
              Shrelekcionar
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se podrá revertir.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Parapara</AlertDialogCancel>
              <AlertDialogAction onClick={handleShrelekcionar}>
                Palante
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default ShrelektorCard;
