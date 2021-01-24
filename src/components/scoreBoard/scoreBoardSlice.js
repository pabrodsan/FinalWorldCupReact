import { createSlice } from '@reduxjs/toolkit';
import { getRandomTeam } from '../features/utils/Utils';
import { TEAMS_COLLECIONS } from '../../constants/Constants';

export const scoreBoardSlice = createSlice({
  name: 'teams',
  initialState: {
    startedMatch: [],
    summaryMatch: []
  },
  reducers: {
    starGame: state => {
      const homeTeam = getRandomTeam(TEAMS_COLLECIONS, "home"); 
      const awayTeam = getRandomTeam(TEAMS_COLLECIONS, "away");
      state.startedMatch.push({
        homeTeamName: homeTeam.name,
        awayTeamName: awayTeam.name,
        flagCodeHomeT: homeTeam.flagCode,
        flagCodeAwayT: awayTeam.flagCode,
        scoreHomeTeam: 0,
        scoreAwayTeam: 0
      })
    },
    
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { starGame, decrement, incrementByAmount } = scoreBoardSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.scoreBoard.startedMatch;

export default scoreBoardSlice.reducer;
