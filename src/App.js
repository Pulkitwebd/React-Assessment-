import "./App.css";
import Form from "./component/Form";
import image from "./images/image.png";
import vector from "./images/vector.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="formpart">
          <Form />
        </div>
        <div className="vectorbox">
          <img src={vector} className="vector"></img>
        </div>
      </div>
    </>
  );
}

export default App;
