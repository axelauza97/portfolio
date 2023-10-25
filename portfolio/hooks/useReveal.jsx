import { useEffect } from "react";

export const useReveal = ({ document, classes, window }) => {
  const reveal = () => {
    var reveals = document.querySelectorAll("." + classes.reveal);
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      /*console.log(windowHeight);
            console.log(windowHeight + elementVisible);
            console.log(elementTop);*/
      if (windowHeight > elementTop + elementVisible) {
        reveals[i].classList.add(classes.active);
      } else {
        reveals[i].classList.remove(classes.active);
      }
    }
  };
  //window.addEventListener("scroll", reveal);
  //reveal();
  return { reveal };
};
