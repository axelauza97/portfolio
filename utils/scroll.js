const preventScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};
export const disableScroll = () => {
  document.body.addEventListener("wheel", preventScroll, { passive: false });
  document.body.addEventListener("touchmove", preventScroll, {
    passive: false,
  });
};

export const enableScroll = () => {
  document.body.removeEventListener("wheel", preventScroll);
  document.body.removeEventListener("touchmove", preventScroll);
};
