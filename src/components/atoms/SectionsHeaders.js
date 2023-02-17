import React from "react";
import { Link } from "react-router-dom";

const SectionsHeaders = ({ headline, paragraph, cta }) => {
  return (
    <div className="SectionsHeadlines mt-3 mb-3">
      <div className="row">
        <div className="col-9 col-sm-11 ">
          <h3>{headline}</h3>
          {paragraph && <p className="">{paragraph}</p>}
        </div>
        <div className="col">
          {cta && <Link to={cta.link}>{cta.text}</Link>}
        </div>
      </div>
    </div>
  );
};

export default SectionsHeaders;
