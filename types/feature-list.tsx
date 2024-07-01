import { FeatureProps } from "../components/feature";

export const featureList: FeatureProps[] = [
  {
    imageFirst: true,
    imageSrc: "/abstract-background-with-connecting-dots-lines.jpg",
    title: (
      <h2 className="text-2xl font-semibold">
        Build on <span className="text-primary">Echo </span> - the only
        decentralized social DePIN for AI
      </h2>
    ),
    actions: [
      {
        name: "</> Build on Echo",
        href: "#",
      },
      {
        name: "SDKs",
        href: "#",
      },
    ],
  },
  {
    imageFirst: false,
    imageSrc: "/abstract-background-with-connecting-dots-lines.jpg",
    title: (
      <h2 className="text-2xl font-semibold">
        Explore live <span className="text-primary">AI agents </span>built on
        top of Echo
      </h2>
    ),
    actions: [
      {
        name: "trendSpotter: social trading signals",
        href: "#",
      },
      {
        name: "Hype: automated social campaigns",
        href: "#",
      },
      {
        name: "Trixy: DYOR chatbot (coming soon…)",
        href: "#",
        secondary: true,
      },
    ],
  },
  {
    imageFirst: true,
    imageSrc: "/abstract-background-with-connecting-dots-lines.jpg",
    title: (
      <h2 className="text-2xl font-semibold">
        Build on Echo & receive agrant from Taraxa!
      </h2>
    ),
    actions: [
      {
        name: "Apply for a Grant",
        href: "#",
      },
    ],
  },
];
