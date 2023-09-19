/* eslint-disable react/prop-types */
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner.jsx";

function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return (
      <Message message="add your first city by clicking on the map"></Message>
    );
  }
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}
export default CountryList;
