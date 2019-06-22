import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const StarMatch=()=>{
    const stars=5;
    return(
        <div className="game">

            <div className="help">
                Pick 1 or more numbers that sum to the number of stars

            </div>
            <div className="body">
                <div className="left">
                    {
                        [1,2,3,4,5].map(s=><div key={s} className="star"></div>)
                    }
                </div>
                <div className="right">
                    <button className="number">1</button>
                    <button className="number">2</button>
                    <button className="number">3</button>
                    <button className="number">4</button>
                    <button className="number">5</button>
                    <button className="number">6</button>
                    <button className="number">7</button>
                    <button className="number">8</button>
                    <button className="number">9</button>
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
            <div className="mylogo"></div>
        </div>
    );

}
const App=()=>{
    return(
        <StarMatch/>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));