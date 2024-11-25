import React from 'react';
import Image from 'next/image';

interface PropType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropType> = ({ title, desc, img, tags }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px]" data-aos="zoom-in-down">
      <div>
        <Image
          className="w-[300px] sm:w-[350px] h-auto"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className="p-4 space-y-4">
        <div className="text-4xl font-extralight">{title}</div>
        <div>{desc}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <div className="bg-gray-200 text-sm rounded-lg p-2" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
