import { useEffect } from "react";
import {
  useNavigate,
  useNavigationType,
  useLocation,
} from "react-router-dom";

export const Guard = ({ children }) => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();

  useEffect(() => {
    if (navigationType === "POP") {
      const isValidHome = /^\/home\/[^/]+$/.test(location.pathname);

      if (!isValidHome) {
        navigate("/home/alexa");
      }
    }
  }, [navigationType, location.pathname, navigate]);

  return children;
};
