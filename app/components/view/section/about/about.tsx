import { Glimpse } from "./glimpse";
import { Learn } from "./learn";
import { Blessed } from "./blessed";
import { OurVertical } from "./vertical";

export const About = () => {
  return (
    <>
      <div id="about" className="flex flex-col items-center">
        <Learn />
        <Glimpse />
        <Blessed />
      </div>
      <OurVertical />
    </>
  );
};
