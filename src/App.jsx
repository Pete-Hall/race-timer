import "./App.css";
import Timer from "./components/Timer";
import Race from "./components/Race";
import { useState, useEffect } from "react";
import Background from "./components/Background";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Configuration from "./components/Configuration";

function App() {

	const [currentTime, setCurrentTime] = useState(0);

	const [numOfContestants, setNumOfContestants] = useState(0);

	const [startTimer, setStartTimer] = useState(false);

	useEffect(() => {
			if(startTimer && currentTime > 0) {
        const interval = setInterval(() => {
				setCurrentTime(currentTime - 1); 
			}, 1000);
      return () => clearInterval(interval);
    }
		
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
							<Configuration
								setNumOfContestants={setNumOfContestants}
								setCurrentTime={setCurrentTime}
							/>
						}
					/>
					<Route
						path="/game"
						element={
							<Background>
								<Timer
									currentTime={currentTime}
									setStartTimer={setStartTimer}
								/>
								<Race
									currentTime={currentTime}
									numOfContestants={numOfContestants}
									startTimer={startTimer}
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
