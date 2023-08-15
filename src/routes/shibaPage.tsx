import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/shiba1.webp'
import img2 from '../assets/imgs/dogs/shiba2.jpg'
import img3 from '../assets/imgs/dogs/shiba3.jpg'

function ShibaPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Shiba Inu</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Encantador</h2>
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
        <p>O Shiba Inu é uma raça canina originária do Japão que conquista corações com seu charme peculiar e personalidade única. Pequeno em tamanho, mas repleto de atitude, esse cão é um exemplo vivo de como a individualidade pode brilhar até mesmo entre nossos amigos peludos.

          Com sua pelagem espessa e cauda enrolada sobre o dorso, o Shiba Inu possui uma aparência distinta. Sua expressão alerta e olhos cativantes refletem sua natureza vigilante, dando-lhes um ar de dignidade e seriedade.

          O Shiba Inu é frequentemente elogiado por sua inteligência e independência. Eles não são cães que se submetem facilmente a comandos, preferindo tomar suas próprias decisões. Essa característica pode tornar o treinamento desafiador, exigindo paciência e métodos de reforço positivo. No entanto, essa independência também é uma das características que tornam o Shiba Inu tão fascinante.

          Apesar de sua independência, os Shiba Inus muitas vezes formam laços fortes com seus donos. Eles podem ser carinhosos e leais, mas em seus próprios termos. Sua natureza reservada e desconfiada com estranhos reflete sua herança como cães de guarda, prontos para proteger sua família com coragem.

          Essa raça também possui uma dose saudável de energia e curiosidade. Os Shiba Inus gostam de explorar e se envolver em atividades mentais e físicas. Eles são adequados para famílias ativas que podem fornecer estímulos regulares, caminhadas e brincadeiras.

          Os Shiba Inus também são conhecidos por sua limpeza e habilidades de higiene. Eles frequentemente se lambem como gatos para se manterem limpos, o que pode ser uma característica interessante e única entre os cães.
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

export default ShibaPage