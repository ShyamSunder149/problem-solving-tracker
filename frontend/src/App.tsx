import Lc from "./components/complex/Leetcode";
import Gfg from "./components/complex/Gfg";
import Cf from "./components/complex/CodeForces";
import Cc from "./components/complex/CodeChef";
import Total from "./components/complex/Total";
import Home from "./components/simple/Home";

const App = () => {
  console.log('start')
  return (
    <div>
      <Home />
      <Total />
      <div className="grid flex-row align-center px-10 grid-cols-4 gap-4 mt-5">
        <Lc />
        <Gfg />
        <Cf />
        <Cc />
      </div>
    </div>
  )
}

export default App;