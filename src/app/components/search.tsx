import { Textarea } from "@/components/ui/textarea";
import { Search, UserRound, ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TextareaDisabled() {
  return (
    // Cleaned up layout to act as a proper utility top-bar
    <div className="flex flex-col items-end justify-end w-full">
      <div className="flex items-center w-full max-w-xs sm:max-w-sm justify-between gap-4">
        <Link
          href="/"
          className="my-3 text-primary-background opacity-80 hover:opacity-100 transition-opacity"
        >
          <Search className="h-5 w-5" />
        </Link>

        <Textarea
          placeholder="Search"
          className="h-9 min-h-0 my-3 py-1.5 px-3 resize-none !bg-footer border-border-nav border-2 text-background placeholder:text-zinc-400 rounded-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-transparent text-lg font-medium hover:bg-transparent text-black flex items-center gap-1">
              <UserRound className="h-5 w-5" />{" "}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href="/profile" className="w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-5 w-5 bg-transparent hover:bg-transparent text-foreground p-0 flex items-center justify-center">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href="/profile" className="w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

// NavbarHome component used to display primary navigation links
export function NavbarHome() {
  return (
    // 1. Turned the wrapper into a semantic HTML5 <nav> tag
    <nav className="mx-10 flex h-15 items-center justify-start px-6 border-t-2 border-border-nav">
      <div className="my-3 mx-8 flex items-center whitespace-nowrap gap-10 font-medium opacity-80">
        <Link
          href="/"
          className="text-lg font-medium text-primary-background hover:underline"
        >
          Home
        </Link>

        <Link
          href="/"
          className="text-lg font-medium text-primary-background hover:underline"
        >
          All Products
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-transparent p-0 text-lg font-medium text-black hover:bg-transparent hover:underline hover: curser-pointer">
              Categories <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/about"
          className="text-lg font-medium text-primary-background hover:underline"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
