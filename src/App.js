// wajib di import
import "./App.css";
import "./Assets/App.scss";

function App() {
  return (
    <div className="container">
      <div className="top">Header</div>
      <div className="Selection">
        <div className="card selection1">1</div>
        <div className="card selection2">2</div>
        <div className="card selection3">3</div>
        <div className="card selection4">4</div>
        <div className="card selection5">5</div>
        <div className="card selection6">6</div>
      </div>

      <div className="select">
        <div className="isi 1">a</div>
        <div className="isi 2">
          <div className="anak">1</div>
          <div className="anak">2</div>
        </div>
        <div className="isi 3">
          <div className="bayi">1</div>
          <div className="bayi">2</div>
          <div className="bayi">3</div>
          <div className="bayi">4</div>
          <div className="bayi">5</div>
        </div>
      </div>

      <div className="container"></div>
    </div>
  );
}

export default App;
