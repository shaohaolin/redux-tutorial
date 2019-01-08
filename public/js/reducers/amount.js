import { ActionTypes as types } from '../constants';

var defaultState = {
  originAmount: '0.00',
  originCurrency: 'USD',
  destinationAmount: '0.00',
  destinationCurrency: 'EUR',
  conversionRate: 1.5,
  feeAmount: 0.00,
  totalCost: 0.00
};

// Redux reducer function
// dispatch() -> reducer(amountReducer) -> return state -> new redux state
function amount(state = defaultState, action){
  // if (action.type === 'CHANGE_ORIGIN_AMOUNT') {

  //   // The following way is bad practice because it directly modify the state oject, making it mutable.
  //   // The rule of redux is do not mutate the state. Any update has to immutable.
  //   // When you update the state object directly, redux lost all sort of history for the state updates.
  //   // Redux uses this history to do comparision to know if the state has changed.
  //   // state.originAmount = action.data;

  //   // Recommended way to update a state object is to make a copy of the object, and return taht new copy with changes.
  //   // This helps to keep thoes updates immutable.
  //   // Object spread sytax
  //   return {
  //     ...state,
  //     originAmount: action.data
  //   }
  // }

  // else if (action.type === 'RECEIVED_CONVERSION_RATE_SUCCESS') {
  //   return {
  //     ...state,
  //     conversionRate: action.data.xRate,
  //     destinationAmount: action.data.destAmount
  //   }
  // }

  // else if (action.type === 'RECEIVED_FEES_RATE_SUCCESS') {

  //   var newFeeAmount = action.data.feeAmount;
  //   var newTotal = parseFloat(state.originAmount, 10) + parseFloat(newFeeAmount, 10);

  //   return {
  //     ...state,
  //     feeAmount: feeAmount,
  //     totalCost: newTotal
  //   }
  // }

  // return state;

  switch (action.type) {
    case (types.CHANGE_ORIGIN_AMOUNT):
      return {
        ...state,
        originAmount: action.data
      }
    case (types.CHANGE_DEST_AMOUNT):
      return {
        ...state,
        destinationAmount: action.data
      }
    case (types.CHANGE_ORIGIN_CURRENCY):
      return {
        ...state,
        originCurrency: action.data
      }
    case (types.CHANGE_DEST_CURRENCY):
      return {
        ...state,
        destinationCurrency: action.data
      }
    case (types.RECEIVED_CONVERSION_RATE_SUCCESS):
      return {
        ...state,
        conversionRate: action.data.xRate,
        originAmount: action.data.originAmount,
        destinationAmount: action.data.destAmount
      }
    case (types.RECEIVED_FEES_SUCCESS):
      var newFeeAmount = action.data.feeAmount;
      var newTotal = parseFloat(state.originAmount, 10) + parseFloat(newFeeAmount, 10);

      return {
        ...state,
        feeAmount: newFeeAmount,
        totalCost: newTotal
      }

    default:
      return state;
  }
}

export default amount;