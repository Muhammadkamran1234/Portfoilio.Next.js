import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { BsTelephoneX } from "react-icons/bs";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap -10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-in-down">Get in touch</h2>
                <p className='text-grey-600 text-[18px] pt-2' data-aos="zoom-in-down">
                    Drop me a line ,give me a call,or send me a message 
                </p>
                <div className='flex gap-3 items-center ' data-aos="zoom-in-down">
                    <MdMailOutline size={30}/> kk8085528@gmail.com
                </div >
                <div className='flex gap-3 items-center' data-aos="zoom-in-down">
                <BsTelephoneX  size={30}/> 03282035379
                </div>
              </div>
              <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent' 
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-down">
                    <label htmlFor="msg">Message</label>
                    <textarea
                    className='bg-transparent border border-accent'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-6' data-aos="zoom-in-down">submit</button>
                </div>  
                </div>
                </div>

  )
}     
              

export default Contact 

