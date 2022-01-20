// import backgroundLandingPage from "./assets/backgrounds/landing-page.png";
// import ProductCard from "./components/ProductCard/ProductCard";
import Products from "./components/Products/Products";
import "./styles/_App.scss";

function App() {
  return (
    <div className="App">
      <Products />
      {/* <ProductCard /> */}
    </div>
  );

  // <div className="App">
  //   <Products />
  //   {/* <div className="App__background">
  //     <img src={backgroundLandingPage} alt="background de mano mano" />
  //   </div> */}
  //   <ProductCard />
  // </div>
}

export default App;
