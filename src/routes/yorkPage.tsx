import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/york1.jpg'
import img2 from '../assets/imgs/dogs/york2.jpg'
import img3 from '../assets/imgs/dogs/york3.jpg'

function YorkPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Yorkshire</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Confiante</h2>
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
        <p>O Yorkshire Terrier, carinhosamente conhecido como "Yorkie", é uma raça canina que conquistou corações em todo o mundo com seu tamanho diminuto, pelagem luxuosa e personalidade audaciosa. Originário do condado de Yorkshire, na Inglaterra, esse cãozinho cativa a atenção com sua presença encantadora.

          Apesar de seu tamanho pequeno, o Yorkshire Terrier é repleto de energia e atitude. Sua pelagem longa e sedosa, frequentemente em tons de azul e castanho, cria uma aparência elegante e distintiva. Seus olhos brilhantes e expressivos revelam sua inteligência aguçada e curiosidade inata.

          Os Yorkies são frequentemente elogiados por sua personalidade vibrante e autoconfiante. Apesar de serem cães de colo, eles também possuem um lado destemido, muitas vezes enfrentando desafios com coragem. Sua natureza protetora e territorial os torna excelentes cães de guarda, alertando seus donos para qualquer sinal de intrusos.

          A devoção do Yorkshire Terrier aos seus donos é inegável. Eles são cães leais e carinhosos, formando laços profundos com suas famílias. Essa conexão próxima muitas vezes os torna sombras constantes de seus donos, ansiosos para compartilhar momentos de alegria e conforto.

          Apesar de seu temperamento vivaz, os Yorkies ainda são cães sensíveis. Eles podem ser afetados por ambientes estressantes e necessitam de socialização adequada desde tenra idade. Seu treinamento deve ser consistente, usando métodos de reforço positivo para criar um companheiro equilibrado e bem-comportado.

          Devido ao seu tamanho compacto, os Yorkshire Terriers se adaptam bem a ambientes de apartamento e não requerem tanto espaço quanto algumas outras raças. No entanto, eles ainda precisam de exercícios regulares e estimulação mental para evitar o tédio.
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

export default YorkPage