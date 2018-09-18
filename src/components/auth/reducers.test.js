import { user } from './reducers';

describe('User reducer', () => {
  it('initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBeNull();
  });
});