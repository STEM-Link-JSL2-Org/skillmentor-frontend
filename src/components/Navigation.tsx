import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router";
import { useAuth } from "@/lib/auth-context";
import SkillMentorLogo from "@/assets/logo.webp";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Navigation() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <nav
      className={cn(
        "flex items-center gap-6 text-sm font-medium",
        mobile && "flex-col items-start gap-4"
      )}
    >
      <Link
        to="/"
        className="hover:text-primary transition-colors"
        onClick={() => mobile && setIsOpen(false)}
      >
        Tutors
      </Link>
      <Link
        to="/"
        className="hover:text-primary transition-colors"
        onClick={() => mobile && setIsOpen(false)}
      >
        About Us
      </Link>
      <Link
        to="/"
        className="hover:text-primary transition-colors"
        onClick={() => mobile && setIsOpen(false)}
      >
        Resources
      </Link>
    </nav>
  );

  const AuthButtons = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={cn(
        "flex items-center gap-2",
        mobile && "flex-col items-stretch gap-4 w-full"
      )}
    >
      {isAuthenticated ? (
        <>
          <Link
            to="/dashboard"
            className={cn(mobile && "w-full")}
            onClick={() => mobile && setIsOpen(false)}
          >
            <Button variant="ghost" className={cn(mobile && "w-full")}>
              Dashboard
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className={cn(mobile && "w-full")}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className={cn(mobile && "w-full")}
            onClick={() => mobile && setIsOpen(false)}
          >
            <Button variant="ghost" className={cn(mobile && "w-full")}>
              Login
            </Button>
          </Link>
          <Link
            to="/login"
            className={cn(mobile && "w-full")}
            onClick={() => mobile && setIsOpen(false)}
          >
            <Button
              className={cn(
                "bg-primary text-primary-foreground hover:bg-primary/90",
                mobile && "w-full"
              )}
            >
              Sign up
            </Button>
          </Link>
        </>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 py-2 text-white w-full bg-black backdrop-blur supports-[backdrop-filter]:bg-black/90">
      <div className="container flex flex-wrap h-14 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={SkillMentorLogo}
              alt="SkillMentor Logo"
              className="size-12 rounded-full"
            />
            <span className="font-semibold text-xl">SkillMentor</span>
          </Link>
          <div className="ml-6 hidden md:block">
            <NavItems />
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:block">
          <AuthButtons />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="border-primary">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-black text-white p-6"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link
                    to="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src={SkillMentorLogo}
                      alt="SkillMentor Logo"
                      className="size-10 rounded-full"
                    />
                    <span className="font-semibold text-lg">SkillMentor</span>
                  </Link>
                </div>

                <div className="space-y-6 flex-1">
                  <NavItems mobile />
                </div>

                <div className="pt-6 border-t border-white/10">
                  <AuthButtons mobile />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
