import Contestant from './Contestant.jsx';
import { contestantStyles } from '../styles';
import { contestants } from '../assets/data';
import {useState, useEffect} from 'react';

function Race({currentTime}) {

  useEffect(() => {
    // console.log(allContestants);
    // console.log(currentTime);
    move();
  }, [currentTime]);

  const [allContestants, setAllContestants] = useState(contestants);

  const move = () => {
    for(let i = 0; i < allContestants.length; i++) {
      const interval = Math.floor(Math.random()*10);
      const newXpos = allContestants[i].xpos + interval;
      allContestants[i].xpos = newXpos;
      setAllContestants([...allContestants]);
      // console.log(allContestants[i].xpos);
    }
  };

  return (
    <div style={contestantStyles.contestantList}>
      {allContestants.map((person) => (
        <Contestant
          key={person.id}
          name={person.name}
          xpos={person.xpos}
        />
      ))}
    </div>
  );
}

export default Race;
