import styles from "./FiltersSelect.module.css";
// const FilterSelect = () => {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.selectWrapper}>
//         <select className={styles.customSelect}>
//           <option value="price-high-to-low">All</option>
//           <option value="price-low-to-high">Green</option>
//           <option value="newest-first">Orange</option>
//           <option value="oldest-first">Red</option>
//         </select>
//       </div>
//     </div>
//   );
// };
// export default FilterSelect;
type Values ={
  value:string;
  title:string;
}
type Props={
  onChange?:(item:string)=>void
  values: Values[]

}
const FilterSelect = (props:any) => {

  const onSelectChange=(e:any)=>{
    props.onChange?.(e.target.value)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <select className={styles.customSelect} onChange={onSelectChange}>
          {props.values?.map((item: Values)=><option value={item.value}>{item.title}</option>)}
        </select>
      </div>
    </div>
  );
};
export default FilterSelect;
