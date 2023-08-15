import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/whipper1.jpg'
import img2 from '../assets/imgs/dogs/whippet2.webp'
import img3 from '../assets/imgs/dogs/whippet3.webp'

function WhippetPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Whippet</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Afetuoso/Tranquilo</h2>
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
        <p>O Whippet é uma raça canina que combina elegância e velocidade, conquistando admiradores com sua aparência grácil e natureza amigável. Originário da Inglaterra, esse cão é conhecido por seu corpo esguio e pela habilidade impressionante de atingir altas velocidades.

          Com sua pelagem curta e suave, o Whippet possui uma aparência refinada e aerodinâmica. Sua estrutura corporal magra e músculos bem definidos são projetados para a velocidade, enquanto seus olhos expressivos revelam sua natureza gentil e afetuosa.

          O Whippet é frequentemente comparado ao Galgo em miniatura, e essa semelhança não é por acaso. Eles são descendentes de cruzamentos entre Galgos e outras raças, resultando em um cão que possui a velocidade do Galgo em um tamanho mais compacto e gerenciável.

          Além de suas habilidades atléticas, os Whippets são conhecidos por sua personalidade amigável e descontraída. Eles são cães sociais que geralmente se dão bem com outros cães e são amigáveis com pessoas de todas as idades. Sua natureza tranquila e carinhosa os torna ótimos companheiros para famílias e solteiros.

          Os Whippets têm uma necessidade de exercício moderada. Embora eles possam atingir velocidades surpreendentes em corridas curtas, eles também são contentes em relaxar e desfrutar de momentos tranquilos dentro de casa. São cães flexíveis, que apreciam tanto a empolgação de um parque quanto o conforto de uma tarde preguiçosa no sofá.

          A pelagem curta do Whippet requer poucos cuidados, tornando-os relativamente fáceis de manter em termos de higiene. Eles são conhecidos por serem cães saudáveis e com poucos problemas de saúde hereditários.
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

export default WhippetPage