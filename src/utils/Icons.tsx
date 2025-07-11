import {
  ArrowRight as Arrow_Right,
  Folder as Folder_Icon,
  Star as Star_Icon,
  Users as Users_Icon,
  Quote as Quote_Icon,
  Menu as Menu_Icon,
  X as X_Icon,
} from "lucide-react";

type IconProps = {
  className?: string;
};

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
export function Quote({ className }: IconProps) {
  return <Quote_Icon className={className} />;
}
export function Menu({ className }: IconProps) {
  return <Menu_Icon className={className} />;
}
export function X({ className }: IconProps) {
  return <X_Icon className={className} />;
}
