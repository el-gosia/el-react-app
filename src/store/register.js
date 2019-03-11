import { observable, action, decorate } from 'mobx';

export class Register {
  register = [];
  filteredRegister = [];
  filter = 'all';
  issuesCount = {
    all: 0,
    open: 0,
    closed: 0,
  };

  updateRegister(register) {
    this.register = register;
    this.filteredRegister = register;
  }

  setFilter(filter) {
    this.filter = filter;

    this.filterIssues(filter);
  }

  filterIssues(filter) {
    this.filteredRegister = this.register.map(record => ({
      ...record,
      issues: getIssuesByFilter(filter, record.issues),
    }));

    function getIssuesByFilter(filter, issues) {
      if (filter === 'open') {
        return issues.filter(issue => issue.open);
      }
      if (filter === 'closed') {
        return issues.filter(issue => !issue.open);
      }
      return issues;
    }
  }

  countIssues() {
    let all = 0;
    let open = 0;
    let closed = 0;

    this.register.forEach(
      record =>
        record.issues &&
        record.issues.forEach(issue => {
          all++;
          issue.open ? open++ : closed++;
        })
    );
    this.issuesCount = {
      all,
      open,
      closed,
    };
  }

  toggleIssue(date, issueId) {
    const record = this.register.find(record => record.date === date);
    if (!record) return;

    const issue = record.issues.find(issue => issue.id === issueId);
    issue && (issue.open = !issue.open);

    this.filterIssues(this.filter);
    this.countIssues();
  }
}

decorate(Register, {
  register: observable,
  filter: observable,
  issuesCount: observable,
  filteredRegister: observable,
  updateRegister: action,
  setFilter: action,
  filterIssues: action,
  countIssues: action,
  toggleIssue: action,
});

/*
import { observable, computed, action, decorate } from "mobx";

class Timer {
  start = Date.now();
  current = Date.now();

  get elapsedTime() {
    return this.current - this.start + "milliseconds";
  }

  tick() {
    this.current = Date.now();
  }
}
decorate(Timer, {
  start: observable,
  current: observable,
  elapsedTime: computed,
  tick: action
});
*/
