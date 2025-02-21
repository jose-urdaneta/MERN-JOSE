import CompFunc from "./components/compFunc/compFunc";
const App = () => {
  return (
    <>
      <div>
        <CompFunc
          name={"Laptop"}
          price={1500}
          desc={"Laptop Gamer"}
          avai={5}
          ventaBtn={"Venta"}
        />

        <CompFunc
          name={"Smartphone"}
          price={150}
          desc={"Smartphone chino"}
          avai={15}
          ventaBtn={"Venta"}
        />

        <CompFunc
          name={"Auriculares"}
          price={15}
          desc={"Headphones Gamer"}
          avai={10}
          ventaBtn={"Venta"}
        />

        <CompFunc
          name={"Monitor"}
          price={250}
          desc={"Monitor Gamer"}
          avai={8}
          ventaBtn={"Venta"}
        />
      </div>
    </>
  );
};

export default App;
