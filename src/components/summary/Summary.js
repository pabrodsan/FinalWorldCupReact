import React from 'react'
import { summaryMatchState } from '../scoreBoard/scoreBoardSlice';
import { useSelector } from 'react-redux';
import TableScoreBoard from '../features/tableScoreBoard/TableScoreBoard';
import Alert from 'react-bootstrap/Alert'
import './style.scss';
import { MSG_TITLE_SUMMARY } from '../../constants/Constants';

function Summary() {
    const summary = useSelector(summaryMatchState);
    
    // We order from the match with the most goals to the one with the least and in the event of a tie, the most recently created match
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
        return 0;
    })    
    return (
        <div>
            {summary.length > 0 ? (
                <div className="container">
                    <TableScoreBoard
                        data={summarySort}
                    />
                </div>
            ): (
                <div className="container">
                    <Alert variant="success">
                        <Alert.Heading>{MSG_TITLE_SUMMARY}</Alert.Heading>
                    </Alert>
                    
                </div>
            )}
        </div>
    )
}

export default Summary
