import React from 'react'

const Skills = () => {
  return (
    <div id='skills'    className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-down">
                <h2 className='text-4xl md:text-5xl' >Technoligies i work with</h2>
                <p className='text-gray-500 pt-2'>
                    i have a solid foundation in web development specializing in HTML ,CSS,and Typescript.my Experience extends to using framework like React and Next.js.To create dynammic and user-friendly Application.I am also proficent in Tailwind Css for efficent styling and designwith a passion for learning.I stay ubdate on the Latest technologies to enhance my skill setand contribute effectively to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-down">Typescript</h2>
                        <h2 data-aos="zoom-in-down">React.js</h2>
                        <h2 data-aos="zoom-in-down">Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-down">Tailwind</h2>
                        <h2 data-aos="zoom-in-down">CSS</h2>
                        <h2 data-aos="zoom-in-down">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills 
