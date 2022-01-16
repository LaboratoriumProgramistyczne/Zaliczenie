import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const useAos = (duration) => {
  useEffect(() => {
    Aos.init({ duration: duration });
  }, []);
};

export default useAos;
