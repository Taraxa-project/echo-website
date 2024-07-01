import { featureList } from "../types/feature-list";
import { Feature } from "./feature";

export const Features = () => {
  return (
    <div className="w-full bg-gradient-to-b bg-[#0c0c13]">
      <div className="flex flex-col gap-8  my-20 md:p-24">
        {featureList.map((feature, id) => (
          <Feature key={`${feature.imageSrc}+${id}`} {...feature} />
        ))}
      </div>
    </div>
  );
};
