import { ArrowRight, Folder, FolderTree, Github, Search } from "lucide-react";

// * App Name
export const NAME: string = "GitFolders" as const;

// * App Routes
export const ROUTES = {
  home: { name: "Home", path: "/" },
  login: { name: "Login", path: "/login" },
  signup: { name: "Sign Up", path: "/signup" },
  waitlist: { name: "Join Waitlist", path: "/waitlist" },
} as const;

// * Hero Content
export const HERO_CONTENT = {
  heading: (
    <>
      Organize GitHub <span className="text-accent">Repositories</span> Like
      Never Before
    </>
  ),
  description:
    "Transform cluttered repositories into a streamlined, organized workspace. The missing folder structure for your GitHub repositories.",
  cta: {
    text: "Join Waitlist" /* "Get Started" */,
    linkToOpen: ROUTES.waitlist.path,
    icon: (
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
    ),
  },
  stats: [
    { value: "75.2%", label: "Time Saved" },
    { value: "20k+", label: "Active Users" },
    { value: "4.8/5", label: "User Rating" },
  ],
  image: {
    url: "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?auto=format&fit=crop&w=800&q=80", //  "https://images.unsplash.com/photo-1618477388954-7852f32655ec"
    alt: "Dashboard preview",
  },
  highlight: {
    heading: "Smart Organization",
    description: "Drag & Drop folders",
    icon: <Folder className="text-accent h-10 w-10 animate-pulse" />,
  },
} as const;

// * Benefits Section
export const BENEFITS_SECTION = {
  heading: "Why Choose GitFolders?",
  description: "Experience the difference between chaos and organization",
  withoutUs: {
    type: "negative",
    title: `Without ${NAME}`,
    points: [
      "Endless scrolling through unorganized repositories",
      "No way to group related projects together",
      "Time wasted searching for specific repositories",
    ],
  },
  withUs: {
    type: "positive",
    title: `With ${NAME}`,
    points: [
      "Intuitive folder organization for all your repositories",
      "Quick access to grouped projects and repositories",
      "Efficient workflow with a smart search for quick access",
    ],
  },
  image: {
    url: "https://images.unsplash.com/photo-1607799632518-da91dd151b38?auto=format&fit=crop&w=800&q=80",
    alt: "Organization preview",
  },
  highlight: {
    highlight: "75%",
    text: "Faster Repository Access",
  },
} as const;

// * Features Section
export const FEATURES_SECTION = {
  heading: "Everything you need to organize your GitHub workflow",
  description: "Powerful features designed for developers",
  features: [
    {
      icon: <FolderTree className="text-accent h-8 w-8" />,
      title: "Smart Folders",
      description:
        "Create and manage virtual folders to organize your repositories exactly how you want them.",
      image:
        "https://plus.unsplash.com/premium_photo-1675977693128-02be743c4a4c?auto=format&fit=crop&w=800&q=80",
      //"https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Github className="text-accent h-8 w-8" />,
      title: "GitHub Integration",
      description:
        "Works perfectly with your existing GitHub account. No additional configuration needed.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Search className="text-accent h-8 w-8" />,
      title: "Quick Search",
      description:
        "Find your repositories instantly with our smart search and folder structure.",
      image:
        "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
    },
  ],
} as const;

// * CTA SECTION
export const CTA_SECTION = {
  heading: "Ready to organize your GitHub repositories?",
  description:
    "Join thousands of developers who are already enjoying a cleaner, more organized GitHub experience.",
  background_image:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", //https://images.unsplash.com/photo-1522071820081-009f0129c71c
  button: {
    text: "Join Waitlist" /* "Install GitFolders Now" */,
    linkToOpen: ROUTES.waitlist.path,

    icon: (
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
    ),
  },
} as const;
