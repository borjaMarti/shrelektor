import ShrelektorCard from "@/components/shrelektor-card/shrelektor-card"; // Your client-side component
import { getServerData, shrelekcionar } from "@/lib/actions";

export default async function Home() {
  const { users, characters } = await getServerData();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ShrelektorCard
        users={users}
        characters={characters}
        shrelekcionar={shrelekcionar}
      />
    </div>
  );
}
