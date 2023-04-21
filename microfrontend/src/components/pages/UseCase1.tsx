import React, { useEffect, useState } from "react";
import { Paper, Stack } from "@mui/material";
import { Chart } from "../ux/Chart";

// Define a functional component called Application
export default function Application() {

  // Use the useState hook to define state variables 'data' and 'error', initialized to null
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Use the useEffect hook to fetch data from the server when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the '/chart' endpoint on the server
        const response = await fetch("http://localhost:8080/chart");
        // Parse the JSON data returned from the server
        const json = await response.json();
        // Update the state variable 'data' with the parsed JSON data
        setData(json);
      } catch (error: any) {
        // If an error occurs, update the state variable 'error' with the error message
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  // Return a Paper component with a Stack component containing a Chart component and an error message
  return <Paper sx={{ m: 1, height: "calc(100vh - 20px)" }}>
    <Stack spacing={1} direction={"row"} sx={{ justifyContent: "center" }}>
      {/* If 'data' is not null, render the Chart component with the 'data' prop */}
      {data !== null && <Chart data={data} sx={{ height: "650px", width: "950px" }} />}
      {/* If 'error' is not null, render the error message */}
      {error !== null && error}
    </Stack>
  </Paper>
};
