import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArenaPanelComponent from '../components/arenaPanel'
import { fetchGames } from '../actions'

class ArenaPanelContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        setInterval(() => this.props.dispatch(fetchGames()), 5000);
    }

    render() {
        return (
            <ArenaPanelComponent gameList={this.props.arena.gameList} onClick={this.props.onClick} myGameID={this.props.myGameID} myColor={this.props.myColor} myCallAccepted={this.props.myCallAccepted}/>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    arena: state.arena
  }
}

const ArenaPanel = connect(mapStateToProps)(ArenaPanelContainer)

export default ArenaPanel;