import { loading, LOAD_START } from './reducers';

describe('Loading reducer', () => {
  it('loads initial state', () => {
    const state = loading(undefined, {});
    expect(state).toBe(false);
  });

  it('starts load', () => {
    const state = loading(false, { type: LOAD_START });
    expect(state).toBe(true);
  });
});