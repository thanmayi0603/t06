import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 border-b border-gray-600">
      {/* <div className="text-green-600 font-semibold text-xl">Gale codes</div> */}
      <Link href="/" className="text-3xl font-extrabold font-mono bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text tracking-wide">
        {"t06"}
      </Link>

      <div className="space-x-6">
        <a href="#" className="hover:text-purple-400">Blog</a>
        <a href="#" className="hover:text-purple-400">About</a>
        <a href="#" className="hover:text-purple-400">Dashboard</a>
        <a href="#" className="hover:text-purple-400">Guest</a>
        <a href="/contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  );
}

