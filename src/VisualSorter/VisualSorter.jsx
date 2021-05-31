import React, { Component, useState, useEffect } from "react";
import {RangeStepInput} from 'react-range-step-input';

import './VisualSorter.css';
import {mergeSortAnimations,HeapsortAnimation,bubbleSortAnimation,quickSortAnimation} from "./SortingAlgo.jsx"


function VisualSorter()
{
    return <div>
      
        <VisualSorting />
    </div> ;
}

function generateRandomNumber(max, min)
{
    var number=Math.round(Math.random()*(max-min+1)+min)
    return number;
}

 








class VisualSorting extends Component{

    constructor(props)
    {super(props);
    this.state={array:[],
    speed:6,
    alreadyRunning:false};
    }
   componentDidMount()
   {this.resetArray();}
   
   resetArray(){
       if(this.state.alreadyRunning==true) return;
       const array=[];
       for(let i=0;i<169;i++)
       {array.push(generateRandomNumber(5,600));}
       this.setState({array});
   }
    

   quickSort()
   {
    const ms=this.state.speed;
    const quickanimations=quickSortAnimation(this.state.array);
    for (let i = 0; i < quickanimations.length; i++) {
     const arrayBars = document.getElementsByClassName('array-bar');
     const operation=quickanimations[i][0];
     if(operation=="comp"){
        const [opr,colorID,barOneIdx, barTwoIdx] = quickanimations[i];
       const barOneStyle = arrayBars[barOneIdx].style;
       const barTwoStyle = arrayBars[barTwoIdx].style;
       const color = colorID === 1 ? "red" : "rgb(18, 183, 233)";
       setTimeout(() => {
         barOneStyle.backgroundColor = color;
         barTwoStyle.backgroundColor = color;
       },i* ms);
     }
     else{
        
        setTimeout(() => {
            const [opr,barOneIdx, newHeight1,barTwoIdx,newHeight2] = quickanimations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight1}px`;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.height = `${newHeight2}px`;
          }, i* ms);
   
     }
     
   }
}











   bubbleSort()
   {
    const ms=this.state.speed;
    const bubbleanimations=bubbleSortAnimation(this.state.array);
    for (let i = 0; i < bubbleanimations.length; i++) {
     const arrayBars = document.getElementsByClassName('array-bar');
     const operation=bubbleanimations[i][0];
     if(operation=="comp"){
        const [opr,colorID,barOneIdx, barTwoIdx] = bubbleanimations[i];
       const barOneStyle = arrayBars[barOneIdx].style;
       const barTwoStyle = arrayBars[barTwoIdx].style;
       const color = colorID === 1 ? "red" : "rgb(18, 183, 233)";
       setTimeout(() => {
         barOneStyle.backgroundColor = color;
         barTwoStyle.backgroundColor = color;
       },i* ms);
     }
     else{
        
        setTimeout(() => {
            const [opr,barOneIdx, newHeight1,barTwoIdx,newHeight2] = bubbleanimations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight1}px`;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.height = `${newHeight2}px`;
          }, i* ms);
   
     }
     
   }
}







   heapSort()
   {
    const ms=this.state.speed;
    const Heapanimations=HeapsortAnimation(this.state.array);
    for (let i = 0; i < Heapanimations.length; i++) {
     const arrayBars = document.getElementsByClassName('array-bar');
     const operation=Heapanimations[i][0];
     if(operation=="comp"){
        const [opr,colorID,barOneIdx, barTwoIdx] = Heapanimations[i];
       const barOneStyle = arrayBars[barOneIdx].style;
       const barTwoStyle = arrayBars[barTwoIdx].style;
       const color = colorID === 1 ? "red" : "rgb(18, 183, 233)";
       setTimeout(() => {
         barOneStyle.backgroundColor = color;
         barTwoStyle.backgroundColor = color;
       },i* ms);
     }
     else{
        
        setTimeout(() => {
            const [opr,barOneIdx, newHeight1,barTwoIdx,newHeight2] = Heapanimations[i];
            console.log("Setting",barOneIdx,newHeight1,barTwoIdx,newHeight2)
            
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight1}px`;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barTwoStyle.height = `${newHeight2}px`;
          }, i* ms);
   
     }
     
   }
}

   mergeSort(){
       
       const ms=this.state.speed;
       const animations=mergeSortAnimations(this.state.array);
       for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "red" : "rgb(18, 183, 233)";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * ms);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * ms);
        }
      }
      
    
     
   }
  async setSpeed()
  {
    let Uispeed=document.getElementById("typeinp").value ;
    
    Uispeed=10-Uispeed; 
    await this.setState({array:this.state.array,speed:Uispeed})
    
  }
   
   render()
   {
      const {array, speed,alreadyRunning}=this.state;

      return < div className="main">
       
      <div className="navHead">
         <div className="LogoTitle">
         <h1 id="pageTitle">VisualSorter</h1>
       
         </div>
          <div className="btnSet">
              <ul>
                  <li><button id="btn-Generate" className="btn" onClick={()=>this.resetArray()}>Generate New Array</button></li>
                  <li><button id="btn-Quick" className="btn" onClick={()=>this.quickSort()}>QuickSort</button></li>
                  <li><button id="btn-Merge" className="btn " onClick={()=>this.mergeSort()}>MergeSort</button></li>
                  <li><button id="btn-Heap" className="btn" onClick={()=>this.heapSort()}>HeapSort</button></li>
                  <li><button id="btn-Bubble" className="btn" onClick={()=> this.bubbleSort()}>BubbleSort</button></li>
                  <li>
                  <button className="btn">Speed</button>
                  <input id="typeinp" type="range" min="0"  max="10" defaultValue="5"
                          step="1" onChange={()=>this.setSpeed()}/>
                          
                  </li>
                 
                  
              </ul>
              
          </div>
           
     </div>
      <h4>      Step1) Click generate new array Step2) Set the speed Step3) Choose the sorting algorithm</h4>
      <div className="ArrayContainer">
          {
              array.map((value,idx)=>(
                 <div className="array-bar" style={{ backroundColor:"blue", height:`${value}px`}}></div>
              //<div className="ArrayBar" key={idx} style={{backgroundColor:"blue",height:'${value}px'}}></div>
              ))
          }
          
      </div>
      </ div>
       
       
   }
}


function Navheader()
{
    return (
     <div className="navHead">
         <div className="LogoTitle">
         <h1 id="pageTitle">VisualSorter</h1>
       
         </div>
          <div className="btnSet">
              <ul>
                  <li><button id="btn-Generate" className="btn" onClick={()=>VisualSorting.resetArray()}>Generate New Array</button></li>
                  <li><button id="btn-Quick" className="btn">QuickSort</button></li>
                  <li><button id="btn-Merge" className="btn">MergeSort</button></li>
                  <li><button id="btn-Heap" className="btn">HeapSort</button></li>
                  <li><button id="btn-Bubble" className="btn">BubbleSort</button></li>
              </ul>
          </div>
     </div>
    );
}
export default VisualSorter;