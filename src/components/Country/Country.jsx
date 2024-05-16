import './Country.css';
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, maps, population, area, region } = country;
  return (
    <div className="country">
      <h3>{name.common}</h3>
      <img className="img" src={flags.png} alt="" />
      <img src={maps.googleMaps} alt="" />
      <p>population: {population}</p>
      <p>area: {area}</p>
      <p>{region}</p>
    </div>
  );
};

export default Country;
