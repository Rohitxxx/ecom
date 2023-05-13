import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div>
            <Carousel showStatus={false} showThumbs={false} centerMode={false}> 
                <div>
                <img src= '	https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/7ebae6ab4be6cda7.jpg?q=50'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                <img src=	'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/290544dd3545fc19.jpg?q=50' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                <img src='https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/275a28281f9262c7.jpg?q=50' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
         {/* <p></p> */}
        </div>
    )
}

export default Banner