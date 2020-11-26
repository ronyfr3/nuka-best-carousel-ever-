import React from 'react';
import Carousel from 'nuka-carousel';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Image() {
    return (
        <div style={{width: '200px',height:'250px'}}>
        <Carousel
             
             animation={true}
             autoplay={true}
             autoplayReverse={true}//eta false korle 1st e jeye theme jabe r last e jeye theme jbe 
             wrapAround={false}
             enableKeyboardControls={true} //key board er home and end btn e click kore dekho 
            slidesToScroll={1}
            slideWidth={'200px'}
            transitionMode='scroll3d' //'scroll', 'fade', 'scroll3d'
            

               defaultControlsConfig={{
                   //you can apply your css to edit arrows
                   nextButtonText: <AiOutlineArrowRight/>,
                   prevButtonText: <AiOutlineArrowLeft/>,
                   nextButtonStyle:{
                    backgroundColor:'green',
                    border:'none',
                    outline:'none',
                   },
                   prevButtonStyle:{
                    backgroundColor:'green',
                    border:'none',
                    outline:'none',
                   },
                   pagingDotsStyle: {
                     fill: 'black',
                    //  backgroundColor:'green',
                     border:'none',
                     outline:'none',
                     fontSize:'20px',
                   //   display:'none' //display none removes dots 
                   }
                 }}
           >
           <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" alt='' />
           <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" alt='' />
           <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" alt=''  />
           <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" alt='' />
           <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" alt='' />
           <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" alt='' />
       </Carousel>

   </div>
    )
}

export default Image

