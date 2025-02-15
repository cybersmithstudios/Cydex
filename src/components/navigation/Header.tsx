import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Wallet, Bike, Package, LogOut, Settings, User } from "lucide-react";

interface HeaderProps {
  userRole?: "customer" | "rider" | "vendor" | "admin";
  userName?: string;
  walletBalance?: number;
  avatarUrl?: string;
}

const Header = ({
  userRole = "customer",
  userName = "John Doe",
  walletBalance = 100.0,
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
}: HeaderProps) => {
  return (
    <header className="w-full h-[72px] bg-background border-b flex items-center justify-between px-6 fixed top-0 z-50">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Cydex Logo" className="h-8" />
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {userRole === "customer" && (
              <>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Orders</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                      <NavigationMenuLink className="block py-2 hover:bg-accent px-2 rounded-md">
                        Active Orders
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block py-2 hover:bg-accent px-2 rounded-md">
                        Order History
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </>
            )}
            {userRole === "rider" && (
              <>
                <NavigationMenuItem>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Bike className="h-4 w-4" />
                    Available Orders
                  </Button>
                </NavigationMenuItem>
              </>
            )}
            {userRole === "vendor" && (
              <>
                <NavigationMenuItem>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Manage Orders
                  </Button>
                </NavigationMenuItem>
              </>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4">
        {/* Wallet Balance */}
        <Button variant="outline" className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />${walletBalance.toFixed(2)}
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarImage src={avatarUrl} alt={userName} />
                <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{userName}</DropdownMenuLabel>
            <DropdownMenuLabel className="text-sm text-muted-foreground">
              {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
