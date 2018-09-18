import { user, getUser, USER_AUTH, LOGOUT } from './reducers';

describe('User reducer', () => {
  it('initializes to null', () => {
    const state = user(undefined, {});
    expect(state).toBeNull();
  });

  it('loads a user', () => {
    const data = { name: 'user' };
    const state = user(null, { type: USER_AUTH, payload: data });
    expect(state).toEqual(data);
  });

  it('logs out a user', () => {
    const state = user({}, { type: LOGOUT });
    expect(state).toBeNull();
  });

  it('gets user from state', () => {
    const user = {};
    expect(getUser({ user })).toBe(user);
  });
});