import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/akita1.jpg'
import img2 from '../assets/imgs/dogs/akita2.jpg'
import img3 from '../assets/imgs/dogs/akita3.webp'

function AkitaPage() {
   return (
      <>
         <div className="dog-header">
            <a href="/"><img src={iconHome} /></a>
            <h1>Akita</h1>
            <a href="/races"><img src={iconRaces} /></a>
         </div>
         <h2>O inteligente</h2>
         <div className="dog-line-container">
            <div className="dog-line"></div>
         </div>
         <div className="dog-photos">
            <div className="photo"><img src={img1} className="img-dog" /></div>
            <div className="photo-center"><img src={img2} className="img-dog" /></div>
            <div className="photo"><img src={img3} className="img-dog" /></div>
         </div>
         <div className="dog-line-container">
            <div className="dog-line"></div>
         </div>
         <div className="dog-text">
            <p>O Akita é uma raça canina com uma história rica e distinta, conhecida por sua beleza imponente, lealdade inabalável e natureza reservada. Originária do Japão, essa raça desempenhou papéis diversos ao longo dos anos, variando de cão de caça e guarda a símbolo de devoção e fidelidade.

               Com uma aparência majestosa e elegante, o Akita apresenta um porte físico imponente, com uma pelagem densa e cauda enrolada sobre as costas. Suas características distintivas incluem cabeça larga, orelhas pequenas e olhos escuros expressivos. Existem duas variedades de Akita: o Akita Inu, de origem japonesa, e o Akita Americano, que possui algumas diferenças em termos de tamanho e características físicas.

               Os Akitas são famosos por sua devoção aos seus donos e à família. São cães leais e protetores, muitas vezes mantendo uma postura reservada com estranhos. Sua natureza independente e digna também é um traço marcante da raça. Embora sejam amigáveis e amorosos com seus familiares, eles podem ser um pouco reservados em situações novas ou com pessoas desconhecidas.

               Historicamente, os Akitas desempenharam vários papéis. Eles foram utilizados como cães de caça de grande porte, especializados em caçar animais como ursos, veados e javalis. Mais tarde, eles se tornaram cães de guarda e protetores de propriedades, graças à sua coragem e vigilância.

               A história do Akita também inclui a notável história de Hachiko, um Akita Inu que simboliza a lealdade inabalável. Hachiko esperou por seu dono todos os dias na estação de trem, mesmo após a morte do homem. Essa história comovente é um exemplo da devoção e conexão emocional profundamente enraizada entre um Akita e seu dono.

               No entanto, é importante notar que o Akita não é uma raça para todos. Sua natureza independente e necessidade de socialização e treinamento adequados podem apresentar desafios para alguns proprietários. Um treinamento consistente, socialização desde cedo e uma abordagem de liderança positiva são essenciais para criar um Akita bem ajustado e equilibrado.

               Em resumo, o Akita é muito mais do que apenas uma raça de cães impressionante em termos de aparência. Sua história, personalidade leal e nobreza tornam-no um companheiro extraordinário para aqueles que apreciam sua natureza distinta e estão dispostos a investir tempo e esforço em sua criação e treinamento.</p>
         </div>
         <div className="races-title">
            <div className="races-line-left"></div>
            <h1>Curiosidades</h1>
            <div className="races-line-right"></div>
         </div>
         <div className="dog-text colunm">
               <h4>1. Origens Japonesas: O Akita é uma raça canina originária do Japão, onde era originalmente usado para caça de animais grandes, como ursos e veados.</h4> <br />
               <h4>2. Lealdade Lendária: A história do cão Hachiko, um Akita que esperou por seu dono falecido na estação de trem todos os dias, por anos, até sua própria morte, é uma prova notável da lealdade extrema dessa raça.</h4> <br />
               <h4>3. Duas Variedades: Existem duas variedades principais de Akita: o Akita Inu (japonês) e o Akita Americano. Embora tenham uma origem comum, as duas variedades podem apresentar diferenças sutis em tamanho e aparência.</h4> <br />
               <h4>4. Beleza e Elegância: Os Akitas são conhecidos por sua aparência majestosa e digna, com pelagem densa, cabeça larga e olhos expressivos. Sua cauda enrolada sobre as costas é uma característica distintiva.</h4> <br />
               <h4>5. Pigmentação da Pelagem: A pelagem do Akita pode apresentar uma ampla variedade de cores, incluindo branco, vermelho, tigrado, sésamo e outras combinações.</h4> <br />
               <h4>6. Instinto de Guarda: Devido à sua história como cães de guarda e protetores de propriedades, os Akitas tendem a ser vigilantes e protetores, o que os torna bons cães de guarda.</h4> <br />
               <h4>7. Independência: Os Akitas são cães independentes e podem exibir uma natureza reservada em relação a estranhos. Isso pode fazer com que eles sejam um pouco distantes em comparação com outras raças mais efusivas.</h4> <br />
               <h4>8. Desafios de Treinamento: Devido à sua natureza independente, os Akitas podem ser um pouco teimosos e podem requerer um treinamento consistente e paciente para aprender comandos e regras.</h4> <br />
               <h4>9. Socialização Importante: A socialização desde cedo é essencial para os Akitas, para ajudá-los a se tornarem cães equilibrados e seguros em diferentes situações e na presença de outros cães e pessoas.</h4> <br />
               <h4>10. Saúde e Longevidade: Embora sejam geralmente saudáveis, os Akitas podem ser propensos a algumas condições de saúde, como displasia de quadril e problemas de tireoide. A expectativa de vida média para um Akita é de cerca de 10 a 15 anos.</h4> <br />
         </div>
      </>
   )
}

export default AkitaPage