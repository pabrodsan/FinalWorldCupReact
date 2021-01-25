import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { updateScore, finishGame } from '../../scoreBoard/scoreBoardSlice';
import { useDispatch } from 'react-redux';
import './style.scss';
import {
    UPDATE_SCORE, 
    FINISH_MATCH,
    HOME_TEAM,
    SCORE,
    AWAY_TEAM,
    ACTIONS

} from '../../../constants/Constants';

function TableScoreBoard({data, acctions}) {
    const dispatch = useDispatch();

    const showFlag = (codeFlag) => {
        return `https://www.countryflags.io/${codeFlag}/flat/64.png`
    }

    const renderBody = data.map((el) => {
        return (
            <tr>
                <td>
                    <img src={showFlag(el.flagCodeHomeT)} alt={el.homeTeamName}/>
                    {el.homeTeamName}
                </td>
                <td>{`${el.scoreHomeTeam} - ${el.scoreAwayTeam}`}</td>
                <td>
                    {el.awayTeamName}
                    <img src={showFlag(el.flagCodeAwayT)} alt={el.awayTeamName}/>
                </td>
                {acctions && (
                    <td>
                        <div className="buttons">
                            <Button onClick={() => {dispatch(updateScore(el.id))}}>{UPDATE_SCORE}</Button>
                            <Button variant="danger" onClick={() => {dispatch(finishGame(el.id))}}>{FINISH_MATCH}</Button>
                        </div>
                    </td>
                )}
            </tr>
        )
    });
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>{HOME_TEAM}</th>
                    <th>{SCORE}</th>
                    <th>{AWAY_TEAM}</th>
                    {
                        acctions && (
                            <th>{ACTIONS}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {renderBody}
            </tbody>
        </Table>
    )
}

export default TableScoreBoard
