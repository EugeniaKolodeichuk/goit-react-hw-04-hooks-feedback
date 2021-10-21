import React, { useState } from 'react';
import Statistics from './components/Statistics';
import Options from './components/Options';
import Feedback from './components/Feedback';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const onLeaveFeedback = e => {
    /* console.log(e.target.name); */
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <section>
      <Feedback title="Please leave feedback">
        <Options
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Feedback>

      {total === 0 ? (
        <Feedback title="Statistics">
          <Notification message="No feedback given" />
        </Feedback>
      ) : (
        <Feedback title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Feedback>
      )}
    </section>
  );
}
