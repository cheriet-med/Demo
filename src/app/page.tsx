import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center  sm:items-start">
        <Image
          src="/logo.png"
          alt="Next.js logo"
          width={360}
          height={76}
          priority
        />
        <h1 className="text-gray-800">Real Demo Review – Milestone Implementation for TrustDine Project</h1>
     <p className="text-gray-800">This live demo presents the current milestone implementation for the TrustDine project, showcasing tangible progress across key functional and visual components. The goal is to provide stakeholders with a transparent and hands-on view of what has been built so far, verify that it aligns with expectations, and gather feedback before proceeding to the next phase.</p>
      </main>
 
    </div>
  );
}
