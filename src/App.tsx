import styles from "./App.module.css";
import { RootRouter } from "./router/RootRouter";

function App() {
  return (
    <div className={styles.app}>
      <RootRouter />
    </div>
  );
}

export default App;
