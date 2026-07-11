import Logo from "./Logo";
import SearchBar from "./SearchBar";
import AddTaskButton from "./AddTaskButton";

function Header() {
  return (
    <header>
      <Logo />
      <SearchBar />
      <AddTaskButton />
    </header>
  );
}
export default Header;
