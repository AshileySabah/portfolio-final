import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { App } from "./App.tsx";
import { theme } from "./components/BaseLayout/Theme/styles.tsx";

const mainColor = theme?.palette?.primary?.main;
const background = theme?.palette?.background?.paper;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <style>
      {`
        body {
          background: ${background};
        }

        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-thumb {
          background: ${mainColor};
          border-radius: 0 0 10px 10px;
        }
      `}
    </style>
    <App />
  </React.StrictMode>,
);
