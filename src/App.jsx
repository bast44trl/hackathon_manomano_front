import backgroundLandingPage from "./assets/backgrounds/landing-page.png";
import ProductCard from "./components/ProductCard/ProductCard";
import './styles/_App.scss';

function App() {
  return (
      <div className="App">
        <div className="App__background">
          <img src={backgroundLandingPage} alt="background de mano mano" />
        </div>
        <ProductCard />
      </div>
  );
}

export default App;
