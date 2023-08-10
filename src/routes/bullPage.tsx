import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/terrier1.webp'
import img2 from '../assets/imgs/dogs/terrier2.jpg'
import img3 from '../assets/imgs/dogs/terrier3.png'

function BullPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Bull Terrier</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Esperto</h2>
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
        <p>O Bull Terrier é uma raça canina que cativa a atenção com sua aparência única e personalidade cativante. Originária da Inglaterra, essa raça foi desenvolvida a partir de cruzamentos entre Bulldogs e Terriers, resultando em um cão com uma combinação intrigante de força e energia. Com sua cabeça distintiva em formato de ovo e uma natureza afetuosa, o Bull Terrier se destaca como um companheiro leal e carismático.

          Uma das características mais marcantes do Bull Terrier é sua cabeça em formato de ovo, que dá a eles uma aparência única e inconfundível. Seus olhos pequenos e triangulares, aliados ao focinho inclinado, criam uma expressão intensa e curiosa. O corpo é musculoso e atlético, com uma pelagem curta e brilhante, muitas vezes encontrada em cores sólidas ou tigradas.

          Em termos de personalidade, os Bull Terriers são conhecidos por serem cães corajosos, brincalhões e cheios de energia. Eles têm uma disposição alegre e gostam de se envolver em atividades, seja brincando com brinquedos, fazendo exercícios ou explorando ao ar livre. Sua natureza afetuosa e leal faz deles ótimos companheiros para famílias ativas.

          No entanto, os Bull Terriers também podem ser teimosos, o que pode representar desafios no treinamento. Uma abordagem consistente e baseada em reforço positivo é essencial para ajudá-los a aprender comandos e comportamentos desejados.

          Quando socializados adequadamente desde filhotes, os Bull Terriers podem se dar bem com crianças e outros animais de estimação. Sua lealdade à família é uma das suas características mais distintas, e eles muitas vezes se tornam membros queridos do núcleo familiar.

          Como em todas as raças, a saúde dos Bull Terriers é importante. Problemas de saúde como problemas cardíacos e problemas de pele podem ser preocupações. Cuidados veterinários regulares, dieta adequada e exercícios são cruciais para garantir uma vida saudável e feliz para esses cães carismáticos.</p>
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

export default BullPage