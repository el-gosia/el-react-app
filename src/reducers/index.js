import { combineReducers } from 'redux';
import { initialState } from './initial-state';
import {
  TOGGLE_STATUS,
  UPDATE_REGISTER,
  SET_FILTER,
  UPDATE_ISSUES,
  FILTER_ISSUES,
} from '../actions';

export function register(state = initialState.register, action) {
  if (action.type === TOGGLE_STATUS) {
    return {
      all: state.all.map(record => updateRecord(record)),
      filtered: state.filtered.map(record => updateRecord(record)),
    };

    function updateRecord(record) {
      if (record.date !== action.payload.date) return record;
      return {
        ...record,
        issues: record.issues.map(issue =>
          issue.id === action.payload.id
            ? { ...issue, open: !issue.open }
            : issue
        ),
      };
    }
  }

  if (action.type === UPDATE_REGISTER) {
    return { all: action.register, filtered: action.register };
  }

  if (action.type === FILTER_ISSUES) {
    const filtered = state.all.map(record => ({
      ...record,
      issues: getIssuesByFilter(record.issues, action.filter),
    }));
    return { ...state, filtered };
  }

  return state;
}

export function issues(state = initialState.issues, action) {
  if (action.type === UPDATE_ISSUES) {
    return { ...state, all: action.issues };
  }

  return state;
}

export function filter(state = initialState.filter, action) {
  if (action.type === SET_FILTER) {
    return action.filter;
  }

  return state;
}

export const rootReducer = combineReducers({
  register,
  filter,
  issues,
});

function getIssuesByFilter(issues, filter) {
  if (filter === 'OPEN') {
    return issues.filter(issue => issue.open);
  }
  if (filter === 'CLOSED') {
    return issues.filter(issue => !issue.open);
  }
  if (filter === 'ALL') {
    return issues;
  }
}
