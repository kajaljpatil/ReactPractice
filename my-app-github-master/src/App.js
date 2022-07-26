import "./App.css";
import FirstComp from "./Component/FirstComp";
import SecComp from "./Component/SecComp";
import Header from "./Header";
import Content from "./Component/Content";
import Counter from "./MyComponents/Counter";

// props, state
function App() {
  // setname("QWE");
  // const [state, setstate] = useState(initialState);
  return (
   
    <div className="App">
      <Header name="Jay" age="28" city="Pune" />
      <Header name="kajal" age="20" city="Pune" />
      <Counter />
      <Content name="Kajal Jaykumar Patil" />
      <FirstComp />
      <SecComp />
      <p>Root -> App -> (First,(Second->Third))</p>
    </div>
  );
}

export default App;
