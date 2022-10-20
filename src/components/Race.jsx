import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestants } from '../assets/data';
import {useState, useEffect} from 'react';

function Race({ currentTime, numOfContestants, startTimer }) {
	useEffect(() => {
		// console.log(allContestants);
		// console.log(currentTime);
		console.log(numOfContestants);
		if (startTimer) {
			move();
		}
		winner(); // asynch function? setState in move() is asynchronous. (do move() then winner()?)
	}, [currentTime]);

	const [allContestants, setAllContestants] = useState(contestants);

	const winner = () => { 
		if (currentTime === 0) {
			let winner = allContestants[0];
			for (let i = 0; i < allContestants.filter((contestant, index) => index < numOfContestants).length; i++) {
				if (allContestants[i].xpos > winner.xpos) {
					winner = allContestants[i];
				}
			}
			return alert(winner); 
		}
	};

	const move = () => {
		for (let i = 0; i < allContestants.length; i++) {
			const interval = Math.floor(Math.random() * 10);
			const newXpos = allContestants[i].xpos + interval;
			allContestants[i].xpos = newXpos;
			setAllContestants([...allContestants]);
			// console.log(allContestants[i].xpos);
		}
	};

	return (
		<div style={contestantStyles.contestantList}>
			{/* https://stackoverflow.com/questions/42374873/limit-items-in-a-map-loop */}
			{allContestants
				.filter((contestant, index) => index < numOfContestants)
				.map((person, index) => (
					<Contestant key={index} name={person.name} xpos={person.xpos} />
				))}
		</div>
	);
}

export default Race;
