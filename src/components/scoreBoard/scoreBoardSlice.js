import { createSlice } from '@reduxjs/toolkit';
import { getRandomTeam } from '../features/utils/Utils';
import { TEAMS_COLLECIONS, HOME, AWAY } from '../../constants/Constants';

export const scoreBoardSlice = createSlice({
  name: 'teams',
  initialState: {
    startedMatch: [],
    summaryMatch: []
  },
  reducers: {

    // This reducer creates a match in the array
    starGame: (state, action) => {
      const homeTeam = getRandomTeam(TEAMS_COLLECIONS, HOME); 
      const awayTeam = getRandomTeam(TEAMS_COLLECIONS, AWAY);
      state.startedMatch.push({
        id: action.payload,
        homeTeamName: homeTeam.name,
        awayTeamName: awayTeam.name,
        flagCodeHomeT: homeTeam.flagCode,
        flagCodeAwayT: awayTeam.flagCode,
        scoreHomeTeam: 0,
        scoreAwayTeam: 0,
      })
    },
    
    // This reducer updates the score of the selected match
    updateScore: (state, action) => {
      const updateMatch = state.startedMatch.map((el) => {
        if (el.id === action.payload) {
          return {
            ...el, 
            scoreHomeTeam: Math.floor(Math.random() * 10),
            scoreAwayTeam: Math.floor(Math.random() * 10)
          }
        } else {
          return el
        }
      });
      state.startedMatch = updateMatch;
    },

    // This reducer ends the selected match so that it stops appearing on the scoreboard and goes to the summary
    finishGame: (state, action) => {
      const matchSelectd = state.startedMatch.find(el => el.id === action.payload);
      const filterMatch = state.startedMatch.filter(el => el.id !== matchSelectd.id);
      state.summaryMatch.push(matchSelectd);
      state.startedMatch = filterMatch;
    }
  },
});

export const { starGame, updateScore, finishGame } = scoreBoardSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMatch = state => state.scoreBoard.startedMatch;
export const summaryMatchState = state => state.scoreBoard.summaryMatch;

export default scoreBoardSlice.reducer;
