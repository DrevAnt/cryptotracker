import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import "./App.css";

const useStyles = makeStyles(() => ({
  App: {
    background:
      "linear-gradient(105deg, rgba(13,21,77,1) 7%, rgb(20 67 102) 65%, rgba(122,32,72,1) 98%)",
    color: "#b4c8d3",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
