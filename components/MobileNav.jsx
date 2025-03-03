"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="Flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center h-full">
        <div className="mt-32 text-center text-2xl">
          <Link href="/">
            <Image
              src="/assets/gift-logo.png" // Adjust the path if needed
              alt="Gift Logo"
              width={120} // Adjust width as needed
              height={40} // Adjust height as needed
              priority // Ensures faster loading
            />
          </Link>
        </div>

        {/* Add flex-grow here to push content to center */}
        <nav className="flex flex-col justify-center items-center gap-8 flex-grow">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Add some margin-bottom */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
