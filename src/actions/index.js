export const TOGGLE_STATUS = 'TOGGLE_STATUS';
export const UPDATE_REGISTER = 'UPDATE_REGISTER';
export const SET_FILTER = 'SET_FILTER';
export const FILTER_ISSUES = 'FILTER_ISSUES';
export const UPDATE_ISSUES = 'UPDATE_ISSUES';

export const toggleIssueStatus = (date, id) => ({
  type: TOGGLE_STATUS,
  payload: {
    date,
    id,
  },
});

export const updateRegister = register => ({
  type: UPDATE_REGISTER,
  register,
});

export const updateIssues = issues => ({
  type: UPDATE_ISSUES,
  issues,
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
});

export const filterIssues = filter => ({
  type: FILTER_ISSUES,
  filter,
});
