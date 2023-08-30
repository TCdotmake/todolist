const mkIcon = (img) => {
  const icon = document.createElement("div");
  icon.classList.add("icon");
  const iconImg = new Image();
  iconImg.src = img;
  icon.appendChild(iconImg);
  return icon;
};

export default mkIcon;