import React from "react";
import "./TeamCard.css";

const TeamCard = () => {
  return (
      <div className="card">
        <div className="photo">
          <img src="https://iiitn.ac.in/images/faculty/87.jpg" alt="pfp" />
        </div>
        <div className="name font-main-head text-xs">Dr. Harsh Goud</div>
        <div className="pos font-small-head text-xs mt-5">Assistant Professor <div className="text-opacity-30 mt-2">HOD ECE</div></div>
        <div className="random">
          <a href="https://iiitn.ac.in/profile/electronics-&-communication-engg/87/#">
            <div className="links">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--xyphdp_R--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://cdn.hashnode.com/res/hashnode/image/upload/v1654670003399/aOsHknZja.png"
                alt="insta"
              />
            </div>
          </a>
          <a href="https://iiitn.ac.in/profile/electronics-&-communication-engg/87/#">
            <div className="links">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="linkedin"
              />
            </div>
          </a>
        </div>
      </div>
  );
};

export default TeamCard;
