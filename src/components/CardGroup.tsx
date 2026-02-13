import type { CardElement } from "@/types";
import CustomCard from "./CustomCard";

export default function CardGroup({
  cardElements,
}: {
  cardElements: CardElement[];
}) {
  return (
    <div className="px-4 sm:px-8 lg:px-10">
      <h1 className="text-4xl pt-30">Schedule a Call</h1>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {cardElements.map((cardProperties, index) => {
          return <CustomCard key={index} cardProperties={cardProperties} />;
        })}

        {/* {cardElements.map((cardProperties, index) => {
          return <CustomCard key={index} cardProperties={cardProperties} />;
        })} */}
      </div>
    </div>
  );
}
