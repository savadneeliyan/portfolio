import React, { useEffect, useState } from 'react'
import Nav2 from '../Components/Nav2';
import Banner2 from '../Components/Banner2';
import Love from '../Components/Love';
import Project from '../Components/Project';
import ViewProject from '../Components/ViewProject';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';

function Homepage() {

  const [showComponent, setShowComponent] = useState(true);

  const isComponentHidden = localStorage.getItem("componentHidden");
  useEffect(() => {

    if (isComponentHidden) {

      setShowComponent(false);
    } else {
      setTimeout(() => {
        setShowComponent(false);
      }, 4000); 
      localStorage.setItem("componentHidden", true);
    }
  }, []);


  return (
       showComponent ?<Loader />:
        <>
          <Nav2 />
          <Banner2 />
          <Love />
          <Project />
          <ViewProject />
          <Footer />
        </>
  );
}

export default Homepage