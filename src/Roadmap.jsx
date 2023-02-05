import React from "react";
import Box from "./AnimatedDiv";
import { titles } from "./utils/constants";

const Roadmap = () => {
  return (
    <div>
      <section className="relative block min-h-0 font-orbitronBlack">
        <div className="mb-0 bg-black pb-0">
          <div className="mx-auto max-w-8xl">
            <div className="relative flex flex-col flex-nowrap items-center justify-center pt-12">
              <div className="absolute  mb-0 h-full w-[1px] bg-gradient-to-b from-teal-300 via-yellow-300  to-violet-800 pb-0">
                <div className="fixed left-auto top-0 right-auto bottom-[50vh] -z-10 h-[50vh] w-[1px]  bg-white bg-gradient-to-b from-teal-600 to-violet-500"></div>
              </div>
              <Box
                title={titles.salesRoad}
                first="Phase 1 complete - buyback of 25 EGLD from the market"
                second="Phase 2 complete - 15X NFT airdropped to random wallets"
                third="Public sale complete - 40,000 $ donation to charities picked by the community"
                forth="Bonus - for 1 week after public sale. 50 EGLD buybacks from the market"
              />
              <Box
                title={titles.projectDevelopment}
                first="Upgradable NFTs - use robot parts to upgrade your Space Robot!"
                second="Staking - stake your Space Robot NFTs and earn robot parts"
                third="Game release - codename: gc_space_miners"
                forth="Future projects - building the Space Robots universe"
              />
              <Box
                title={titles.postLaunch}
                first="Listing on Elrond NFT market places"
                second="Getting on Rarity Tools"
                third="Space Robots Companion NFT drop (must hold 2x Space Robots (or
                    2x RoboPacks))"
                forth="Real-life art projects featuring Space Robots"
                fifth="Collaborating with artists, brands, NFT projects"
              />
              <Box
                title={titles.addValueProp}
                first="Holding Space Robots NFTs will earn you a membership in the Space Robots Club, giving you various benefits, allowing you to participate in SRC governance, and taking part in exclusive giveaways, NFT drops, and other events"
                second="SRC DAO - Opportunities to participate in deciding on the future of the Space Robots"
                third="Release of a comics series featuring stories from the Space Robots universe"
                forth="Discounts, memberships, and additional benefits in the feature Space Robots projects"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
