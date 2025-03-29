import {
  FolderTree as Folder_Tree,
  ArrowRight as Arrow_Right,
  Folder as Folder_Icon,
} from "lucide-react";

interface IconProps {
  className?: string;
}

export function FolderTree({ className }: IconProps) {
  return <Folder_Tree className={className} />;
}

export function ArrowRight({ className }: IconProps) {
  return <Arrow_Right className={className} />;
}

export function Folder({ className }: IconProps) {
  return <Folder_Icon className={className} />;
}
