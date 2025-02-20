import { GlareCard } from "./glare-card";

export function GlareCardDemo() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-7 max-w-2xl mx-auto">
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="/screenshots/ss1-portrait.png"
          alt="Screenshot"
        />
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="/screenshots/ss2-portrait.png"
          alt="Screenshot"
        />
      </GlareCard>
      <GlareCard className="flex flex-col items-start justify-end">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="/screenshots/ss3-portrait.png"
          alt="Screenshot"
        />
      </GlareCard>
    </div>
  );
}
