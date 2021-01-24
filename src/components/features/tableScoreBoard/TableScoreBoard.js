import React from 'react';
import Table from 'react-bootstrap/Table';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//     decrement,
//     increment,
//     incrementByAmount,
//     incrementAsync,
//     selectCount,
//   } from './counterSlice';
import './style.scss'

export function TableScoreBoard({data}) {
    console.log(data);
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
                </tr>
            </thead>
            <tbody>
                {renderBody}
            </tbody>
        </Table>
    )
}

export default TableScoreBoard
