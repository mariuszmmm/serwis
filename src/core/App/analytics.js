import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-G3GD9N9DTF");
};

export const logPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};
