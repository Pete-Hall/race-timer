import './App.css';
import Timer from './components/Timer';
import Race from './components/Race';
import { useState, useEffect } from 'react';
import Background from './components/Background';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Configuration from './components/Configuration';

function App() {
  let initialTime = 60;

  const [currentTime, setCurrentTime] = useState(initialTime);

  const [numOfContestants, setNumOfContestants] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(currentTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
		<>
			<Router>
				<Link to="/config">Config Screen</Link> |{" "}
				<Link to="/game">Game Screen</Link>
				<Routes>
					<Route
						path="/config"
						element={
							<Configuration setNumOfContestants={setNumOfContestants} />
						}
					/>
					<Route
						path="/game"
						element={
							<Background>
								<Timer currentTime={currentTime} />
								<Race
									currentTime={currentTime}
									numOfContestants={numOfContestants}
								/>
							</Background>
						}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
