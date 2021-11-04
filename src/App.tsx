import { Provider } from "react-redux";
import styles from "./App.module.css";
import { NavBarMobile } from "./components/NavBarMobile";
import { store } from "./redux/store";
import { RootRouter } from "./router/RootRouter";

function App() {
  return (
    <div className={styles.app}>
      <Provider store={store}>
        {window.innerWidth >= 769 ? <RootRouter /> : <NavBarMobile />}
      </Provider>
    </div>
  );
}

export default App;
