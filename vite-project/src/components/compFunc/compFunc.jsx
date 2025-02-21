import { useState } from "react";

const CompFunc = (props) => {
  const [numVentas, setnumVentas] = useState(props.avai);
  const venta = () => {
    setnumVentas(numVentas - 1);
  };
  return (
    <>
      <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.desc}</p>
        <p>{numVentas}</p>
        <button onClick={venta}>{props.ventaBtn}</button>
      </div>
    </>
  );
};

export default CompFunc;
