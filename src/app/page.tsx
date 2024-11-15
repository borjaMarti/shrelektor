import ShrelektorCard from "@/components/shrelektor-card/shrelektor-card"; // Your client-side component
import SpoilerCard from "@/components/spoiler-card/spoiler-card";
import { getServerData } from "@/lib/actions";

export default async function Home() {
  const { users, characters } = await getServerData();

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
      <ShrelektorCard users={users} characters={characters} />
      <SpoilerCard characters={characters} />
    </div>
  );
}
