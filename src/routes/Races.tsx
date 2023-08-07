import '../css/Races.css'
import akitaRed from '../assets/imgs/dogs/akitaRed.png'
import beagleRed from '../assets/imgs/dogs/beagleRed.png'
import borzoiRed from '../assets/imgs/dogs/borzoiRed.png'
import boxerRed from '../assets/imgs/dogs/boxerRed.png'
import bullRed from '../assets/imgs/dogs/bullRed.png'
import bullyRed from '../assets/imgs/dogs/bullyRed.png'
import chiRed from '../assets/imgs/dogs/chiRed.png'
import chowRed from '../assets/imgs/dogs/chowRed.png'
import corgiRed from '../assets/imgs/dogs/corgiRed.png'
import dachRed from '../assets/imgs/dogs/dachRed.png'
import dalmataRed from '../assets/imgs/dogs/dalmataRed.png'
import dobermanRed from '../assets/imgs/dogs/dobermanRed.png'
import dogoRed from '../assets/imgs/dogs/dogoRed.png'
import goldenRed from '../assets/imgs/dogs/goldenRed.png'
import huskyRed from '../assets/imgs/dogs/huskyRed.png'
import jackRed from '../assets/imgs/dogs/jackRed.png'
import labradorRed from '../assets/imgs/dogs/labradorRed.png'
import malamuteRed from '../assets/imgs/dogs/malamuteRed.png'
import pastorRed from '../assets/imgs/dogs/pastorRed.png'
import belgaRed from '../assets/imgs/dogs/belgaRed.png'
import pinRed from '../assets/imgs/dogs/pinRed.png'
import pitbullRed from '../assets/imgs/dogs/pitbullRed.png'
import poddleRed from '../assets/imgs/dogs/poddleRed.png'
import rottRed from '../assets/imgs/dogs/rottRed.png'
import shibaRed from '../assets/imgs/dogs/shibaRed.png'
import shiRed from '../assets/imgs/dogs/shiRed.png'
import terrierRed from '../assets/imgs/dogs/terrierRed.png'
import viraRed from '../assets/imgs/dogs/viraRed.png'
import whippetRed from '../assets/imgs/dogs/whippetRed.png'
import yorkRed from '../assets/imgs/dogs/yorkRed.png'

function Races() {
  return (
    <>
      <div className="races-title marginTop">
        <div className="races-line-left"></div>
        <h1>Raças</h1>
        <div className="races-line-right"></div>
      </div>
      <h2 className="races-subtitle">Clique em alguma raça e veja mais sobre ela</h2>
      <div className="main-races">
        <div className="center-full colunm">
          <div className="races-colunm">
            <div className="races-row">
              <a href="/races/akita">
                <div className="races-box">
                  <img src={akitaRed} />
                  <h2>Akita</h2>
                </div>
              </a>
              <a href="/races/american-bully">
                <div className="races-box">
                  <img src={bullyRed} />
                  <h2>American Bully</h2>
                </div>
              </a>
              <a href="/races/beagle">
                <div className="races-box">
                  <img src={beagleRed} />
                  <h2>Beagle</h2>
                </div>
              </a>
              <a href="/races/borzoi">
                <div className="races-box">
                  <img src={borzoiRed} />
                  <h2>Borzoi</h2>
                </div>
              </a>
              <a href="/races/boxer">
                <div className="races-box">
                  <img src={boxerRed} />
                  <h2>Boxer</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="races-colunm">
            <div className="races-row">
              <a href="/races/bull-terrier">
                <div className="races-box">
                  <img src={terrierRed} />
                  <h2>Bull terrier</h2>
                </div>
              </a>
              <a href="/races/bulldog">
                <div className="races-box">
                  <img src={bullRed} />
                  <h2>Buldog Francês</h2>
                </div>
              </a>
              <a href="/races/chihuahua">
                <div className="races-box">
                  <img src={chiRed} />
                  <h2>Chihuahua</h2>
                </div>
              </a>
              <a href="chow-chow">
                <div className="races-box">
                  <img src={chowRed} />
                  <h2>Chow Chow</h2>
                </div>
              </a>
              <a href="/races/corgi">
                <div className="races-box">
                  <img src={corgiRed} />
                  <h2>Corgi</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="races-colunm">
            <div className="races-row">
              <a href="/races/dachshund">
                <div className="races-box">
                  <img src={dachRed} />
                  <h2>Dachshund</h2>
                </div>
              </a>
              <a href="/races/dalmata">
                <div className="races-box">
                  <img src={dalmataRed} />
                  <h2>Dálmata</h2>
                </div>
              </a>
              <a href="/races/doberman">
                <div className="races-box">
                  <img src={dobermanRed} />
                  <h2>Doberman</h2>
                </div>
              </a>
              <a href="/races/dogo">
                <div className="races-box">
                  <img src={dogoRed} />
                  <h2>Dogo Argentino</h2>
                </div>
              </a>
              <a href="/races/golden-retriever">
                <div className="races-box">
                  <img src={goldenRed} />
                  <h2>Golden Retriever</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="races-colunm">
            <div className="races-row">
              <a href="/races/husky-siberiano">
                <div className="races-box">
                  <img src={huskyRed} />
                  <h2>Husky Siberiano</h2>
                </div>
              </a>
              <a href="/races/jack-russel">
                <div className="races-box">
                  <img src={jackRed} />
                  <h2>Jack Russel Terrier</h2>
                </div>
              </a>
              <a href="/races/labrador-retriever">
                <div className="races-box">
                  <img src={labradorRed} />
                  <h2>Labrador Retriever</h2>
                </div>
              </a>
              <a href="/races/malamute">
                <div className="races-box">
                  <img src={malamuteRed} />
                  <h2>Malamute do Alasca</h2>
                </div>
              </a>
              <a href="/races/pastor-alemao">
                <div className="races-box">
                  <img src={pastorRed} />
                  <h2>Pastor Alemão</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="races-colunm">
            <div className="races-row">
              <a href="/races/pastor-belga">
                <div className="races-box">
                  <img src={belgaRed} />
                  <h2>Pastor Belga</h2>
                </div>
              </a>
              <a href="/races/pinscher">
                <div className="races-box">
                  <img src={pinRed} />
                  <h2>Pinscher</h2>
                </div>
              </a>
              <a href="/races/pitbull">
                <div className="races-box">
                  <img src={pitbullRed} />
                  <h2>Pitbull</h2>
                </div>
              </a>
              <a href="/races/poodle">
                <div className="races-box">
                  <img src={poddleRed} />
                  <h2>Poodle</h2>
                </div>
              </a>
              <a href="/races/rottweiler">
                <div className="races-box">
                  <img src={rottRed} />
                  <h2>Rottweiler</h2>
                </div>
              </a>
            </div>
          </div>
          <div className="races-colunm">
            <div className="races-row">
              <a href="/races/shitzu">
                <div className="races-box">
                  <img src={shiRed} />
                  <h2>Shitzu</h2>
                </div>
              </a>
              <a href="/races/shiba">
                <div className="races-box">
                  <img src={shibaRed} />
                  <h2>Shiba</h2>
                </div>
              </a>
              <a href="/races/vira-lata">
                <div className="races-box">
                  <img src={viraRed} />
                  <h2>Vira-lata</h2>
                </div>
              </a>
              <a href="/races/whippet">
                <div className="races-box">
                  <img src={whippetRed} />
                  <h2>Whippet</h2>
                </div>
              </a>
              <a href="/races/yorkshire">
                <div className="races-box">
                  <img src={yorkRed} />
                  <h2>Yorkshire</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Races
