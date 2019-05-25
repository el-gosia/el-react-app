import { register } from '../mock/issues';

export const initialState = {
  register: {
    all: register,
    filtered: register,
    count: {
      all: 0,
      open: 0,
      closed: 0,
    },
  },
  filter: 'ALL',
  issues: { all: {}, open: {}, closed: {} },
};
