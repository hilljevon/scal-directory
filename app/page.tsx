import Image from "next/image";
import { DataTable } from "./Data-Table";
import { columns } from "./columns";
import { facilities } from "@/lib/data";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={facilities} />
    </div>
  );
}
