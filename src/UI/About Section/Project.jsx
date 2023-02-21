import React from "react";

const Project = () => {
  return (
    <section className="h-[1000px] bg-black" id="Project">
      <div className="flex flex-col space-y-12 md:space-y-0 md:space-x-10 lg:flex-row">
        {/* title and content */}
        <div className="flex h-full w-1/2 flex-col items-center space-y-8">
          <h1 className="text-7xl text-white">Project</h1>
          <div className="md:py-18 md:px-18 rounded-lg from-white1 to-white2 px-6 py-6 shadow-xl md:w-[600px] md:bg-gradient-to-r">
            <p className="font-mono text-base text-white">
              Space Robots NFTs are part of an upgradable collection that allows
              collectors to enhance their digital assets over time. With each
              upgrade, the capabilities and abilities of the robot are expanded,
              providing new opportunities for exploration and discovery. As you
              progress through the collection, your Space Robot NFT becomes more
              advanced and valuable, reflecting the increasing knowledge and
              technological capabilities of our species. By owning a Space
              Robots NFT, you're not just collecting a unique digital asset, but
              also investing in the future of space exploration.
            </p>
          </div>
        </div>
        {/* Robot */}
        <div className="flex h-full w-1/2 flex-col items-center">
          <div>
            <img src="/src/assets/robo.png" alt="" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
