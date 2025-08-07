export type CardData = {
  type: "positive" | "negative";
  title: string;
  features: string[];
};

export const WithoutUsCard: CardData = {
  type: "negative",
  title: "Without GitFolders",
  features: [
    "Endless scrolling through unorganized repositories",
    "No way to group related projects together",
    "Time wasted searching for specific repositories",
    "Increased cognitive load managing multiple repos",
    "Hard to distinguish between personal and work projects",
    "No visual structure or categorization for easier navigation",
  ],
};

export const WithUsCard: CardData = {
  type: "positive",
  title: "With GitFolders",
  features: [
    "Intuitive folder organization for all your repositories",
    "Quick access to grouped projects and repositories",
    "Efficient workflow with a smart search for quick access",
    "Clear separation between personal, work, and archived repos",
    "Minimal effort to maintain organization as projects grow",
    "Streamlined experience for both solo devs and teams",
  ],
};
