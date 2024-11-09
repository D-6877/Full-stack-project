import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookCard from './BookCard';
import axios from 'axios';

function FreeBook() {

    const [book, setBook] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/book')
                console.log(response.data.bookData);
                setBook(response.data.bookData);

            } catch (error) {
                console.log("book access faild ", error);

            }

        }
        getData();
    }, [])
  


    const filterData = book.filter((data) => {
        return data.catagory === "Free"

    })

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };





    return (
        <>

            <div className='slider-container max-w-screen-2xl container mx-auto md:px-20 px-4 mt-9 flex flex-col gap-5'>
                <h1 className='text-xl font-semibold' >Free offered Courses</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus odit iure ut placeat reprehenderit sapiente consectetur cumque tempora nisi quod?Lorem, ipsum dolor.</p>


                <div >
                    <Slider {...settings}>
                        {
                            filterData.map((item) => (
                                <BookCard item={item} key={item.id} />

                            ))

                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default FreeBook