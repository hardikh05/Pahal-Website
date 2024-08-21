import React from "react";
import "./TeamCard.css";
import { FaSquareInstagram, FaLinkedin, FaInstagram } from "react-icons/fa6";

const TeamCard = (props) => {
  let patcoord = props.patcoord;
  let founders = props.founders;
  let web = props.web;

  const [isHovered, setIsHovered] = React.useState(false);
  if (patcoord) {
    return (
      <div className="card mb-10">
        <div className="photo">
          <img src={patcoord.image} alt="pfp" />
        </div>
        <div className="name font-main-head">{patcoord.name}</div>
        <div className="pos font-small-head">
          {patcoord.desg1}
          <div className="text-opacity-60 mt-1">{patcoord.desg2}</div>
        </div>
        <div className="links flex justify-center items-center space-x-4 mt-3">
          <a href={patcoord.iglink} className="icon">
            <FaSquareInstagram />
          </a>
          <a href={patcoord.linkedinlink} className="icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    );
  } else if (web) {
    return (
      <div className="card mb-10">
        <div className="photo">
          <img src={web.image} alt="pfp" />
        </div>
        <div className="name font-main-head">{web.name}</div>
        <div className="pos font-small-head">
          {web.desg1}
          <div className="text-opacity-60 mt-1">{web.desg2}</div>
        </div>
        <div className="links flex justify-center items-center space-x-4 mt-3">
          <a href={web.iglink} className="icon cursor-pointer bg-black p-1 hover:bg-[linear-gradient(120deg,#f9ce34,#ee2a7b,#6338d7)] transition-all hover:rounded-full anim">
            <FaInstagram fill="#fff" />
          </a>
          <a href={web.linkedinlink} className="icon cursor-pointer bg-black p-1 hover:bg-[#002aff] hover:rounded-full anim">
            <FaLinkedin fill="#fff" />
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card mb-10">
        <div className="photo">
          <img src={founders.image} alt="pfp" />
        </div>
        <div className="name font-main-head">{founders.name}</div>
        <div className="pos font-small-head">
          {founders.desg1}
          <div className="text-opacity-60 mt-1">{founders.desg2}</div>
        </div>
        <div className="links flex justify-center items-center space-x-4 mt-3">
          <a href={founders.iglink} className="icon">
            <FaSquareInstagram />
          </a>
          <a href={founders.linkedinlink} className="icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    );
  }
};

export default TeamCard;
