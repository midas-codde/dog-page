import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/pin1.jpg'
import img2 from '../assets/imgs/dogs/pin2.jpg'
import img3 from '../assets/imgs/dogs/pin3.webp'

function PinscherPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Pinscher</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Energético</h2>
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
        <p>O Pinscher é uma raça canina pequena, porém repleta de energia, personalidade e atitude. Originário da Alemanha, esse cão destemido e alerta conquistou muitos corações com sua natureza vibrante e caráter distinto.

          Com sua pelagem curta e brilhante, o Pinscher apresenta um visual elegante e compacto. Sua estrutura corporal ágil e proporções bem definidas refletem sua história como um cão de trabalho e guarda, adaptado para se mover rapidamente e reagir prontamente a qualquer ameaça.

          O Pinscher é frequentemente caracterizado por sua personalidade ousada e atrevida. Apesar de seu tamanho pequeno, ele não hesita em expressar sua opinião e proteger seu território. Essa atitude confiante e corajosa é uma das características mais marcantes dessa raça.

          Além de sua natureza alerta, os Pinschers são conhecidos por seu vínculo próximo com suas famílias. Eles são animais de estimação leais e afetuosos, muitas vezes formando laços intensos com seus proprietários. No entanto, sua lealdade pode se traduzir em proteção excessiva ou comportamentos dominantes se não forem devidamente socializados e treinados desde cedo.

          Apesar de seu temperamento enérgico, os Pinschers também podem ser excelentes cães de apartamento, desde que suas necessidades de exercício sejam atendidas. Eles precisam de atividades físicas regulares e estimulação mental para evitar comportamentos indesejados causados pelo tédio.

          Devido à sua natureza ativa e perspicaz, os Pinschers se destacam em esportes caninos como agilidade e obediência, onde sua inteligência e disposição para aprender brilham. Eles também podem ser companheiros animados para pessoas ativas, dispostos a enfrentar desafios físicos e mentais com seus cães.
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

export default PinscherPage