import IdleStateDetector from "./IdleStateDetector";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <IdleStateDetector delay={5000} />
    </div>
  );
}
