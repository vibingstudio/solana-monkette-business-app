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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HallOfFameComponent from "./components/HallOfFame";
import HallOfFameSingleComponent from "./components/HallOfFame/individual";
import SMTB from "./components/SMBT";

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
              <Route path="/smtb/:id">
                <SMTB />
              </Route>
              <Route path="/hall-of-fame/:id">
                <HallOfFameSingleComponent />
              </Route>
              <Route path="/hall-of-fame/">
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
