import { useState } from "react";
import type { CardElement } from "../types";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "./ui/card";

function CustomCard({ cardProperties }: { cardProperties: CardElement }) {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter((currentCounter) => currentCounter + 1);
    setCounter((currentCounter) => currentCounter + 1);
    setCounter((currentCounter) => currentCounter + 1);
  }

  return (
    
    <Card>
      <CardHeader>
        <CardTitle>{cardProperties.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-black">
          {cardProperties.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button onClick={handleButtonClick} variant="secondary">
          Schedule a Call
        </Button>
        <span className="ml-2">{counter}</span>
      </CardFooter>
    </Card>
  );
}

export default CustomCard;
