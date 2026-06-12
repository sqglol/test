import Link from "next/link";
import Image from "next/image";
import TextareaDisabled, { NavbarHome } from "./search";

import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Search, UserRound, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/50 border-border-nav border-b-2 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="col mx-2 flex h-16 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-black tracking-wider text-zinc-900 uppercase hover:opacity-80 transition-opacity"
          >
            <Image
              src="/popshackLogo.svg"
              alt="Popshack Logo"
              loading="eager"
              width={120}
              height={30}
              className="inline-block h-30 w-auto mr-2"
            />
          </Link>
          <TextareaDisabled />
        </div>
        <NavbarHome />
      </div>
    </header>
  );
}
