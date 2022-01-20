import "./App.css";
import backgroundLandingPage from "./assets/backgrounds/landing-page.png";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
      <div className="App">
        <div className="div-background">
          <img src={backgroundLandingPage} alt="background de mano mano" />
        </div>
        <ProductCard />
      </div>
  );
}

export default App;
