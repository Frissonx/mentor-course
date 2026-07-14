import AddTaskButton from "../AddTaskButton";
import SearchBar from "../SearchBar";
import HamburgerButton from "../HamburgerButton";

function Header() {
  return (
    <header className="flex items-center justify-between gap-6 px-6 py-4 border-b border-gray-800 bg-zinc-950">
      <div className="flex items-center gap-3 flex-1">
        <HamburgerButton />
        <SearchBar />
      </div>
      <AddTaskButton />
    </header>
  );
}
export default Header;
