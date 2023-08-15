import '../css/main.css'
import '../css/media.css'
import '../css/Home.css'
import imgSec1 from '../assets/imgs/dog-sec1.png'
import imgSec2 from '../assets/imgs/dog-sec2.png'
import imgSec3 from '../assets/imgs/dog-sec3.png'
import imgSpitz from '../assets/imgs/spitz.png'
import imgBulldog from '../assets/imgs/bulldog.png'
import imgShihTzu from '../assets/imgs/shihtzu.png'
import imgRottweiler from '../assets/imgs/rottweiler.png'
import imgPug from '../assets/imgs/pug.png'
import imgFooter from '../assets/imgs/imgFooter.png'
import dachshundAbout from '../assets/videos/dachshund-about.mp4'
import dachVideo1 from '../assets/videos/video1.mp4'
import dachVideo2 from '../assets/videos/video2.mp4'
import iconSec1 from '../assets/icons/icon-sec1.png'
import iconL from '../assets/icons/linkedin.png'
import iconG from '../assets/icons/github.png'
import Logo from '../assets/icons/logo-dog.png'
import AOS from 'aos'

const Home = () => {
   AOS.init();
   return (
      <>
         <div className="main">
            <div className="bg"></div>
            <div className="center-full">
               <div className="circle" data-aos="fade-left" data-aos-duration="1000"></div>
               <div className="sec1-left">
                  <div className="sec1-logo" data-aos="fade-down" data-aos-duration="1000">
                     <img src={Logo} className="logo" />
                     <h2>Dog club</h2>
                  </div>
                  <h1 data-aos="fade-right" data-aos-duration="1200">Você também é apaixonado(a) por <span>cachorros?</span></h1>
                  <div className="sec1-text" data-aos="fade-right" data-aos-duration="1000">
                     <div className="sec1-p">
                        <img src={iconSec1} className='iconSec1' />
                        <div className="sec1-line"></div>
                        <p>Navegue por esse site e desfrute sobre as curiosidades de cada raça e belíssimas imagens de um animal onde 70% da população Brasileira é apaixonada!</p>
                     </div>
                  </div>
               </div>
               <div className="sec1-right" data-aos="fade-left" data-aos-duration="1200">
                  <img src={imgSec1} className="imgSec1" />
               </div>
            </div>
         </div>
         <div className="welcome">
            <div className="center-full" data-aos="fade-down" data-aos-duration="1200">
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
         <div className="main">
            <div className="center-full colunm" data-aos="fade-down" data-aos-duration="1200">
               <div className="races-title">
                  <div className="races-line-left"></div>
                  <h1>Raças</h1>
                  <div className="races-line-right"></div>
               </div>
               <div className="races-text">
                  <p>Essas são algumas das raças mais famosas do mundo</p>
               </div>
               <div className="races-container">
                  <div className="races-content">
                     <div className="races-number">1</div>
                     <img src={imgSpitz} />
                     <h2>Pomerânia <br />(Spitz Alemão)</h2>
                  </div>
                  <div className="races-content">
                     <div className="races-number">2</div>
                     <img src={imgBulldog} />
                     <h2>Bulldog Francês</h2>
                  </div>
                  <div className="races-content">
                     <div className="races-number">3</div>
                     <img src={imgShihTzu} />
                     <h2>Shih Tzu</h2>
                  </div>
                  <div className="races-content">
                     <div className="races-number">4</div>
                     <img src={imgRottweiler} />
                     <h2>Rottweiler</h2>
                  </div>
                  <div className="races-content">
                     <div className="races-number">5</div>
                     <img src={imgPug} />
                     <h2>Pug</h2>
                  </div>
               </div>
               <a className="btn-races" href="/races">Ver todas as raças</a>
            </div>
         </div>
         <div className="main">
            <div className="bg-fixed"></div>
            <div className="center-full colunm">
               <div className="sec3-text">Aqui vai alguns motivos para você adotar um cachorro :)</div>
               <div className="row">
                  <div className="sec3-left" data-aos="fade-left" data-aos-duration="1200">
                     <ul>
                        <li>Você vai dar boas risadas</li>
                        <li>Combatem a solidão</li>
                        <li>Cães nos ensinam a amar</li>
                        <li>Reduzem o estresse</li>
                        <li>Fazem você se exercitar</li>
                        <li>Você nunca vai estar sozinho</li>
                     </ul>
                  </div>
                  <img src={imgSec3} className="imgSec3" alt="" data-aos="zoom-out" data-aos-duration="1000"/>
                  <div className="sec3-right" data-aos="fade-right" data-aos-duration="1200">
                     <ul>
                        <li>Protegem sua casa</li>
                        <li>Nos tornam mais sociáveis</li>
                        <li>Cães melhoram o nosso humor</li>
                        <li>Combate a depressão</li>
                        <li>Nos ensinam a viver o presente</li>
                        <li>Eles não pedem nada em troca</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="dachshund">
            <div className="dach-sec-about">
               <div className="center-full">
                  <div className="dach-left">
                     <video autoPlay loop muted className="video-dach">
                        <source src={dachshundAbout} type="video/mp4" />
                     </video>
                  </div>
                  <div className="dach-right">
                     <h1>Dachshund</h1>
                     <h2>Mas conhecido como "<b>Salsicha</b>"</h2>
                     <p>Essa é a raça em que eu (Midas) sou apaixonado des de sempre, e como eu amo esse cãozinho não poderia deixar de fazer uma sessãozinha somente pra ele 🥰🐾.</p>
                  </div>
               </div>
            </div>
            <div className="dach-sec-photo">
               <div className="center-full">
                  <div className="dach-photos">
                     <div className="dach-row" data-aos="fade-down" data-aos-duration="1200">
                        <div className="div1"></div>
                        <div className="div2"></div>
                        <div className="div3">
                           <video autoPlay loop muted className="video-dach1">
                              <source src={dachVideo1} type="video/mp4" />
                           </video>
                        </div>
                     </div>
                     <div className="dach-row" data-aos="fade-up" data-aos-duration="1600">
                        <div className="div4">
                           <video autoPlay loop muted className="video-dach2">
                              <source src={dachVideo2} type="video/mp4" />
                           </video>
                        </div>
                        <div className="div5"></div>
                        <div className="div6"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="main">
            <div className="center-full">
               <p className="text-footer">Adotar um cachorro é uma decisão que vai muito além de simplesmente trazer um animal de estimação para casa. É uma escolha cheia de significado e repleta de vantagens tanto para você quanto para o adorável amigo de quatro patas que encontrará um lar amoroso. Através da adoção, você não apenas ganha um companheiro fiel, mas também oferece uma segunda chance a um cãozinho que já enfrentou dificuldades em sua vida. <br />
                  Ao adotar um cachorro, você se torna parte de uma linda jornada de transformação, pois oferece a ele o amor, cuidado e segurança que merece. Essa relação de carinho e afeto retribui com uma amizade leal e incondicional, capaz de preencher os nossos dias com alegria e felicidade. <br />
                  Além disso, a adoção é uma atitude ética e humanitária, ajudando a reduzir o número de animais abandonados nas ruas e em abrigos. Você estará contribuindo diretamente para a causa animal e para a construção de um mundo mais compassivo e responsável. <br />
                  Portanto, ao pensar em incluir um novo membro em sua família, considere a adoção como a opção mais nobre e gratificante. Com um cachorro adotado, você terá a oportunidade de criar memórias inesquecíveis, compartilhar alegrias diárias e descobrir o verdadeiro significado da lealdade. Abra o seu coração e dê a um cãozinho a chance de ser amado, e você receberá em troca um amor incondicional que tocará a sua vida para sempre. <br />
                  Faça a diferença na vida de um cachorro e descubra como a adoção pode mudar a sua própria vida de maneiras surpreendentes. Venha fazer parte dessa linda história de amor e companheirismo. Adote um cachorro e seja parte dessa maravilhosa jornada!</p>
               <div className="footer" data-aos="fade-up" data-aos-duration="1200">
                  <h3>Site desenvolvido por <a target='_blank' href="https://snazzy-duckanoo-47d342.netlify.app/" >Midas</a></h3>
                  <img src={imgFooter}  />
                  <a href="https://www.linkedin.com/in/richard-israel-667462246/" target='_blank'><img src={iconL} className="icon-footer" /></a>
                  <a href="https://github.com/RichardMidas" target='_blank'><img src={iconG} /></a>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home
