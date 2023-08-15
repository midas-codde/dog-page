import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/shi1.jpg'
import img2 from '../assets/imgs/dogs/shi2.jpg'
import img3 from '../assets/imgs/dogs/shi3.jpeg'

function ShitzuPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Shih-tzu</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Calmo</h2>
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
        <p>O Shih Tzu é uma raça canina que exala charme e elegância, conquistando corações com sua aparência adorável e personalidade afetuosa. Originário do Tibete, esse cãozinho é amado por sua pelagem luxuosa e caráter cativante.

          Com sua pelagem longa e sedosa, o Shih Tzu possui uma aparência distintamente graciosa. Sua expressão doce e olhos grandes refletem sua natureza amigável e encantadora, tornando-os um dos cães de colo mais procurados e adorados.

          O Shih Tzu é frequentemente elogiado por sua personalidade carinhosa e devotada. Eles são cães de companhia por excelência, prontos para serem o centro das atenções e proporcionar afeto aos seus donos. Sua natureza gentil os torna ótimos para famílias, idosos e qualquer pessoa que esteja buscando um amigo peludo constante.

          Essa raça não apenas encanta pelo seu visual, mas também pela sua personalidade. Os Shih Tzus tendem a formar laços profundos com seus proprietários, e seu desejo de estar perto deles é evidente. Eles podem ser um conforto emocional e um ouvido atento em momentos de necessidade.

          Apesar de seu tamanho pequeno, os Shih Tzus não devem ser subestimados quanto à energia. Eles adoram brincar e interagir, precisando de exercícios regulares para manter sua saúde e felicidade. Sua natureza brincalhona os torna ótimos para famílias com crianças e para qualquer pessoa que aprecie companheiros animados.

          A pelagem exuberante do Shih Tzu requer atenção constante para evitar emaranhados e manter sua beleza. Escovações regulares são essenciais para manter a pelagem em ótimas condições, e muitos proprietários optam por estilos de corte mais curtos para facilitar os cuidados.
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

export default ShitzuPage