import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { updateScore, finishGame } from '../../scoreBoard/scoreBoardSlice';
import { useDispatch } from 'react-redux';
import './style.scss';

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
                            <Button onClick={() => {dispatch(updateScore(el.id))}}>Update score</Button>
                            <Button variant="danger" onClick={() => {dispatch(finishGame(el.id))}}>Finish match</Button>
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
                    <th>Home Team</th>
                    <th>Score</th>
                    <th>Away Team</th>
                    {
                        acctions && (
                            <th>Actions</th>
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
