import './App.css';
import { motion } from 'framer-motion'
import images from './images'
import { useState, useRef, useEffect } from 'react';

function App() {

  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="App">
      <motion.div ref={carousel} className='carousel'>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className='inner-carousel'
          whileTap={{ cursor: "grabbing" }}
        >
          {
            images.map((image, index) => {
              return (
                <motion.div className='item' key={index}>
                  <img src={image} alt="" />
                </motion.div>
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
