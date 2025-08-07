import Image1 from "@assets/Features/Image1.webp";
import Image2 from "@assets/Features/Image2.webp";
import Image3 from "@assets/Features/Image3.webp";
import { type ImageMetadata } from "astro";

import FolderTree from "@assets/Icons/FolderTree.svg";
import Github from "@assets/Icons/Github.svg";
import Search from "@assets/Icons/Search.svg";

// eslint-disable-next-line no-undef
type SvgComponent = ((_props: astroHTML.JSX.SVGAttributes) => any) &
  ImageMetadata;

export type Feature = {
  title: string;
  description: string;
  image: ImageMetadata;
  icon: SvgComponent;
};

export const FeaturesData: Feature[] = [
  {
    title: "Smart Folders",
    description:
      "Create and manage virtual folders to organize your repositories exactly how you want them.",
    image: Image1,
    icon: FolderTree,
  },
  {
    title: "GitHub Integration",
    description:
      "Works perfectly with your existing GitHub account. No additional configuration needed.",
    image: Image2,
    icon: Github,
  },
  {
    title: "Quick Search",
    description:
      "Find your repositories instantly with our smart search and folder structure.",
    image: Image3,
    icon: Search,
  },
];
