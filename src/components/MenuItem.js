// import React from 'react'
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react'


function MenuItem({ icon, text, link }) {
    const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
    return (
      <MenuItem component={<Link to={link} />}>
        {icon}
        {width > breakpoint && text}
      </MenuItem>
    );
  }

export default MenuItem