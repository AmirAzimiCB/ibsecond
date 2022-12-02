import React from "react";
import FounderSection1 from "../Components/Founder/FounderSection1";
import FounderSection2 from "../Components/Founder/FounderSection2";
import FounderSection3 from "../Components/Founder/FounderSection3";
function Founder() {
  return (
    <div>
      <div className='founder-overlay'></div>
      <FounderSection1 />
      <FounderSection2 />
      <FounderSection3 />
    </div>
  );
}

export default Founder;
