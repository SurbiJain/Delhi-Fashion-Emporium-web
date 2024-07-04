import React from 'react'

const Content = () => {
  const customerReview = [
    {star: "5 Star", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto eius, perferendis itaque nulla mollitia saepe repellendus impedit veniam doloribus necessitatibus! ", name: "XYZ", designation: "Financial Analyst"
    }, {star: "5 Star", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto eius, perferendis itaque nulla mollitia saepe repellendus impedit veniam doloribus necessitatibus!", name: "XYZ", designation: "Financial Analyst"
    }, {star: "5 Star", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto eius, perferendis itaque nulla mollitia saepe repellendus impedit veniam doloribus necessitatibus! ", name: "XYZ", designation: "Financial Analyst"
    }
  ]
  return (
    <div className=' p-[140px_15px_140px] min-h-[75vh] lg:mx-44 z-2 relative'>
      <h2 className='text-center mb-6 text-white text-[34px] font-semibold'>Happy Customers
      </h2>
      <div className=' py-4 review flex  max-sm:flex-col justify-around gap-6 pt-5'>
        {
          customerReview.map((e,i)=>{
            return(
              <div className='bg-white/90 rounded-lg p-10 text-start cursor-grab text-[18px] leading-8  text-gray-500' key={i}>
                <div className='text-black'  >{e.star}</div>
                <p className='text-[18px] font-medium leading-12 mb-5' >{e.review}</p>
                <div className='text-gray-700 text-[19px] font-semibold leading-7'  >{e.name}</div>
                <div  >{e.designation}</div>
              </div>
            )
          })
        }
        </div>

    </div>
  )
}

export default Content