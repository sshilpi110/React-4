
import './App.css';
import Button from"./components/Button"
import Avatar from "./components/Avatar"

function App() {
  return (
    <div className="App">
      <h1>Hello RCT-101</h1>
      <Button text="click me !"/>

      <Avatar
     src="https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507__340.jpg"
     name="nayan"
     

     rounded={false}

      />


<Avatar
     src="https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083__340.jpg"
     name="suji ji"
   
     rounded={true}

      />
      
    </div>
  );
}

export default App;
