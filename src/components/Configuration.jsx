import { useState } from "react";

function Configuration(props) {

  const handleParticipants = (e) => {
    props.setNumOfContestants(e.target.value);
 }

  const handleTimerLength = (e) => {
    props.setCurrentTime(e.target.value);
  }

  return (
		<div>
			<form>
				<label>Number of Participants:</label>
				<input type="number" onChange={handleParticipants} />
				<label>Length of Timer:</label>
				<input type="number" onChange={handleTimerLength} />
			</form>
		</div>
	);
}

export default Configuration;
