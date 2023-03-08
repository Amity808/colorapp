import Square from "./Square";
import Input from "./Input";
import { useState } from "react"; 

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexColorV, setHexColorV] = useState('')
  const [isDarkTest, setIsDarkTest] = useState(true)
  
  return (
    <div className="App">
      <Square 
      colorValue={colorValue}
      hexColorV={hexColorV}
      isDarkTest={isDarkTest}
      />
      <Input 
      colorValue={colorValue}
      setColorValue={setColorValue}
      setHexColorV={setHexColorV}
      isDarkTest={isDarkTest}
      setIsDarkTest={setIsDarkTest}
      />
    </div>
  );
}

export default App;
