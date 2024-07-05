import React from "react";
import styles from "./Select.module.css";
import { Itim } from "next/font/google";
import { it } from "node:test";
import FilterSelect from "../Filters/FilterSelect/FilterSelect";


const Select = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
      <div className={styles.selectWrapper}>
        <FilterSelect values={[{value:"low to high" ,title:"price High to Low"} ,{value:"high to low" ,title:"price low to high"}]}/>
      </div>
    </div>
  );
};
export default Select;
