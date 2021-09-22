import React from "react";
import "../styles/prizes.css";

function Prizes() {
  return (
    <div className="Prizes">
      <div className="container Prizes-container">
        <div className="Prizes-main">
          <div className="Second">
            <h1 className="Prizes-heading">
              #2 <br /> First Runner Up
            </h1>
            <p className="Prizes-text">Exciting Prizes worth upto Rs. 3200.</p>
            <p className="Prizes-text">Certificates</p>
          </div>

          <div className="First">
            <h1 className="Prizes-heading">
              #1 <br /> Winner
            </h1>
            <p className="Prizes-text">
              Exciting Prizes worth upto Rs. 4800 to the Winners.
            </p>
            <p className="Prizes-text">Certificates</p>
          </div>

          <div className="Third">
            <h1 className="Prizes-heading">
              #3 <br /> Second Runner up
            </h1>
            <p className="Prizes-text">Exciting Prizes worth upto Rs. 2000.</p>
            <p className="Prizes-text">Certificates</p>
          </div>
        </div>

        <div className="Prizes-secondary">
          <p className="Prizes-secondary-text">
            Exciting Goodies and Certificates for all Participants
          </p>
        </div>
      </div>
    </div>
  );
}

export default Prizes;
