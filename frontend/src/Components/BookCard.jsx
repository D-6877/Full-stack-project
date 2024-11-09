import React from 'react'
import book from '../image/cardBooksimage.png'
import book1 from '../image/banner.png'

function BookCard({item}) {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-500 outline-none mt-5" >
                <figure>
                    <img
                        src={book1}
                        alt="books" 
                        className='w-[320px] h-[300px] rounded-md'
                        />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {item.name}
                        <div className="badge badge-secondary">{item.catagory}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="flex card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="badge badge-outline hover:text-pink-500 py-3">Buy now</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BookCard