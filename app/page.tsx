import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";

export default async function Home() {

  return (
    <main>
      <div className="text-center border-b border-t mb-6">
      <p className="text-[115px] font-semibold">Travel Blog</p>
    </div>
    </main>
    
  
  );
}
export const metadata:Metadata = {
  title:'Blog Home',
  description : 'All Blog'
}