import { startNewGame } from '../../Game/actions'

export const UPDATE_GAME_LIST = 'UPDATE_GAME_LIST'
export const START_NEW_NETWORK_GAME = 'START_NEW_NETWORK_GAME'
export const UPDATE_MY_GAME_ID = 'UPDATE_MY_GAME_ID'
export const UPDATE_MY_COLOR = 'UPDATE_MY_COLOR'
export const CHOOSE_EXISTING_NETWORK_GAME = 'CHOOSE_EXISTING_NETWORK_GAME'


const ARENA_ADDR = 'http://localhost:4000/'

function updateGameList(gameList) {
    return {
        type: UPDATE_GAME_LIST,
        gameList,
    }
}

function updateMyGameID(id) {
    return {
        type: UPDATE_MY_GAME_ID,
        id
    }
}

function updateMyColor(color) {
    return {
        type: UPDATE_MY_COLOR,
        color
    }
}

export function fetchGames() {
    return dispatch => {
        return fetch(ARENA_ADDR + 'gamelist')
            .then(response => response.json())
            .then(json => dispatch(updateGameList(json)))
    }
}

export function startNewNetworkGame(color, username) {
    return dispatch => {
        return fetch(ARENA_ADDR + 'gamelist?create=true&color=' + color + '&username=' + username)
            .then(response => response.json())
            .then(json => {
                dispatch(updateMyGameID(json));
                dispatch(updateMyColor(color));
            })
    }
}

export function chooseExistingNetworkGame(gameID, username) {
    return dispatch => {
        return fetch(ARENA_ADDR + 'gamelist?choose=true&gameid=' + gameID + '&username=' + username)
            .then(response => response.json())
            .then(color => dispatch(startNewGame(color)))
    }
}