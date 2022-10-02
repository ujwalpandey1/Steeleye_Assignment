import React from "react";
import List from "./components/List";
const items = [
  {
     text:"Facebook"
  },
  {
    text:"Instagram"
 },
 {
  text:"Snapchat"
}
];

function App() {
  return (
    <div>
      <List  items={items}/>
    </div>
  );
}

export default App;
