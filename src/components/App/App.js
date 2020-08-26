import React, { Component } from 'react';
import Statistics from '../Statistic/Statistic.js';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions.js';
import Section from '../Section/Section.js';
import Notification from '../Notification/Notification.js';
import './App.module.css';

export default class App extends Component {
  static defaultProps = {};
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // onGood = () => {
  //   this.setState(prevState => {
  //     return prevState.good + 1;
  //   });
  // };
  onClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  // this.setState(prevState => {
  //   return {
  //     [type]: prevState.[type] + 1,
  //   };
  // });

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countpositiveFeedbackPercentega = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    let funk;
    if (this.countTotalFeedback() > 0) {
      funk = (
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countpositiveFeedbackPercentega()}
        />
      );
    } else {
      funk = <Notification message="No feedback given" />;
    }
    return (
      <div className="feedbackForm">
        <Section title="Please leave feedback">
          <FeedbackOptions onClick={this.onClick} />
        </Section>
        <Section title="Statictic">{funk}</Section>
      </div>
    );
  }
}
