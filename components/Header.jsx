import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/gift-logo.png" // Adjust the path if needed
            alt="Gift Logo"
            width={120} // Adjust width as needed
            height={40} // Adjust height as needed
            priority // Ensures faster loading
          />
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
