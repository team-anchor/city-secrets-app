import { loading, error, LOAD_START, LOAD_END, ERROR } from './reducers';

describe('Loading reducer', () => {
  it('loads initial state', () => {
    const state = loading(undefined, {});
    expect(state).toBe(false);
  });

  it('starts load', () => {
    const state = loading(false, { type: LOAD_START });
    expect(state).toBe(true);
  });

  it('ends load', () => {
    const state = loading(true, { type: LOAD_END });
    expect(state).toBe(false);
  });
});

describe('Error reducer', () => {
  it('has correct initial state', () => {
    const state = error(undefined, {});
    expect(state).toBeNull();
  });

  it('sets an error', () => {
    const state = error(null, { type: ERROR, payload: { message: 'error' } });
    expect(state).toEqual({ message: 'error' });
  });

  it('clears an error', () => {
    const state = error({}, { type: LOAD_START });
    expect(state).toBeNull();
  });
});