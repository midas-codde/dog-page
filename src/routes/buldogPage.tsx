import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/bull1.webp'
import img2 from '../assets/imgs/dogs/bull2.webp'
import img3 from '../assets/imgs/dogs/bull3.jpg'

function BuldogPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Bulldog</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Fácil de lidar</h2>
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
        <p>O Bulldog é uma raça canina que personifica a combinação única de força e doçura. Originária da Inglaterra, essa raça possui uma história rica e diversificada, evoluindo de cães de combate do passado para se tornarem adoráveis companheiros modernos. Com uma aparência distinta e uma personalidade encantadora, os Bulldogs conquistaram corações em todo o mundo.

          Os Bulldogs são conhecidos por sua estrutura corporal compacta e musculosa. Seus corpos são robustos e poderosos, com cabeças largas e mandíbulas fortes. Suas expressões faciais muitas vezes exibem uma mistura de seriedade e ternura, criando um apelo irresistível.

          Uma das características mais marcantes dos Bulldogs é sua natureza calma e afetuosa. Eles são frequentemente descritos como cães de colo, desfrutando de momentos de relaxamento e carinho com seus donos. Sua disposição amigável os torna excelentes companheiros para famílias e pessoas de todas as idades.

          No entanto, essa personalidade doce também é acompanhada por uma determinação surpreendente. Os Bulldogs podem ser teimosos em certas situações, o que pode tornar o treinamento um desafio. Uma abordagem positiva e paciente é fundamental para alcançar sucesso no treinamento.

          A saúde dos Bulldogs é uma consideração importante. Devido à sua conformação física, eles podem estar propensos a problemas respiratórios e questões relacionadas à pele. Cuidados regulares, dieta adequada e visitas ao veterinário são essenciais para manter esses cães saudáveis e felizes.

          Apesar de suas raízes como cães de combate, os Bulldogs modernos são amáveis e sociáveis. Eles geralmente se dão bem com outros animais de estimação e são conhecidos por serem gentis com crianças. Sua lealdade à família e sua natureza descontraída os tornam parceiros ideais para uma variedade de situações de vida.</p>
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

export default BuldogPage