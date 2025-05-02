
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar: React.FC<NavbarProps> = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Classes', href: '/classes' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      className={cn(
        'bg-background shadow-lg sticky top-0 z-50 px-4 py-2 md:px-6',
        className
      )}
      {...props}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
           {/* If you have a logo SVG or component, you can place it here */}
           {/* <LogoComponent className="h-8 w-8 text-primary" /> */}
           <span className="text-2xl font-bold text-primary tracking-tight">
             MoveWithAman
           </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-accent/10 transition-colors duration-300">
                {item.name}
              </Button>
            </Link>
          ))}

        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
