import { uid } from "uid";

const mkContainer = () => {
  const container = {
    children: [],
    id: uid(),
    filter: "all",
  };
  return container;
};
export default mkContainer;
