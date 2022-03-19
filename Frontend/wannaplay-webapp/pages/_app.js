import "../styles/globals.css";
import Head from "next/head";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import inputReducer from "../reducers/inputReducer";
import Topbar from "../components/topbar";

const rootReducer = combineReducers({
  usrname: inputReducer,
});

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap"
            rel="stylesheet"
          />
          <title>Wanna play</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </Head>
        <Topbar></Topbar>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
