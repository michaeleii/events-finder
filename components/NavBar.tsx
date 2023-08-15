import Link from "next/link";

function NavBar() {
  return (
    <nav className="p-5 bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto flex justify-between">
        <Link href="/" className="text-2xl hover:text-accent transition-colors">
          <div className="text-3xl font-bold">Events Finder</div>
        </Link>
        <Link
          href="/events"
          className="text-2xl hover:text-accent transition-colors"
        >
          Browse All Events
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
