import React, { useState } from 'react';

const About = (props: {title: string}) => {
    const [count, setCount] = useState<number>(0);

    const handleCount = () =>{
        setCount(count + 1)
    }
  return (
    <>
        <div>{props.title}</div>
        <h1>{count}</h1>
        <p onClick={handleCount}>Click</p>
    </>
  )
}

export default About