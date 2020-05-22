import React from 'react';

import './board.styles.scss';

import News from '../news/news.component';
import Twitter from '../twitter/twitter.component';
import Weather from '../weather/weather.component';
import Surveys from '../surveys/surveys.component';
import Navigator from '../navigator/navigator.component';
import Logo from '../logo/logo.component';
import MiniBoard from '../mini-board/mini-board.component';
import FakeNews from '../fake-news/fake-news.component';

class Board extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            board1: "",
            board2: "hide",
            board3: "hide"
        }
        
    }

    sectionChange = (e,name) => {
        e.preventDefault();
        console.log(name);
        switch(name){
            case "page1":
                this.setState({
                    board1: "",
                    board2: "hide",
                    board3: "hide"
                });
                break;
            case "page2":
                this.setState({
                    board1:"hide",
                    board2: "",
                    board3: "hide"
                });
                break;
            case "page3":
                this.setState({
                    board1:"hide", 
                    board2: "hide",
                    board3: ""
                });
                break;
            default:
                this.setState({
                    ...this.state
                })
        }
    };

    render(){
        return(
    <div className='board'>
        <MiniBoard status={this.state.board1}>
            <Logo application={"NEWSPAPER"}/>
            <Weather />
            <Surveys />
            <span className="notification">Currently under development. Live data not available.</span>
        </MiniBoard>
        <MiniBoard status={this.state.board2}>
            <News />
        </MiniBoard>
        <MiniBoard status={this.state.board3} >
            <Twitter />
            <FakeNews />
        </MiniBoard>
        <Navigator onClickChangeSection={this.sectionChange}/>
    </div>
        )
    }
};

export default Board;