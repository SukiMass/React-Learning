function Car(props) {
  const { carInfo } = props;
  const { color, brand } = carInfo;
  return (
    <h2>Car is  {color} {brand}  inside a function </h2>
  );
}
export default Car;