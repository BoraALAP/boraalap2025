
import Link from "next/link";
import { Switch } from "./subelements/Switch";
import { Social } from "./subelements/Social";

export const Header = () => {
  return (
    <header className="h-[72px] flex px-10 py-6 bg-white dark:bg-black dark:text-white justify-between items-center transition-colors duration-200">
      <Link href="/">
        <h1>Bora Alap</h1>
      </Link>
      <Switch />
      <Social />
    </header>
  );
};
