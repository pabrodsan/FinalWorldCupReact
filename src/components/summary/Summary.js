import React from 'react'
import { summaryMatchState } from '../scoreBoard/scoreBoardSlice';
import { useSelector } from 'react-redux';
import TableScoreBoard from '../features/tableScoreBoard/TableScoreBoard';
import './style.scss';

function Summary() {
    const summary = useSelector(summaryMatchState);
    const summarySort = [...summary].sort((a,b) => {
        const totalScoreA = a.scoreHomeTeam + a.scoreAwayTeam;
        const totalScoreB = b.scoreHomeTeam + b.scoreAwayTeam;
        if (totalScoreA > totalScoreB) {
            return -1;
        }
        if (totalScoreA < totalScoreB) {
            return 1
        }
        if (totalScoreA === totalScoreB) {
            if (a.id < b.id) {
                return 1
            }
            return -1
        }
    })    
    return (
        <div>
            {summary.length > 0 && (
                <div className="container">
                    <TableScoreBoard
                        data={summarySort}
                    />
                </div>
            )}
        </div>
    )
}

export default Summary
