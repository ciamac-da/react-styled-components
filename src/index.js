import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import App from "./containers/App";

const IndexStyle = styled.body`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

ReactDOM.render(
  <IndexStyle>
    <App />
  </IndexStyle>,
  document.getElementById("root")
);