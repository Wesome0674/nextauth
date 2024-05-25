import React from "react";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

const AuthForm = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Create an account to join the aventure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-3">
          <Link href="/login">
            <Button className="w-full flex gap-3">
              Sign in with GitHub
              <FaGithub size={20} />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" className="w-full flex gap-3">
              Sign in with Google
              <FaGoogle size={20} />
            </Button>
          </Link>
          <Input type="email" placeholder="Email" />
        </div>
      </CardContent>
      
    </Card>
  );
};

export default AuthForm;
