import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import configStore from "./redux/config/configStore.js";

// TODO: redux store를 모든 App에 공유할 수 있게 하세요.
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={configStore}>
    <App />
  </Provider>
);
