import {useState, useEffect} from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
	  const handleWindowResize = () => setWidth(window.innerWidth)
	  window.addEventListener("resize", handleWindowResize);
  
	  // Return a function from the effect that removes the event listener
	  return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

  return width
}

export default useWindowWidth;