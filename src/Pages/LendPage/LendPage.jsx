import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ContentCard from "../../Components/Lend/ContentCard";
import LendCard from "../../Components/Lend/LendCard";
import LendTop from "../../Components/Lend/LendTop";
import { getLendData } from "../../Redux/AppReducer/action";
import "./LendPage.css";
import { Heading, Spinner } from "@chakra-ui/react";
import SelectDrop from "../../Components/Lend/SelectDrop";
import { RiArrowUpDownFill } from "react-icons/ri";

const LendPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const lendData = useSelector((state) => state.AppReducer.lendData);
  const isLoading = useSelector((state) => state.AppReducer.isLoading);
  const initialState = searchParams.getAll("category");

  const [sortVal, setSortVal] = useState("popularity");
  // console.log("sortVal:", sortVal);
  // console.log(lendData);
  // console.log(initialState);
  const [low, setLow] = useState(false);

  const handleChangeVal = (e) => {
    setSortVal(e.target.value);
  };

  const handleSortBtn = () => {
    setLow(!low);
  };

  useEffect(() => {
    dispatch(getLendData());
  }, []);

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
    <div className="lendContainer">
      <LendTop />
      {isLoading ? (
        <div className="spin">
          <div>
            <Spinner color="red.700" size="xl" speed="0.6s" thickness="5px" />
          </div>
          <p>Please wait...</p>
        </div>
      ) : (
        <div className="mianContent">
          <LendCard />
          <div className="contentItems">
            <div className="sortPaginate">
              <div></div>
              <div className="sortContainer">
                <p>Sort by</p>
                <SelectDrop changeVal={handleChangeVal} />
                <div className="sortIcon">
                  <button onClick={handleSortBtn}>
                    <RiArrowUpDownFill />
                  </button>
                </div>
              </div>
            </div>
            {initialState &&
              mapAndSort(
                lendData?.filter((i) => {
                  if (
                    initialState.includes(i.place) ||
                    initialState.includes(i.gender) ||
                    initialState.includes(i.for)
                  ) {
                    return true;
                  }
                  return false;
                })
              )}
            {dataLength === 0 && initialState.length !== 0 && (
              <Heading
                size="lg"
                fontSize="40px"
                style={{
                  color: "gray",
                  textAlign: "center",
                  margin: "160px 0",
                }}
              >
                Sorry no data found!!!
              </Heading>
            )}
            {initialState.length === 0 && mapAndSort(lendData)}
          </div>
        </div>
      )}
    </div>
  );
};

export default LendPage;
