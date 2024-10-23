import { Button } from "@/components/ui/button";
import { primary, secondary } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-6">
      <section className="flex flex-col items-center space-y-2">
        <h1
          className={cn(
            secondary.className,
            "text-7xl uppercase tracking-wide"
          )}
        >
          title font
        </h1>
        <span className="text-xl text-muted-foreground">
          This is the body font.
        </span>
      </section>
      <br />
      <section className="grid grid-cols-3 gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
      </section>
      <br />
      <section className="w-[300px] h-[200px] rounded-md p-4 bg-card text-card-foreground">
        <h1 className="font-semibold capitalize text-2xl">Card Title</h1>
        <span className="text-zinc-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
          excepturi.
        </span>
      </section>
    </div>
  );
}
