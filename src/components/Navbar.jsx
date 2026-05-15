import Link from "next/link";
const NavBar = () => {
  return (
    <div className="relative flex justify-center gap-70 p-8 h-25 w-full border-[var(--color-pink)] border-t-2 border-b-2">
      <div className="absolute top-0 left-0 w-0 h-0" style={{ borderTop: "30px solid var(--color-pink)", borderRight: "30px solid transparent" }} />
      <div className="absolute bottom-0 right-0 w-0 h-0" style={{ borderBottom: "30px solid var(--color-pink)", borderLeft: "30px solid transparent" }} />

      <div>
        <Link href="/">
          <img src="/assets/icon/Logo_main.svg" height={200} width={200} />
        </Link>
      </div>

      <div className="flex justify-between text-[var(--color-neutrals-200)] gap-10">
        <Link href="/"> HOME </Link>
        <Link href="/events"> EVENTS </Link>
        <Link href="/book-table"> BOOK TABLE </Link>
        <Link href="/contact"> CONTACT US </Link>
      </div>
    </div>
  );
};

export default NavBar;
