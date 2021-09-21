import React from 'react';
import Comman from './Common';
import web from './images/img3.webp';
import About from './About';
import Service from './Service';
import Contact from './Contact';

const Home = () => {
    return(
        <>
            <Comman
                name = 'Grow your business with'
                visit = '/service'
                img = {web}
                btn = 'Get Started'
             />
             <Service />
             <About />
             <Contact />

             
        </>
    )
}

export default Home;