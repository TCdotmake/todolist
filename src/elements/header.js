import headerCSS from "./header.css";
import git from "../img/githubimg";
const header = document.createElement("section");
header.setAttribute("id", "header");
const portrait = document.createElement("div");
portrait.setAttribute("id", "portrait");
const rect = document.createElement("div");
rect.setAttribute("id", "rect");
header.appendChild(portrait);
header.appendChild(rect);
portrait.append(git);
export default header;
