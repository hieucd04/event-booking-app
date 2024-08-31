import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { Application } from "@miniskylab/application";
import { store } from "./redux-store";

registerRootComponent(() => (
    <Provider store={store}>
        <Application/>
    </Provider>
));
