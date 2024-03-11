import "./Country.css";

const Country = (props) => {
  console.log(props.country);
  return (
    <div className="name">
      <h1>Name:{props.country?.name?.common}</h1>
      <img src={props.country.flags.png} alt="" />
    </div>
  );
};

export default Country;
