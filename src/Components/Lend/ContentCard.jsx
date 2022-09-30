import React, { useState } from "react";
import LendButton from "./LendButton";
import { ImLocation } from "react-icons/im";
import { Progress } from "@chakra-ui/react";
import LendAlert from "./LendAlert";
import { loadData, saveData } from "../../Utils/localStorage";
import styles from "./lend.module.css";

const ContentCard = ({ item }) => {
  //  console.log(item)
  const [lend, setLend] = useState(25000);
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(false);
  const [lendRef, setLendRef] = useState("Lend");
  const [wide, setWide] = useState(100);

  const handleAdd = () => {
    setLendRef("Added to Basket");
    setAdd(true);
    setWide(160);
    loadData("amount")
      ? setLend(Number(loadData("amount")) + Number(lend))
      : setLend(Number(lend));
    loadData("count") ? setCount(Number(loadData("count")) + 1) : setCount(1);
    loadData("amount")
      ? saveData("amount", Number(loadData("amount")) + Number(lend))
      : saveData("amount", Number(lend));
    loadData("count")
      ? saveData("count", loadData("count") + 1)
      : saveData("count", 1);
  };

  return (
    <div className={styles.contentCard}>
      <div className={styles.leftContent}>
        <div className={styles.imgDiv}>
          <img src={item.image} alt="" />
        </div>
        <Progress
          hasStripe
          height="32px"
          isAnimated="true"
          value={
            (Number(item.funded) /
              (Number(item.required) + Number(item.funded))) *
            100
          }
          colorScheme="pink"
          style={{ borderRadius: "6px", border: "1px solid gray" }}
        />
        <div className={styles.fundDetails}>
          <div className={styles.funded}>
            <p>Funded</p>
            <p>₹ {item.funded}</p>
          </div>
          <div className={styles.requires}>
            <p>Still Requires</p>
            <p>₹ {item.required}</p>
          </div>
        </div>
        {!add && <LendButton name={"Complete the Loan"} id={"lendBtn"} />}
      </div>

      <div className={styles.rightContent}>
        <div className={styles.aboutLend}>
          <h2>{item.title}</h2>
          <div>
            <ImLocation />
            <h6>{item.location}</h6>
          </div>
          <p>
            <strong>Purpose</strong>: {item.Purpose}
          </p>
          <p className={styles.description}>
            <p className={styles.descDetails}>{item.description}</p>
            <p className={styles.readMore}>Read more</p>
          </p>
        </div>

        <div className={styles.lendMoney}>
          {!add && (
            <>
              <button>₹</button>
              <input
                type="number"
                value={lend}
                onChange={(e) => setLend(e.target.value)}
              />
            </>
          )}

          <div
            onClick={() => {
              handleAdd();
            }}
          >
            <LendAlert
              name={lendRef}
              loanAmount={lend}
              count={count}
              wide={wide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
