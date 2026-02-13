import type { CardElement } from "../types";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter} from "./ui/card";
import LogoImg from "../assets/logo.png";
import AvatarImg from "../assets/avatar.png";
import { Calendar, GraduationCap, ThumbsUp } from "lucide-react";
import { LuBuilding2 } from "react-icons/lu";
import { useState } from "react";


function CustomCard({ cardProperties }: { cardProperties: CardElement }) {

  const [showFull, setShowFull] = useState(false); // state to toggle full description
  const maxLength = 160; // number of characters to show before "See more"

  const toggleDescription = () => setShowFull(!showFull);

  const descriptionText =
    cardProperties.description.length > maxLength
      ? showFull
        ? cardProperties.description
        : cardProperties.description.slice(0, maxLength) + "..."
      : cardProperties.description;
  

  return (
    <Card className="px-6 py-6 rounded-2xl border">

      {/* ===== Title + Badge ===== */}
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-semibold leading-snug">
          {cardProperties.title}
        </h2>

        <div className="shrink-0">
          <img
            src={LogoImg}
            alt="badge"
            className="w-24 h-20 object-contain"
          />
        </div>
      </div>

      {/* ===== Info Section (4 Rows) ===== */}
      <div className="mt-5 space-y-3">

        {/* 1. Reviews */}
  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <div className="w-10 flex justify-center">
      <ThumbsUp className="w-4 h-4" />
    </div>
    <span>{cardProperties.reviews}% positive reviews</span>
  </div>

  {/* 2. Instructor */}
  <div className="flex items-center gap-3">
    <div className="w-10 flex justify-center">
      <img
        src={AvatarImg}
        alt="instructor"
        className="w-8 h-8 rounded-full object-cover"
      />
    </div>
    <span className="font-medium">{cardProperties.name}</span>
  </div>

  {/* 3. Job Role */}
  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <div className="w-10 flex justify-center">
      <LuBuilding2 className="w-4 h-4" />
    </div>
    <span>{cardProperties.jobRole}</span>
  </div>

  {/* 4. Since Worked */}
  <div className="flex items-center gap-3 text-sm text-muted-foreground">
    <div className="w-10 flex justify-center">
      <Calendar className="w-4 h-4" />
    </div>
    <span>{cardProperties.sinceWorked}</span>
  </div>

      </div>

      {/* ===== Description ===== */}
      <CardContent className="p-0 mt-6">
        <p className="text-sm text-gray-700">
          {descriptionText}
          {cardProperties.description.length > maxLength && (
            <span
              className="text-yellow-500 cursor-pointer ml-1"
              onClick={toggleDescription}
            >
              {showFull ? "See less" : "See more"}
            </span>
          )}
        </p>
      </CardContent>

      {/* ===== Highlights ===== */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Highlights</h3>

        <div className="flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-3 rounded-lg">
          <GraduationCap className="w-4 h-4 shrink-0" />
          <span>158 Enrollments</span>
        </div>
      </div>

      {/* ===== Button ===== */}
      <CardFooter className="p-0 mt-6">
        <Button className="w-full bg-black text-white hover:bg-black/90">
          Schedule a session
        </Button>
      </CardFooter>

    </Card>
    
    
  );
}

export default CustomCard;
