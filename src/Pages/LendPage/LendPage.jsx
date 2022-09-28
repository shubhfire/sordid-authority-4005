import React from "react";
import { lenddata } from "./LendData";

const LendPage = () => {
  return (
    <div>
      {/* <div className="lendHeading">
        <h1>You can help a family fundraise for a better life. Make a loan.</h1>
        <p>
          Select a loan you feel the most for, based on the cause, geography or
          the fundraising need.
        </p>
      </div> */}
      {lenddata?.map((item) => {
        return (
          <>
            <div>{item.title}</div>
            <div>
              <img src={item.image} alt=""/>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default LendPage;
