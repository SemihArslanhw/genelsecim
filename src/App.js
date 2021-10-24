
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rte , setRte] = useState(true);
  const [days , setDays] = useState();
  const [hours , setHours] = useState();
  const [mins , setMins] = useState();
  const [sec , setSec] = useState();
  
  const fonksiyon = () =>{
    const secimGunu = "18 June 2023";
    const secim = new Date(secimGunu);
    const currentDate = new Date();
  
    const toplamSaniye = Math.floor((secim - currentDate) / 1000);
    const days = Math.floor(toplamSaniye / 3600 / 24);
    const hours = Math.floor(toplamSaniye / 3600) % 24;
    const mins = Math.floor(toplamSaniye / 60) % 60;
    const sec = Math.floor(toplamSaniye) % 60;

    setDays(days);
    setHours(hours);
    setMins(mins);
    setSec(sec);
  }
   
  setInterval(fonksiyon,1000)

  return (
    <div className="App">
      <div className="sol">
        <div className="chp"></div>
        <div className="iyi"></div>
      </div>
      <div className="sag">
        <div className="apk"></div>
        <div className="mhp"></div>
      </div>
      <div className="orta">
        <div className="baslık">Türkiye Genel Seçimlerine Kalan Süre</div>
      <div className="bod">  <div className="gün">
          <p>Gün</p>
          <div>{days}</div>
        </div>
        <div className="saat">
          <p>Saat</p>
          <div>{hours}
          </div>
        </div>
        <div className="dakika">
          <p>Dakika</p>
          <div>{mins}
          </div>
        </div>
        <div className="saniye">
          <p>Saniye</p>
          <div>{sec}
          </div>
          </div>
        </div>
      </div>
      {!rte && <div className="kk">
        <button onClick={()=>{setRte(true)}} className="kkKapat">Hey Dostum Çekilirmisin</button>
        </div>}
     {rte && <div  className="rte" >
        <button onClick={()=>{setRte(false)}} className="rteKapat" >Hey Dostum Çekilirmisin</button>
      </div>} 
    </div>
  );
}

export default App;
