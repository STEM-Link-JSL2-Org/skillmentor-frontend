"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import AWSCertified1Img from "@/assets/aws-certified-1.webp";
import AWSCertified2Img from "@/assets/aws-certified-2.webp";
import AWSCertified3Img from "@/assets/aws-certified-3.webp";
import MicrosoftCertified1Img from "@/assets/microsoft-certified-1.webp";
import MicrosoftCertified2Img from "@/assets/microsoft-certified-2.webp";
import MicrosoftCertified3Img from "@/assets/microsoft-certified-3.webp";

interface SignupDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignupDialog({ isOpen, onClose }: SignupDialogProps) {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="overflow-hidden p-0 border-none rounded-2xl max-w-[440px]">
        <DialogTitle className="sr-only">Sign up to SkillMentor</DialogTitle>
        <DialogDescription className="sr-only">
          Sign up dialog to access SkillMentor's tutor booking features
        </DialogDescription>
        <div className="grid grid-cols-3 gap-4">
          {[
            AWSCertified1Img,
            AWSCertified2Img,
            AWSCertified3Img,
            MicrosoftCertified3Img,
            MicrosoftCertified2Img,
            MicrosoftCertified1Img,
          ].map((src, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden">
              <img
                src={src}
                alt={`Testimonial ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="px-8 py-10 bg-white rounded-2xl">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Sign up to see all our amazing tutors
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Search through thousands of qualified SkillMentor tutors by accent,
            availability, and more!
          </p>
          <Button
            onClick={handleSignup}
            className="w-full font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <span>Sign up</span>
            <span>→</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
