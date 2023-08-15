import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/vira1.jpg'
import img2 from '../assets/imgs/dogs/vira2.webp'
import img3 from '../assets/imgs/dogs/vira3.webp'

function ViraPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Vira-lata</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>O Caramelo mais amado</h2>
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
        <p>O vira-lata, ou cão sem raça definida, é uma prova viva de que a beleza e o caráter vão além da linhagem. Esses cães únicos são uma mistura de diferentes raças e origens, resultando em uma variedade surpreendente de tamanhos, cores e personalidades.

          O que os vira-latas podem faltar em pedigree, eles compensam em singularidade e caráter. Cada vira-lata é verdadeiramente único, com uma mistura única de traços e temperamento. Eles têm a incrível capacidade de surpreender e cativar com suas personalidades distintas.

          Os vira-latas frequentemente carregam consigo uma dose saudável de coragem e resistência. Muitos deles enfrentam desafios em suas vidas, mas sua determinação e vontade de superar adversidades muitas vezes brilham. Eles demonstram uma resiliência notável, o que faz com que se tornem exemplos inspiradores de como a força de vontade pode superar as circunstâncias.

          Além de sua singularidade e coragem, os vira-latas também são conhecidos por sua natureza amorosa e leal. Eles têm um desejo genuíno de agradar e formar vínculos profundos com suas famílias. Seu caráter único muitas vezes os torna cães extremamente afetuosos e dedicados.

          Apesar de não terem uma "aparência padrão", os vira-latas podem variar em tamanho, pelagem, forma das orelhas e muito mais. Essa diversidade os torna uma adição encantadora a qualquer família, onde podem encontrar um lugar especial independentemente de sua aparência externa.
        </p>
      </div>
      <div className="races-title">
        <div className="races-line-left"></div>
        <h1>Curiosidades</h1>
        <div className="races-line-right"></div>
      </div>
      <div className="dog-text colunm">
        <h4>1. História Centenária: Os Beagles têm uma história que remonta a mais de 2.000 anos. Eles eram cães de caça populares na Grécia Antiga e, ao longo dos séculos, foram aprimorados para suas habilidades de rastreamento.</h4> <br />

        <h4>2. Personalidade Alegre: Beagles são conhecidos por sua personalidade alegre e amigável. Eles geralmente possuem uma disposição otimista e adoram interagir com pessoas e outros cães.</h4> <br />

        <h4>3. Excelente Faro: O olfato dos Beagles é excepcionalmente aguçado. Eles são frequentemente usados como cães farejadores em aeroportos e outros locais para detectar itens como drogas e alimentos.</h4> <br />

        <h4>4. Tamanho Compacto: Beagles são cães de porte médio, com uma altura geralmente variando entre 33 a 40 cm na cernelha e um peso de cerca de 9 a 11 kg.</h4> <br />

        <h4>5. Manto Tricolor Típico: A pelagem tricolor é uma característica distintiva dos Beagles, composta principalmente por preto, branco e tons de castanho.</h4> <br />

        <h4>6. Adaptação a Ambientes Urbanos: Embora tenham sido criados para caçar, os Beagles podem se adaptar bem à vida urbana, desde que recebam exercícios e estímulos mentais adequados.</h4> <br />

        <h4>7. Vocalização Única: Os Beagles são conhecidos por seu latido característico, muitas vezes descrito como "baying". Isso é uma parte natural de sua história de caça, onde eles sinalizariam a localização de uma presa para os caçadores.</h4> <br />

        <h4>8. Risco de Obesidade: Beagles têm uma tendência a ganhar peso rapidamente. É importante controlar sua dieta e fornecer exercícios regulares para evitar problemas de saúde associados à obesidade.</h4> <br />

        <h4>9. Inteligência e Teimosia: Beagles são inteligentes, mas também podem ser um pouco teimosos. Isso pode tornar o treinamento um desafio, mas com métodos de treinamento positivos e consistentes, eles podem aprender comandos e truques.</h4> <br />

        <h4>10. Longevidade: A expectativa de vida média de um Beagle é geralmente de 10 a 15 anos, embora isso possa variar de acordo com a genética, cuidados de saúde e estilo de vida.</h4> <br />
      </div>
    </>
  )
}

export default ViraPage