import {
  FolderTree as Folder_Tree,
  ArrowRight as Arrow_Right,
  Folder as Folder_Icon,
  Star as Star_Icon,
  Users as Users_Icon,
} from "lucide-react";

type IconProps = {
  className?: string;
};

export function FolderTree({ className }: IconProps) {
  return <Folder_Tree className={className} />;
}

export function ArrowRight({ className }: IconProps) {
  return <Arrow_Right className={className} />;
}

export function Folder({ className }: IconProps) {
  return <Folder_Icon className={className} />;
}

export function Star({ className }: IconProps) {
  return <Star_Icon className={className} />;
}

export function Users({ className }: IconProps) {
  return <Users_Icon className={className} />;
}
