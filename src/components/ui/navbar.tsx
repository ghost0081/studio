
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar: React.FC<NavbarProps> = ({ className, ...props }) => {
  return (
    <nav className={cn("bg-secondary p-4 flex justify-between items-center", className)} {...props}>
      <div className="font-bold text-xl">MoveWithAman</div>
      <div className="space-x-4">
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link href="/classes">
          <Button variant="ghost">Classes</Button>
        </Link>
        <Link href="/pricing">
          <Button variant="ghost">Pricing</Button>
        </Link>
        <Link href="/blog">
          <Button variant="ghost">Blog</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

