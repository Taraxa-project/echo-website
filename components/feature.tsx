import Image from "next/image";
import React from "react";

export type FeatureAction = {
  name: string;
  href: string;
  secondary?: boolean;
};

export interface FeatureProps {
  imageFirst?: boolean;
  imageSrc: string;
  title: React.ReactNode;
  actions: FeatureAction[];
}

export const Feature = ({
  imageFirst,
  imageSrc,
  title,
  actions,
}: FeatureProps) => {
  const contentClass = imageFirst
    ? "flex-col md:flex-row"
    : "flex-col-reverse md:flex-row-reverse";
  return (
    <div className={`flex ${contentClass} items-center justify-between`}>
      <div className="w-1/2 p-5">
        <Image
          src={imageSrc}
          alt="Descriptive Alt Text"
          width={500}
          height={500}
        />
      </div>
      <div className="w-1/2 p-5 flex flex-col gap-8">
        {title}
        <div className="w-full flex flex-col gap-4">
          {actions.map((action) => (
            <a key={action.name} href={action.href} target="_blank">
              <button
                className={`btn btn-${
                  action.secondary ? "secondary" : "primary"
                } w-full max-w-[350px]`}
              >
                {action.name}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
