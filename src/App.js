import "./App.css";
import { Component } from 'react'
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistic from "./components/Statistic/Statistic";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends Component {
 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  calcTotalfeedbacks({good, neutral, bad} = this.state) {
    return good + neutral + bad;
  }

  calcPositivePercentage({ good } = this.state) {
    return Math.round(good / this.calcTotalfeedbacks() * 100);
  }

  onLeaveFeedback = (label) => {
    this.setState(prevState => {
      return {[label]: prevState[label] + 1}
    })
  }

  render() {
    return (
      <div className='App'>
        <Section text='Please leave your feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeavefeedback={this.onLeaveFeedback} />
        </Section>
       
        <Section text='Statistic'>
          <div>
            {
              this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0 ?
                <Notification message="No feedback given" /> :
              <Statistic good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
                  total={this.calcTotalfeedbacks()} positivePercentage={this.calcPositivePercentage()} />
            }
        </div>
      </Section>
      </div>
    )
  };
}

export default App;


