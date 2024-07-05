import React, { useState } from "react";
import styles from "./FruitCard.module.css";
import Link from "next/link";
export interface Fruit {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
type Props = {
  fruit: Fruit;
};
const FruitCard = (props: Props) => {
  return (
    <div className={styles.fruitCard}>
      <div className={styles.imageWrapper}>
        <img src={props.fruit.image} />
        <div className={styles.iconsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={"/images/pen.svg"} />
          </div>
          <div className={styles.iconWrapper}>
            <img src={"/images/trash.svg"} />
          </div>
        </div>
      </div>
      <div className={styles.fruitDescription}>
        <div className={styles.fruitName}>
          <span className={styles.fruitname}>{props.fruit.title}</span>
          <span className={styles.fruitColor}>{props.fruit.category} </span>
        </div>
        <div>
          <span className={styles.fruitPrice}>{props.fruit.price} </span>
        </div>
      </div>
      <Link
        href={`/product?id=${props.fruit.id}`}
        className={styles.fruitBuyNow}
      >
        <span className={styles.buyNowText}>Buy Now</span>
      </Link>
    </div>
  );
};
export default FruitCard;
