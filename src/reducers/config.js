import { Map } from 'immutable';
import BigNumber from 'bignumber.js';

const initialState = Map({
  WETH: {
    address: '0x7Cb242e4f8EE3FE4F1f244209c05B794F192353E',
    symbol: 'WETH',
    decimals: 18
  },
  hotTokenAmount: new BigNumber(0),
  websocketConnected: false,
  web3NetworkID: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONFIGS':
      for (const key of Object.keys(action.payload)) {
        state = state.set(key, action.payload[key]);
      }
      return state;
    default:
      return state;
  }
};
