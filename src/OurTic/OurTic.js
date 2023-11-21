import React, { useRef, useState } from 'react';
import circ from '../circle.png';
import corss from '../cross.png';
let ticData = ['','','','','','','','',''];
function OurTic() {
    let [ticLock,setTicLock] = useState(false);
    let [ticCount,setTicCount] = useState(0);
    let checkRef = useRef(null);
    let boxOne = useRef(null);
    let boxTwo = useRef(null);
    let boxThree = useRef(null);
    let boxFour = useRef(null);
    let boxFive = useRef(null);
    let boxSix = useRef(null);
    let boxSeven = useRef(null);
    let boxEight = useRef(null);
    let boxNine = useRef(null);
    let boxData = [boxOne,boxTwo,boxThree,boxFour,boxFive,boxSix,boxSeven,boxEight,boxNine];
    const clickTogg = (e,i) => {
        if(ticLock){
            return 0;
        }
        if(ticCount%2 === 0){
            e.target.innerHTML = `<img src=${corss} alt="tictactoe" />`;
            ticData[i] = 'x';
            setTicCount(++ticCount);
         }else{
            e.target.innerHTML = `<img src=${circ} alt="tictactoe" />`;
            ticData[i] = 'o';
            setTicCount(++ticCount);
         }
         userWin();
    }
    const userWin = () => {
        if(ticData[0]===ticData[1] && ticData[1]===ticData[2] && ticData[2]!==''){
            winner(ticData[2]);
        }else if(ticData[3]===ticData[4] && ticData[4]===ticData[5] && ticData[5]!==''){
            winner(ticData[5]);
        }else if(ticData[6]===ticData[7] && ticData[7]===ticData[8] && ticData[8]!==''){
            winner(ticData[8]);
        }else if(ticData[0]===ticData[3] && ticData[3]===ticData[6] && ticData[6]!==''){
            winner(ticData[6]);
        }else if(ticData[1]===ticData[4] && ticData[4]===ticData[7] && ticData[7]!==''){
            winner(ticData[7]);
        }else if(ticData[2]===ticData[5] && ticData[5]===ticData[8] && ticData[8]!==''){
            winner(ticData[8]);
        }else if(ticData[0]===ticData[4] && ticData[4]===ticData[8] && ticData[8]!==''){
            winner(ticData[8]);
        }else if(ticData[2]===ticData[4] && ticData[4]===ticData[6] && ticData[6]!==''){
            winner(ticData[6]);
        }
    }
    const winner = (win) => {
        setTicLock(true);
        if(win === 'x'){
            checkRef.current.innerHTML = `<h1 className='text-white'> Congratulation </h1> : <img className='p-4' src=${corss} alt="tictactoe" /> <h1 className='text-white'> Win </h1>`;
        }else{
            checkRef.current.innerHTML = `<h1 className='text-white'> Congratulation </h1> : <img className='p-4' src=${circ} alt="tictactoe" /> <h1 className='text-white'> Win </h1>`;
        }
    }
    const ticReset = () => {
        setTicLock(false);
        ticData = ['','','','','','','','',''];
        checkRef.current.innerHTML = `<h1 className='head pb-10 flex items-center' >TIC TAC TOE</h1>`;
        boxData.map((e) => {
            e.current.innerHTML = ``; 
        })
    }
  return (
    <div className='h-screen flex justify-start pt-14 items-center flex-col bg-black'>
    <div className="flex items-center text-4xl text-teal-300 font-cherry" ref={checkRef}>
<h1 className=' pb-10 font-cherry'>TIC TAC TOE</h1>
    </div>
      <div>
        <div className="flex  mb-2">
            <div className='bg-slate-800 h-32 w-32 rounded-md  flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,0)} ref={boxOne}></div>
            <div className='bg-slate-800 h-32 w-32 rounded-md ml-2 flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,1)} ref={boxTwo }></div>
            <div className='bg-slate-800 h-32 w-32 rounded-md ml-2 flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,2)} ref={boxThree}></div>
        </div>
        <div className="flex mb-2">
            <div className='bg-slate-800 h-32 w-32 rounded-md flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,3)} ref={boxFour}></div>
            <div className='bg-slate-800 h-32 w-32 rounded-md ml-2 flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,4)} ref={boxFive}></div>
            <div className='bg-slate-800 h-32 w-32 rounded-md ml-2 flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,5)} ref={boxSix}></div>
        </div>
        <div className="flex mb-5">
            <div className='bg-slate-800 h-32 w-32 rounded-md flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,6)} ref={boxSeven}></div>
            <div className='bg-slate-800 h-32 w-32 rounded-md ml-2 flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,7)} ref={boxEight}></div>
            <div className='bg-slate-800 h-32 w-32 rounded-md ml-2 flex justify-center items-center cursor-pointer' onClick={(e) => clickTogg(e,8)} ref={boxNine}></div>
        </div>
      </div>
      <button className='text-teal-300 px-7 py-3 rounded-full border font-bold hover:bg-teal-300 hover:text-white hover:border-black' onClick={() => ticReset()}>Reset</button>
    </div>
  )
}

export default OurTic
