import React from 'react'
// import { TEAMS_COLLECIONS } from '../../constants/Constants';
import TableScoreBoard from '../features/tableScoreBoard/TableScoreBoard';
import Button from 'react-bootstrap/Button'
import './style.scss'
// import { getRandomTeam } from '../features/utils/Utils';
import { selectCount, starGame } from './scoreBoardSlice';
import { useSelector, useDispatch } from 'react-redux';

function ScoreBoard() {
    
    const match = useSelector(selectCount);
    const dispatch = useDispatch();

    // const getHomeTeam = () => {
    //     const homeTeam = getRandomTeam(TEAMS_COLLECIONS, "home");
    //     return homeTeam;
    // }

    // const getAwayTeam = () => {
    //     const awayTeam = getRandomTeam(TEAMS_COLLECIONS, "away");
    //     return awayTeam;
    // }

    // const startGame = () => {
        
    //     // match.push({
    //     //     homeTeam: getHomeTeam(),
    //     //     awayTeam: getAwayTeam(),
    //     //     homeTeamScore: 0,
    //     //     awayTeamScore: 0
    //     // })
    //     // generate march
    // }

    return (
        <div>
            <div className="buttonStartGame">
                <Button variant="success" onClick={() => dispatch(starGame())} >Start a game </Button>{' '}
            </div>
            <div className="container">
                <TableScoreBoard
                    data={match}
                />
            </div>
        </div>
    )
}

export default ScoreBoard
