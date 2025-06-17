"use client";
import "./styles.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Products", href: "/products" },
];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div>
          <h1>Header</h1>
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {children}
        <div>
          <h1>Footer</h1>
        </div>
      </body>
    </html>
  );
}
