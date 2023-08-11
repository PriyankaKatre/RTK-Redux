import React from "react";

export default function Memo() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const increaseCountOne = () => {
    setCount1(count1 + 1);

  };
  const increaseCountTwo = () => {
    setCount2(count2 + 1);
  };

//   const isEven = () =>{
//     console.log('----------------')
//     let i = 0;
//     while(i < 2000000000) i++;
//     return count1 % 2 === 0
//   }

  const isEven = React.useCallback(() =>{
    console.log('----------------')
    let i = 0;
    while(i < 200000) i++;
    return count1 % 2 === 0
  },[count1])

  return (
    <div>
      <button onClick={increaseCountOne}>counterOne {count1}</button>
      {
        isEven ? 'Even' : 'Odd'
      }
      <button onClick={increaseCountTwo}>counterTwo {count2}</button>
    </div>
  );
}
