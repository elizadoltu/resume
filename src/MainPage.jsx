import React from "react";
import CustomCursor from "./utils/CustomCursor";
import profilePictureLanding from "./assets/profile-image-landing.png";
import profilePictureContact from "./assets/profile-image-contact.png";
import "./index.css";

const MainApp = () => {
  return (
    <div className="w-full">
      <CustomCursor />
      <div className="font-extrabold text-10xl flex justify-center items-start -mt-52">
        <h1>eliza.doltu</h1>
      </div>
      <div className="flex -mt-40">
        <div>
          <img
            src={profilePictureLanding}
            alt="profile picture of eliza doltu"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex text-xl justify-between font-extralight">
            <div>
              <p>web designer -</p>
            </div>
            <div className="ml-96">
              <p>web developer</p>
              <p>student</p>
            </div>
          </div>
          <div className="text-2xl ml-2 font-light">
            <p className="text-xs">+</p>
            <p>16/07/2003</p>
            <p>From Romania, Iasi</p>
            <p>elizadoltuofficial@gmail.com</p>
            <p>+40792179657</p>
          </div>
        </div>
      </div>
      <div className="flex mt-44 items-start justify-between">
        <div className="font-extrabold text-5xl">
          <h2>education</h2>
        </div>
        <div className="-ml-32">
          <p>“Alexandru Ioan-Cuza” University, Iasi</p>
          <p>Computer Science</p>
          <p>2022-2025</p>
        </div>
        <div className="mr-32">
          <p>“Dimitrie Cantemir” College, Onesti</p>
          <p>Computer Science</p>
          <p>2018-2022</p>
        </div>
      </div>
      <div className="flex mt-36 items-start justify-between">
        <div className="font-extrabold text-5xl">
          <h2>experience</h2>
        </div>
        <div className="-ml-36">
          <div>
            <p>Technical Team Member STIM DC</p>
            <p>2022-2025</p>
          </div>
          <div className="mt-4">
            <p>Volunteer - Asociatia “Sfanta Anastasia”</p>
            <p>Aug 2019</p>
          </div>
        </div>
        <div className="mr-4">
          <div>
            {" "}
            <p>Volunteer - Parohia Buna Vestire</p>
            <p>Jul 2019</p>
          </div>
          <div className="mt-4">
            <p>Volunteer - Asociatia “Sf. Voievod Stefan Cel Mare”</p>
            <p>Jun 2019</p>
          </div>
        </div>
      </div>
      <div className="mt-36 flex">
        <div className="font-extrabold text-5xl">
          <h2>certificates</h2>
        </div>
        <div className="ml-512">
          <p>Cambridge English - B2</p>
          <p>Issued: Apr 2022</p>
          <p>Accreditation No. : 501/1432/2</p>
          <p>Verification No. : B700686</p>
        </div>
      </div>
      <div className="mt-36 flex items-end justify-between">
        <div className="-mb-4">
          <h2 className="text-5xl font-extrabold">soft</h2>
          <p>Ambitious</p>
          <p>Creative</p>
          <p>Team-Player</p>
          <p>Dedicated</p>
        </div>
        <div className="mb-7">
          <h2 className="text-5xl font-extrabold">other</h2>
          <p>C/C++</p>
          <p>Java</p>
        </div>
        <div className="mb-6">
          <h2 className="text-5xl font-extrabold">backend</h2>
          <p>Nodejs</p>
          <p>MySQL</p>
        </div>
        <div className="-mb-24">
          <h2 className="text-5xl font-extrabold">frontend</h2>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript</p>
          <p>Reactjs</p>
          <p>Tailwind</p>
          <p>GSAP</p>
          <p>Figma</p>
        </div>
        <div>
          <h1 className="text-12xl font-extrabold">skills</h1>
        </div>
      </div>
      <div className="flex justify-center mt-36">
        <h1 className="text-11xl font-extrabold">contact</h1>
      </div>
      <div className="-mt-44">
        <div className="flex justify-around">
          <p className="mt-2"> <a href="https://github.com/elizadoltu" target="_blank">github</a></p>
          <div className="ml-5">
            <p><a href="https://www.instagram.com/elizateodoradoltu/"target="_blank">instagram</a></p>
            <p><a href="https://www.behance.net/elizadoltu"target="_blank">behance</a></p>
          </div>
          <p className="-mr-12"> <a href="https://www.linkedin.com/in/eliza-teodora-doltu-56336b24a/" target="_blank">linkedin</a></p>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
