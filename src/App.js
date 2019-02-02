import React, { Component } from 'react';

import { Window } from './components/Window';

import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      register: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:9000/register');
    const register = await response.json();
    this.setState({ register, isLoading: false });
  }

  render() {
    const { isLoading, register } = this.state;

    return (
      <div className="app background">
        <Window isLoading={isLoading} register={register} />
      </div>
    );
  }
}
