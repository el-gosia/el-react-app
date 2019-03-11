import React, { Component } from 'react';

import { Window } from './components/Window';
import { register } from './mock/issues';

import './App.scss';
import { compose } from 'recompose';
import { inject, observer } from 'mobx-react';

export class AppInner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { registerStore } = this.props;
    try {
      const response = await fetch('http://localhost:9000/register');
      const fetchedRegister = await response.json();

      registerStore.updateRegister(fetchedRegister);
      registerStore.countIssues();
    } catch (err) {
      console.log(err);
      registerStore.updateRegister(register);
      registerStore.countIssues();
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading } = this.state;

    return (
      <main className="app background">
        <Window isLoading={isLoading} />
      </main>
    );
  }
}

export const App = compose(
  inject('registerStore'),
  observer
)(AppInner);
