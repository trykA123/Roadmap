import React from "react";
import Box from "./AnimatedDiv";
import {
  titles,
  firstRoadmapSection,
  secondRoadmapSection,
  thirdRoadmapSection,
  forthRoadmapSection,
} from "../../utils/constants";

const Roadmap = () => {
  return (
    <div>
      <section
        id="Roadmap"
        className="relative block min-h-0 font-orbitronBlack"
      >
        <div className="mb-0 bg-black pb-0">
          <div className="mx-auto min-w-fit lg:max-w-6xl">
            <div className="relative flex flex-col flex-nowrap items-center justify-center pt-12">
              <div className="absolute mb-12 h-full w-[1px] bg-gradient-to-b from-teal-300 via-yellow-300  to-violet-800 pb-1">
                <div className="fixed left-auto top-0 right-auto bottom-[40vh] -z-10 h-[40vh] w-[1px]"></div>
              </div>
              <Box
                title={titles.salesRoad}
                first={firstRoadmapSection.firstInfo}
                second={firstRoadmapSection.secondInfo}
                third={firstRoadmapSection.thirdInfo}
                forth={firstRoadmapSection.forthInfo}
              />
              <Box
                title={titles.projectDevelopment}
                first={secondRoadmapSection.firstInfo}
                second={secondRoadmapSection.secondInfo}
                third={secondRoadmapSection.thirdInfo}
                forth={secondRoadmapSection.forthInfo}
              />
              <Box
                title={titles.postLaunch}
                first={thirdRoadmapSection.firstInfo}
                second={thirdRoadmapSection.secondInfo}
                third={thirdRoadmapSection.thirdInfo}
                forth={thirdRoadmapSection.forthInfo}
                fifth={thirdRoadmapSection.fifthInfo}
              />
              <Box
                title={titles.addValueProp}
                first={forthRoadmapSection.firstInfo}
                second={forthRoadmapSection.secondInfo}
                third={forthRoadmapSection.thirdInfo}
                forth={forthRoadmapSection.forthInfo}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
