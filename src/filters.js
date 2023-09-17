import getToday from "./getToday";
const filters = {
  today(obj) {
    const today = getToday().toString();
    const due = obj.due.toString();
    if (due == today) {
      return true;
    }
    return false;
  },
  upcoming(obj) {
    const today = getToday().toString();
    const due = obj.due.toString();
    if (due > today) {
      return true;
    }
    return false;
  },
  anytime(obj) {
    const due = obj.due.toString();
    if (due == "" || due == null) {
      return true;
    }
    return false;
  },
};

export default filters;
