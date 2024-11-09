import React, { useEffect, useState } from 'react'

import BookCard from './BookCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Course() {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/book')
        console.log(response.data);
        
        setBook(response.data.bookData);
        
        

        
      
        
      } catch (error) {
        console.log("book Access error: ", error);
      }
    }

    getBook();
  }, [])

  console.log(book);
  



  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  }




  return (
    <div className='max-w-screen-2xl mx-auto md:px-20 px-4  '>

      <div className='flex justify-center text-2xl font-semibold md:text-4xl mt-7  mx-5'>
        <h1>We're delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
      </div>
      <div className='flex justify-center mt-7 mx-5'>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet saepe nesciunt illo ducimus consequuntur? Pariatur ab eaque placeat cupiditate ipsum illo suscipit consectetur numquam sunt atque, aspernatur voluptates blanditiis cumque aliquam nemo, deleniti natus. Repellendus quas inventore reiciendis! Libero quibusdam voluptas .</p>

      </div>
      <div className='flex justify-center mt-3'>
        <button className='text-white bg-pink-500 p-2 px-4 rounded-md' onClick={handleNavigation} >Back</button>
      </div>



      <div className='mt-10 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item) => (
            <BookCard item={item} />
          ))
        }
      </div>

    </div>
  )
}

export default Course