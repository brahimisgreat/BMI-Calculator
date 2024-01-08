import BmiLimitations from "./Components/bm-limitations/bmiLimitations";
import Hero from "./Components/hero/hero";
import Tips from "./Components/tips/tips";
import YourResult from "./Components/your-results/yourResult";


function App() {
  return (
    <div className="App">
    <Hero />
    <YourResult />
    <Tips />
    <BmiLimitations />
    
    </div>
  );
}

export default App;
