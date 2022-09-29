import React, { useState } from "react";
import LendCard from "../../Components/Lend/LendCard";
import { RiArrowUpDownFill } from "react-icons/ri";
import styles from "./LendPage.module.css";
import SelectDrop from "../../Components/Lend/SelectDrop";
import { useSearchParams } from "react-router-dom";
import ContentCard from "../../Components/Lend/ContentCard";
import { lendfilterdata } from "./LendData";

const LendPage = () => {
  const [sortVal, setSortVal] = useState("popularity");
  const [low, setLow] = useState(false);
  const [searchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");

  const handleChangeVal = (e) => {
    setSortVal(e.target.value);
  };

  const handleSortBtn = () => {
    setLow(!low);
  };

  let dataLength;

  const mapAndSort = (data) => {
    dataLength = data.length;

    return data
      .sort((a, b) => {
        if (sortVal === "popularity") {
          if (low) return a.funded - b.funded;
          else return b.funded - a.funded;
        } else if (sortVal === "pending") {
          if (low) return a.required - b.required;
          else return b.required - a.required;
        } else if (sortVal === "rates") {
          if (low) return a.rates - b.rates;
          else return b.rates - a.rates;
        }
      })
      .map((i) => {
        return <ContentCard item={i} key={i.id} />;
      });
  };

  return (
    <div>
      {/* lend top */}

      <div className={styles.lendHeading}>
        <h1>You can help a family fundraise for a better life. Make a loan.</h1>
        <p>
          Select a loan you feel the most for, based on the cause, geography or
          the fundraising need.
        </p>
      </div>

      {/* filter button and sort */}

      <div>
        <div className={styles.mianContent}>
          <LendCard />
          <div className={styles.contentItems}>
            <div className={styles.sortPaginate}>
              <div></div>
              <div className={styles.sortContainer}>
                <p>Sort by</p>
                <SelectDrop changeVal={handleChangeVal} />
                <div className="sortIcon">
                  <button onClick={handleSortBtn}>
                    <RiArrowUpDownFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* filter button */}
      
    </div>
  );
};

export default LendPage;
