import { FolderTree, Github, Search } from "lucide-react";

import Image1 from "@assets/Features/Image1.jpg";
import Image2 from "@assets/Features/Image2.jpg";
import Image3 from "@assets/Features/Image3.jpg";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: ImageMetadata;
};

export const Features: Feature[] = [
  {
    icon: <FolderTree className="text-accent h-8 w-8" />,
    title: "Smart Folders",
    description:
      "Create and manage virtual folders to organize your repositories exactly how you want them.",
    image: Image1,
    // "https://images.pexels.com/photos/159519/back-to-school-paper-colored-paper-stationery-159519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://plus.unsplash.com/premium_photo-1675977693128-02be743c4a4c?auto=format&fit=crop&w=800&q=80",
    // "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Github className="text-accent h-8 w-8" />,
    title: "GitHub Integration",
    description:
      "Works perfectly with your existing GitHub account. No additional configuration needed.",
    image: Image2,
    // "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Search className="text-accent h-8 w-8" />,
    title: "Quick Search",
    description:
      "Find your repositories instantly with our smart search and folder structure.",
    image: Image3,
    // "https://images.pexels.com/photos/3769697/pexels-photo-3769697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
  },
];

export const FeatureIcon = ({ icon }: { icon: Feature["icon"] }) => {
  return <div className="text-blue-600">{icon}</div>;
};
