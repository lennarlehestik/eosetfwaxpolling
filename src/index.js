import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UALProvider } from 'ual-reactjs-renderer'
import { Anchor } from 'ual-anchor'
import { Wax } from "@alienworlds/ual-wax";


const appName = "EOSETF";

const chain = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [
    {
      protocol: "https",
      host: "wax.eosrio.io",
      //https://dsp.maltablock.org
      //host: "dsp.airdropsdac.com", https://node2.blockstartdsp.com"dsp.eosphere.io",https://dsp.eosdetroit.io,https://node1.eosdsp.com
      port: "",
    },
  ],
};

const anchor = new Anchor([chain], {
  appName,
});

const wax = new Wax([chain]);


const supportedChains = [chain];
const supportedAuthenticators = [
  anchor, wax
];

ReactDOM.render(
  <React.StrictMode>
    <UALProvider
      chains={supportedChains}
      authenticators={supportedAuthenticators}
      appName={appName}
    >
    <App />
    </UALProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
