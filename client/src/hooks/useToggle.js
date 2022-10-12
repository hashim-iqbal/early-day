import React, { useState } from 'react'

const useToggle = (initialState = true) => {
  const [showToggle, setToggle] = useState(initialState);

  const Toggler = () =>{
    setToggle(!showToggle)
  };

  return{ showToggle, Toggler};
};

export default useToggle