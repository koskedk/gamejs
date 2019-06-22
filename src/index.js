import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Link,Switch, BrowserRouter as Router} from 'react-router-dom'

const About = () => {
    return <div>About</div>;
};

const Help = () => {
    return <div>Help</div>;
};

const Home = () => {
    const stars = 5;
    return (
        <div className="game">

            <div className="help">
                Pick 1 or more numbers that sum to the number of stars

            </div>
            <div className="body">
                <div className="left">
                    {
                        [1, 2, 3, 4, 5].map(s => <div key={s} className="star"></div>)
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

const App = () => {
    return (
        <Router>
            <div>
                <h2>Welcome</h2>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/help'}>Help</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/help'} component={Help}/>
                    <Route exact path={'/about'} component={About}/>
                </Switch>
            </div>
        </Router>);
}

ReactDOM.render(<App/>, document.getElementById('root'));