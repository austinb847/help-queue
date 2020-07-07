import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';

describe("rootReducer", () => {
  let store = createStore(rootReducer);
  test('should return default state in no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterTicketList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

});