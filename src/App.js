import React, { useState } from "react";
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why React.js",
    content: "Because Recat is very interesting and famous among Js community",
  },
  {
    title: "Why to Use React.js",
    content: "Because Recat is very interesting and famous among Js community",
  },
];
const options = [
  {
    label: "Oooompp Red",
    value: "red",
  },
  {
    label: "Color Green",
    value: "green",
  },
  {
    label: "Sunny Orange",
    value: "orange",
  },
];
function App() {
  // const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
        {/* <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label="Select a Color"
        /> */}
      
       <Translate />
    </div>
  );
}

export default App;
