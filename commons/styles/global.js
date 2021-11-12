import { css } from "@emotion/react";
import { Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Oxygen";
        src: url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap");
        font-display: swap;
      }
      body {
        padding: 0;
        margin: 0;
      }
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      button {
        background: transparent;
        box-shadow: 0px 0px 0px transparent;
        border: 0px solid transparent;
        text-shadow: 0px 0px 0px transparent;
        cursor: pointer;
      }
    `}
  />
);
