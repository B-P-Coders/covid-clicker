import { useState } from "react";
import ReactGA from 'react-ga';
import * as styles from "../styles/GameScreen.module.css";
import ClickCounter from "../components/ClickCounter";
import Virus from "../components/Virus";
import Win from "../components/Win";
import PowerUpsTab from "../components/PowerUpsTab";
import Advert from "../components/Advert";
import music from "../music.json";

ReactGA.initialize('G-LM6F4L305Y');
ReactGA.pageview(window.location.pathname + window.location.search);

let newCases;
const date = new Date();
let winTime;
let day = date.getDate()-1
let month
let da
let d
 { day>1 ? 
   (month = date.getMonth() )  :   (month = date.getMonth())  } 
   { day>1 ? 
    ( da = date.getDate()-2 )  :   ( (date.getMonth()+1)== (1 || 3||5||7||8||10||12)?   da =31 : da =30 )  } 
  
    { day>1 ? 
      ( d = date.getDate()-1 )  :   ( date.getMonth()== (1 || 3||5||7||8||10||12)?   d =30 : d =31 )  } 
    

var valuT = "2021-" + month + "-" + (d);
var valuY = "2021-" +    month    + "-" + da;
let musicPlayer = null;

console.log(valuY, valuT);

fetch(
  "https://api.covid19api.com/country/poland/status/confirmed?from=" + valuY +
  "T00:00:00Z&to=" + valuT + "T00:00:00Z",
)
  .then((res) => res.json())
  .then((res) => newCases = res[1]["Cases"] - res[0]["Cases"]  );
export default function GameScreen() {
  let [clicks, setClicks] = useState(0);
  let [Time, setTime] = useState(0);
  let [multi, setMulti] = useState(1);
  setInterval(() => setTime(performance.now()), 1000);
  return (
    <div className="screen">
      {onWin()}
      <div className={styles.main}>
        <Virus className={styles.virus} toggle={OnVirusClick} />
        <ClickCounter
          clickCount={clicks}
          clicksToWin={newCases}
          time={`Czas: ${Math.floor(Time / 1000)}s`}
        />
      </div>
      <PowerUpsTab clicks={clicks} onUpdate={onUpdate}/>
      <Advert/>
      <div className={styles.pusty}></div>
    </div>
  );

  function onWin() {
    if (newCases<=0){newCases=300}
    if (clicks >= newCases) {
      if (!winTime)
        winTime = performance.now()
      return (
        <Win score={clicks} time={Math.floor(winTime / 1000)} />
      )
    }
  }
  function OnVirusClick(e) {
    if (!e.isTrusted) {
      alert("Tak się nie bawimy");
      return;
    }
    setClicks(clicks + multi);
  }
  function onUpdate(price, pMulti)
  {
    if(pMulti === "music")
    {
      const musicId = Math.floor(Math.random() * music.length);
      if(musicPlayer !== null) musicPlayer.pause();
      musicPlayer = new Audio(music[musicId]);
      musicPlayer.play(); 
    }else
    {
      setMulti(multi + pMulti)
    }
    setClicks(clicks - price);
  }
}
