import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import styles from "./lend.module.css";

const FilterLend = ({ item, filter, category }) => {
  return (
    <div className={styles.dropDownContainer}>
      <Accordion allowToggle>
        <AccordionItem style={{ border: "1px solid #dedcdd" }}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <div className={styles.filterName}>{item.title}</div>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} style={{ backgroundColor: "white" }}>
            <div className={styles.checkContainer}>
              {item.category.map((i) => {
                return (
                  <div className={styles.checkBox} key={i.id}>
                    <input
                      type="checkbox"
                      value={i.tag}
                      onChange={filter}
                      defaultChecked={category.includes(`${i.tag}`)}
                    />
                    <p>{i.tag}</p>
                  </div>
                );
              })}
              <div className={styles.line}></div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterLend;
