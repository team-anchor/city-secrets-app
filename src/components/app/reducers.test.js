import { loading } from './reducers';

describe('Loading reducer', () => {
  it('loads initial state', () => {
    const state = loading(undefined, {});
    expect(state).toBe(false);
  });
});