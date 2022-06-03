import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Landing from "./Pages/Landing/Landing";

function App() {
  useEffect(() => {
    AOS.init({
      disable: function() {
        const maxWidth = 720;
        return window.innerWidth < maxWidth;
      }
    });
  }, [])
  return (
    <div>
      <Landing></Landing>
    </div>
  );
}

export default App;
