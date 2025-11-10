import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='h-screen flex flex-col justify-around items-center text-white px-5'>
      <div>
        <div className='flex flex-col justify-between'>
          <h1 className=''>GET IN TOUCH</h1>
          <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
          <form>
            <div className='flex'>
              <div className='bg-white px-8 my-40'>
                {/* <input
                  type="text"
                  placeholder='Name' */}
                  className='bg-white text-black px-4 py-2 w-full border border-gray-300 rounded'
                />

              </div>
              <div>
                <input type="text" placeholder='Email'
                  className='bg-white text-black' />
              </div>
            </div>
            <div>
              <textarea name="" id="" placeholder='Message'></textarea>
            </div>
            <div><button className=''>SEND MESSAGE</button></div>
          </form>
        </div>

        <div className='flex flex-col justify-around'>
          <h1>Contact Info</h1>
          <div>
            <p>
              <span className='block'>
                <i className='fa fa-map-marker'></i>
                Address
              </span>
              4321 California St, San Francisco, CA 12345
            </p>
            <p>
              <span className='block'>
                <i className='fa fa-phone'></i>
                Phone
              </span>
              +123 456 7890
            </p>
            <p>
              <span className='block'>
                <i className="fa-solid fa-envelope"></i>
                Email
              </span>
              info@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* icons  */}
      <div className='w-full h-30 flex justify-center items-center'>
        <div className='w-30 flex gap-8'>
          <div>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact