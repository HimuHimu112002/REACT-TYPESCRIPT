import React, { useState } from 'react';

type UserProps = {
    val:{
    title: string,
    num:number,
    isArray: number[],
  };
}

const About = ({val }: UserProps) => {
    const [count, setCount] = useState<number>(0);

    const handleCount = () =>{
        setCount(count + 1)
    }

return (
    <>

        {/* <div>{title} and {num}</div>
        <div>This is array = {isArray}
    
        </div>
        <h1>Map array</h1>
        <p>
            {isArray.map((item,index)=>{
                return <span>{item}{index}</span>
            })}
        </p> */}

        <h1>{val.title}</h1>
        <h1>{val.num}</h1>
        <h1>{val.isArray}</h1>
        <h1>{count}</h1>
        <p onClick={handleCount}>Click</p>
        
    </>
)
}

export default About