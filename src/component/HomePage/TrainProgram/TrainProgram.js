import React from 'react';
import './TrainProgram.css';
import yoga from './../../../Image/yoga.png';
import cardio from './../../../Image/cardio.jpg';
import { useHistory } from 'react-router';

const TrainProgram = () => {
    let history=useHistory();
    const trainingHandle=()=>{
        history.push("/OurClass")
    }
    return (
      <div style={{marginBottom:'150px'}}>
         <div>
             <p className="text-highlight">TRAINING <span style={{color:'yellow'}}>PROGRAMS</span> </p>
         </div>
         <div className="row">
              <div className="col-md-6">
              <div id="yoga">
                  <div className="btn-highlight-gap">
                  <button onClick={trainingHandle} className="btn-highlight" >YOGA TRAINING SESSION</button>
                  </div>
            
              </div>
              </div>
              <div className="col-md-6">
              <div id="cardio">
              <div className="btn-highlight-gap">
                  <button onClick={trainingHandle} className="btn-highlight" >CARDIO TRAINING SESSION</button>
                  </div>
              </div>
              </div>
         </div>
      </div>
    );
};

export default TrainProgram;