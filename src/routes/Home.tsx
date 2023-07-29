import '../css/main.css'
import '../css/media.css'
import '../css/Home.css'
import imgSec1 from '../assets/imgs/dog-sec1.png'
import imgSec2 from '../assets/imgs/dog-sec2.png'
import iconSec1 from '../assets/icons/icon-sec1.png'
import Logo from '../assets/icons/logo-dog.png'

const Home = () => {
   return (
      <>
         <div className="main">
            <div className="center-full">
               <div className="circle"></div>
               <div className="sec1-left">
                  <div className="sec1-logo">
                     <img src={Logo} className="logo" />
                     <h2>Dog club</h2>
                  </div>
                  <h1>Você também é apaixonado(a) por <span>cachorros?</span></h1>
                  <div className="sec1-text">
                     <div className="sec1-p">
                        <img src={iconSec1} className='iconSec1' />
                        <div className="sec1-line"></div>
                        <p>Navegue por esse site e desfrute sobre as curiosidades de cada raça e belíssimas imagens de um animal onde 70% da população Brasileira é apaixonada!</p>
                     </div>
                     <div className="sec1-btn">
                        <a className="sec1-btn-left" href="#">Raças</a>
                        <a className="sec1-btn-right" href="#">Curiosidades</a>
                     </div>
                  </div>
               </div>
               <div className="sec1-right">
                  <img src={imgSec1} className="imgSec1" />
               </div>
            </div>
         </div>
         <div className="welcome">
            <div className="center-full">
               <div className="welcome-left">
                  <div className="border-left"></div>
                  <img src={imgSec2} className="imgSec2" />
               </div>
               <div className="welcome-right">
                  <div className="border-right"></div>
                   <h2>Bem vindo a <span>Dog club.</span></h2>
                   <p>Aqui é um lugar totalmente informativo e de entretenimento sobre cachorros, onde você pode tirar suas dúvidas sobre alguma raça específica ou até mesmo conhecer uma nova. Você tem um doguinho de estimação? Que tal descobrir um pouco mais sobre a raça dele, e se você não tem, adote um!</p>  
               </div>
            </div>
         </div>
      </>
   )
}

export default Home
