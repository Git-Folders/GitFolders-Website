export type FAQ = {
  question: string;
  answer: string;
};

export const FAQs: FAQ[] = [
  {
    question: "What is GitFolders?",
    answer:
      "GitFolders is a Chrome extension that lets you organize your GitHub repositories into folders, helping you stay productive and clutter-free.",
  },
  {
    question: "Does GitFolders work with private repositories?",
    answer:
      "Yes, with your permission, GitFolders can access and organize both public and private repositories.",
  },
  {
    question: "Is GitFolders free to use?",
    answer:
      "You get a 10-day free trial. After that, GitFolders is a paid tool to support ongoing development and cloud sync features.",
  },
  {
    question: "Is my GitHub data safe?",
    answer:
      "Absolutely. GitFolders uses secure Supabase authentication and does not store any sensitive GitHub tokens or credentials.",
  },
  /*  {
    question: "Do I need a separate GitFolders account?",
    answer:
      "Yes. GitFolders uses its own account system powered by Supabase. You sign in with GitHub, but your GitFolders account is separate for managing folders and syncing preferences.",
  }, */
  {
    question: "Will GitFolders make changes to my GitHub repositories?",
    answer:
      "No. GitFolders does not modify your repositories. It only reads repository metadata to organize them into folders within the extension.",
  },
  {
    question: "Can I access my folders on multiple devices?",
    answer:
      "Yes. Once you're signed in to your GitFolders account, your folders and repository organization are synced and available across devices.",
  },
];
