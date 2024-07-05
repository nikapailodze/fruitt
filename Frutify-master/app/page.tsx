"use client";
import Header from "./components/Header/Header";
import Select from "./components/Select/Select";
import FruitCard, { Fruit } from "./components/FruitCard/FruitCard";
import { fruits } from "@/public/CONSTS/Fruit";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import DiscountCard from "./components/DiscountCard/DiscountCard";
import Filters from "./components/Filters/Filters";
import axios from "axios";


export default function App() {
  const [code, setCode] = useState(`function Test () { return "hello"}`);


  const [products, setProducts]=useState([])
  useEffect(

    ()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(result=>{
        setProducts(result.data)
      })
    }, []
  )


  return (
    <div>
      <div className={styles.bodyWrapper}>
        <Select/>
        <div className={styles.wrapper}>
          <div>
            <Filters />
          </div>
          <div className={styles.section}>
            <DiscountCard productName="Gori's Apple" />
            <div className={styles.fruitWrapper}>
              {products.map((fruit: Fruit, idx) => (
                <FruitCard fruit={fruit} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
