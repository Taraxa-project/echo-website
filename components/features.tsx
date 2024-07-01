import { featureList } from "../types/feature-list";
import { Feature } from "./feature";

export const Features = () => {
  return (
    <div className="w-full bg-gradient-dark">
      <div className="flex flex-col gap-10  my-20 md:p-24">
        {featureList.map((feature, id) => (
          <Feature key={`${feature.imageSrc}+${id}`} {...feature} />
        ))}
      </div>
    </div>
  );
};
