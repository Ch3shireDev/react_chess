import React, { Component } from 'react';
import './App.css';

class MovesList extends Component {
    clickHandler(e){
        this.props.onClick(e);
    }
    render() {
        console.log(this.props.history);
        const moves = this.props.history.map((positionState, moveNumber) => {
            return (
                <li key={moveNumber}>
                    <a href="#" onClick={this.clickHandler}>{positionState['endSquare']}</a>
                </li>
            );
        });

        return (
            <div className="movesList">
                <ol>{moves}</ol>
            </div>
            
    );
        
    }
}

export default MovesList;