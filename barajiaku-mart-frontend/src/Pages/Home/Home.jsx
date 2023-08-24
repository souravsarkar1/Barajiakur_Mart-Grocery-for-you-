import React, { } from 'react';
//import {  } from '@chakra-ui/react';
import SimpleImageSlider from 'react-simple-image-slider';
import useResizeObserver from 'use-resize-observer';
import Home2 from './Home2';
import Home3 from './Home3';
import Footer from './Footer';

const Home = () => {
  const { ref, width = 1, height = 200 } = useResizeObserver(); // Create a ref
  // const { ref1, width1 = 1, height1 = 300 } = useResizeObserver(); // Create a ref

  const images = [
    { url: 'https://www.world-grain.com/ext/resources/Article-Images/2020/12/GMR_Rice_AdobeStock_64819529_E_Nov.jpg?height=667&t=1609338918&width=1080' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/Hero/Amazon-Kitchen---Rakhi-hero_3000._CB597969843_.jpg' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/Haircare-Herofader-PCqqq._CB597780484_.jpg' },
    { url: 'https://fandbrecipes.com/wp-content/uploads/2022/03/Indian-Masala-Types-and-Recipe.png' },
    { url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/Cons_uber_pc_slide1-3000._CB598664876_.jpg' },

  ];
  const images2 = [
    { url: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-08/Rakhi-masthead_1.jpg' },
    { url: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-08/Range-Banner-2.jpg' },
    { url: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-08/Veet-4.jpg' },
    { url: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-08/Range-Banner-2.jpg' },
    { url: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-08/Veet-4.jpg' }
  ];



  return (
    <div>
      <div ref={ref}>
        <SimpleImageSlider
          width={width}
          height={height}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
      <Home2 />
      <div ref={ref}>
        <SimpleImageSlider
          width={width}
          height={height}
          images={images2}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>
      <Home3 />
      <Home2 />
      <Footer/>
    </div>
  );
};

export default Home;
