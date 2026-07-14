import { Menu } from "lucide-react";

function HamburgerButton() {
  return (
    <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800  hover:bg-gray-700">
      <Menu size={20} className="text-gray-300" />
    </button>
  );
}

export default HamburgerButton;
