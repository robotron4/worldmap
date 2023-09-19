/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
