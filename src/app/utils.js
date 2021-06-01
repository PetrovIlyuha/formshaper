import { render, unmountComponentAtNode } from "react-dom";

export const renderText = (component) => {
  const _el = document.createElement("div");
  document.body.appendChild(_el);
  render(component, _el);
  const content = _el.innerText;
  unmountComponentAtNode(_el);
  document.body.removeChild(_el);
  return content;
};
