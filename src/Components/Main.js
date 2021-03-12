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
                Doggo ipsum borking doggo doggo maximum borkdrive doggorino very
                hand that feed shibe doing me a frighten tungg, very hand that
                feed
              </p>
              <p>
                shibe pupper floofs waggy wags. Borkf I am bekom fat you are
                doin me a concern smol doing me a frighten corgo borking doggo
                shoob, what a nice floof blop clouds h*ck heckin good boys and
                girls.
              </p>

              <p>
                Heckin doggo smol borking doggo with a long snoot for pats,
                borkdrive. Doing me a frighten ruff pupperino waggy wags
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
