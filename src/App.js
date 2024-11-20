
import './App.css';
import AustraliaTeam from './classes/AustrailaTeam';
import CricketTeam from './classes/CricketTeam';

function App() {
  let players=new CricketTeam(3,4,4);
  players.batterNames();
  players.bowlersNames();
  players.allRounderNames();

  let ausCricPlayer=new AustraliaTeam(3,4,4);
  ausCricPlayer.batterNames();
  ausCricPlayer.bowlersNames();
  ausCricPlayer.allRounderNames();
  
  return (
    <div className="App">
      <h1>OOPS<br></br>Inheritance,Polymorphism,Composition,Encapsulation</h1>
    </div>
  );
}

export default App;
