// Importing necessary libraries and components
import * as ReactDOMClient from "react-dom/client";
import React from "react";
import ServicesLayout, { Service } from "@layout/ServicesLayout";
import UseCase1 from "@pages/UseCase1";
import UseCase2 from "@pages/UseCase2";
import "./index.scss";

// Creating an array of services with their name and component
const components: Service[] = [
  { name: "Use-Case 1", comp: UseCase1 },
  { name: "Use-Case 2", comp: UseCase2 },
];

// Defining the main application component
const App = () => (
  // Using the suspense component to handle lazy loading of services
  <React.Suspense fallback="Loading Module">
    <ServicesLayout components={components} />
  </React.Suspense>
);

// Creating a root for the app and rendering the main component
const root = ReactDOMClient.createRoot(
  document.getElementById("app") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
