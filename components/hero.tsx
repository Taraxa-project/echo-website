import { Navbar } from "./navbar";
import { Stats } from "./stats";

export const Hero = () => {
  return (
    <div className="w-full bg-gradient-light">
      <Navbar />
      <div className="w-full flex flex-col md:p-24 gap-8 items-center text-start justify-center">
        <h1 className="text-4xl font-bold">
          <span className="text-primary">Echo </span>
          is Social DePIN for AI
        </h1>
        <h2 className="text-2xl font-semibold">
          Built on top of <span className="text-primary">Taraxa</span>’s
          blockDAG + EVM Layer-1
        </h2>
        <div className="my-20 ">
          <Stats />
        </div>
      </div>
    </div>
  );
};
