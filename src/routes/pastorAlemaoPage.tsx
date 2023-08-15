import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/pastor1.webp'
import img2 from '../assets/imgs/dogs/pastor2.webp'
import img3 from '../assets/imgs/dogs/pastor3.webp'

function PastorAlemaoPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Pastor Alemão</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Protetor</h2>
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
        <p>O Pastor Alemão é uma das raças caninas mais reconhecidas e respeitadas em todo o mundo, e sua reputação é bem merecida. Originário da Alemanha, esse cão versátil e leal conquistou corações com sua inteligência aguçada, habilidades de trabalho excepcionais e personalidade devotada.

          Com uma aparência imponente e atletismo inegável, o Pastor Alemão é frequentemente admirado por sua pelagem densa e luxuosa, que pode variar em cores, incluindo preto e castanho, sable e até mesmo preto sólido. Sua expressão atenta e olhos inteligentes refletem sua natureza vigilante e a disposição para assumir tarefas importantes.

          Uma das características mais notáveis dos Pastores Alemães é sua inteligência excepcional. Eles estão frequentemente entre as raças mais inteligentes e facilmente treináveis, demonstrando uma capacidade surpreendente de aprender comandos complexos e executar tarefas variadas. Essa inteligência, combinada com sua vontade de agradar, torna-os cães ideais para diversas atividades, desde obediência competitiva até busca e resgate.

          Além de sua destreza mental, os Pastores Alemães também são conhecidos por sua natureza protetora e leal. Eles têm um vínculo profundo com suas famílias e tendem a ser cães de guarda naturais, cuidando e defendendo aqueles que amam. No entanto, essa lealdade também exige socialização desde cedo, para garantir que se relacionem bem com estranhos e outros animais.

          Sua habilidade para se adaptar a várias tarefas e papéis é outra característica distintiva. Eles são usados em uma variedade de funções, desde cães de serviço para pessoas com deficiências até cães de busca e salvamento, cães policiais e até mesmo cães de terapia. Sua versatilidade é um testemunho da sua adaptabilidade e capacidade de se destacar em diferentes ambientes.

          No entanto, é importante notar que os Pastores Alemães também possuem níveis de energia consideráveis. Eles requerem exercício físico e mental regular para se manterem saudáveis e felizes. Ignorar suas necessidades pode levar ao tédio e comportamentos indesejados.
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

export default PastorAlemaoPage