import React from "react";
import sanik from "../../assets/sanilogo.png";
import cbc from "../../assets/capacitybuilding.png";
import p1 from "../../assets/paper1.pdf";
import p2 from "../../assets/paper2.pdf";
import p3 from "../../assets/What Next.pdf";

const Downloads = () => {
  return (
    <>
      <div className="heading">
        <h2>Downloads</h2>
      </div>
      <div className="Downloadcontent">
      <div className="tophead">
        <h5>Previous year question papers</h5>
      
      <div className="d1">
      <div className="dimg">
          <img src={sanik} alt="" />
        </div>
        <div className="dtext">
          <h5>Sainik school entrance exam class 6:</h5>
          <li>
            {`>`} AISSEE-2018 Question Paper VI Paper-I : To download{" "}
            </li>
            <div className="capacitylink">
            <a href={p1} download className="btn">
              Click here
            </a>
            </div>
          <li>
            {`>`} AISSEE-2018 Question Paper VI Paper-II : To download{" "}
            </li>
            <div className="capacitylink">
            <a href={p2} download className="btn">
              Click here
            </a>
            </div>
          
        </div>
        </div>
      </div>
      <div className="tophead">
        <h5>For career guidance</h5>
     
      <div className="d1">
      <div className="dimg">
          <img src={cbc} alt="" />
        </div>
        <div className="dtext">
          <li>
            {`>`} What Next after class 10th and 12th : To download{" "}
            </li>
            <div className="capacitylink">
            <a href={p3} download className="btn">
              Click here
            </a>
            </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Downloads;
