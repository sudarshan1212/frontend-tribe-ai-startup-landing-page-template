import { Button } from "@/components/Button";
import starbg from "@/assets/stars.png";
export const Hero = () => {
  return (
    <section
      className="h-[478px] flex items-center"
      style={{
        background: `url(${starbg.src})`,
      }}
    >

      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,60))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="container relative">
        <h1 className="text-8xl font-semibold text-center tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,2,138,.5))] bg-white text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
          voluptates quaerat, consequuntur fuga numquam est ab aliquid suscipit
          qui pariatur libero quo fugiat odit esse!
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </section>
  );
};
