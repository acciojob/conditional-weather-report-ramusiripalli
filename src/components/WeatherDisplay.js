import React from 'react';

const WeatherDisplay = (props) => {
  const weather = props.weather || props.weatherData || props;
  const { temperature, conditions } = weather;
  const tempColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p>Temperature: <span style={{ color: tempColor }}>{temperature}</span></p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
