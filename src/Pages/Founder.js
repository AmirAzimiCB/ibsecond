import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FounderSection1 from "../Components/Founder/FounderSection1";
import FounderSection2 from "../Components/Founder/FounderSection2";
import FounderSection3 from "../Components/Founder/FounderSection3";
import Layout from "../Components/Layout";
import useStore from "../store/ZustandStore";
function Founder() {
  const [change, setChange] = React.useState(false);
  const overlayRef = React.useRef(null);

  const videoVisible = useStore((state) => state.showVideo);

  return (
    <Layout>
      <div>
      <Helmet>
        <title>
          Founder
        </title>
      </Helmet>
        {videoVisible ? null : (
          <div ref={overlayRef} className='founder-overlay'></div>
        )}

        <FounderSection1 />
        <FounderSection2 />
        <FounderSection3 />
      </div>
    </Layout>
  );
}

export default Founder;
