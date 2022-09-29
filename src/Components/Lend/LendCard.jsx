import React from "react";
import FilterLend from "./FilterLend";
import { lendfilterdata } from "../../Pages/LendPage/LendData";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./lend.module.css";

const LendCard = () => {
  let filterName = lendfilterdata.filterName;
  const [searchParams, setSearchParams] = useSearchParams();

  const initialState = searchParams.getAll("category");
  const [category, setCategory] = useState(initialState || []);

  const handleFilter = (e) => {
    let option = e.target.value;
    const newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    setSearchParams({ category: category });
  }, [category]);
  return (
    <div className={styles.lendCardContainer}>
      <p className={styles.sortBy}>Filter By</p>
      {filterName?.map((i) => {
        return (
          <div className={styles.lendBox} key={i.id}>
            <FilterLend
              item={i}
              key={i.id}
              filter={handleFilter}
              category={category}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LendCard;
