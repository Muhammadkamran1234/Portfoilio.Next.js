import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id:0,
    title:"todo list",
    desc:"A React & Typescript based app for a manging and organization",
    img: "/todo.jpg",
    tags:["React,Node","CSS","Typescript"]
  },

  {
    id:1,
    title:"simple calculator ",
    desc:"A React & Typescript based app for a manging and organization",
    img: "/calculator.png",
    tags:["React,Node","CSS","Typescript"]
  },


  
  {
    id:3,
    title:"countdown timer ",
    desc:"A React & Typescript based app for a manging and organization",
    img: "/countdowntimer.png",
    tags:["React,Node","CSS","Typescript"]
  },









]

function Projects() {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='projects'/>
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)  => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img = {el.img}
        tags={el.tags}
        
        />))}
      </div>
      
    </div>
  )
}

export default Projects
