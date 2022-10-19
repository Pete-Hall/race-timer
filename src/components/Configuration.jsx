import { useState } from "react";

function Configuration(props) {

  const handleParticipants = (e) => {
    props.setNumOfContestants(e.target.value);
 }

  return (
		<div>
			<form>
				<label>Number of Participants:</label>
				<input type="number" onChange={handleParticipants} />
			</form>
		</div>
	);
}

export default Configuration;
