import React from "react";
import {FaFire} from 'react-icons/fa'

const Channel = ({image, name}) => {
  return <div className="w-10/12 my-4 mx-auto flex justify-around items-center text-gray-500 p-2 rounded-lg transition-all hover:text-white hover:bg-gray-600 hover:cursor-pointer">
    <div className="w-1/5">{image}</div>
    <div className="w-4/5">{name}</div>
  </div>;
};

export default Channel;
