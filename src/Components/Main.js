import React from "react";
import puppy from "./puppy.png";
import design from "./design.png";

const Main = () => {
  return (
    <div id="home" className="heading-container">
      <div className="heading">
        <div className="hello">Mackenzie Kroon</div>
        <div>
          <div className="software-engineer">Software Engineer</div>
          <div className="bio-content">
            <div className="bio">
              <p>
                My journey to become a Software Engineer started with a desire
                to make my tasks more efficient. I have come to love coding
                becuase of the duality of structure and creativity.
              </p>
              <p>
                My past experience is in the Fashion industry, so I enjoy
                building projects that are beautifully designed and
                user-friendly.
              </p>

              <p>
                I recently graduated from the Grace Hopper program at Fullstack
                Academy and I am eager to continue learning and building
                projects.
              </p>
            </div>
            <div className="profile-photo-container">
              <img className="profile-photo" alt="illustration" src={design} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
