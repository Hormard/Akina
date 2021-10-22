import { Provider } from "react-redux";
import styles from "./App.module.css";
import { store } from "./redux/store";
import { RootRouter } from "./router/RootRouter";

function App() {
  return (
    <div className={styles.app}>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </div>
  );
}

export default App;
