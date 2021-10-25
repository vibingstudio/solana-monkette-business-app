import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { WalletBalanceProvider } from "./hooks/useWalletBalance";
import WalletConnectionProvider from "./components/WalletConnectionProvider";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SMBT from "./components/SMBT";
import HallOfFameComponent from "./components/HallOfFame";

ReactDOM.render(
  <React.StrictMode>
    <WalletConnectionProvider>
      <WalletBalanceProvider>
        <Toaster />
        <div className="flex flex-col justify-between h-screen">
          <Header />
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/smbt/:id">
                <SMBT />
              </Route>
              <Route path="/hall-of-fame/:id">
                <HallOfFameComponent />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </div>
      </WalletBalanceProvider>
    </WalletConnectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
