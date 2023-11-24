const mkExpandBtn = {
  open() {
    const btn = document.createElement("button");
    btn.innerHTML = "Open";
    return btn;
  },
  close() {
    const btn = document.createElement("button");
    btn.innerHTML = "Close";
    return btn;
  },
};

export default mkExpandBtn;
