import React, { useState } from 'react'
import TableScoreBoard from '../features/tableScoreBoard/TableScoreBoard';
import Button from 'react-bootstrap/Button'
import './style.scss'
import { selectMatch, starGame } from './scoreBoardSlice';
import { useSelector, useDispatch } from 'react-redux';
import { START_GAME, MSG_TITLE, MSG_SUBTITLE } from '../../constants/Constants';
import Alert from 'react-bootstrap/Alert'

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
                <Button variant="success" onClick={() => newStartGarme()} >{START_GAME}</Button>
            </div>
            {match.length > 0 ? (
                <div className="container">
                    <TableScoreBoard
                        data={match}
                        acctions={true}
                    />
                </div>
            ): (
                <div className="container">
                    <Alert variant="success">
                        <Alert.Heading>{MSG_TITLE}</Alert.Heading>
                            <hr/>
                            <p>
                                {MSG_SUBTITLE}
                            </p>
                    </Alert>
                    
                </div>
            )
            
            }
        </div>
    )
}

export default ScoreBoard
