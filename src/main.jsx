import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { routing } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(<>
   <React.StrictMode>
      <RouterProvider router={routing}>
            {/* <BrowserRouter basename="/graft/"> */}
         <App />
      {/* </BrowserRouter> */}
      </RouterProvider>
</ React.StrictMode>
</>
);
