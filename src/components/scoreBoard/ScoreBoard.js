import React, { useState } from 'react'
import TableScoreBoard from '../features/tableScoreBoard/TableScoreBoard';
import Button from 'react-bootstrap/Button'
import './style.scss'
import { selectMatch, starGame } from './scoreBoardSlice';
import { useSelector, useDispatch } from 'react-redux';

function ScoreBoard() {
    
    const match = useSelector(selectMatch);
    const dispatch = useDispatch();
    const [id, setId] = useState(1);

    const newStartGarme = () => {
        dispatch(starGame(id));
        setId(id + 1);
    }

    return (
        <div>
            <div className="buttonStartGame">
                <Button variant="success" onClick={() => newStartGarme()} >Start a game </Button>
            </div>
            {match.length > 0 ? (
                <div className="container">
                    <TableScoreBoard
                        data={match}
                        acctions={true}
                    />
                </div>
            ): null}
        </div>
    )
}

export default ScoreBoard
