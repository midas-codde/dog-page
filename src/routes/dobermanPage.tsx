import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/doberman1.jpg'
import img2 from '../assets/imgs/dogs/doberman2.jpg'
import img3 from '../assets/imgs/dogs/doberman3.webp'

function DobermanPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Doberman</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Leal/Protetor</h2>
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
        <p>O Doberman é uma raça canina conhecida por sua elegância e presença imponente. Originário da Alemanha, esse cão foi criado para ser um guardião leal e protetor, mas também é admirado por sua inteligência e lealdade. Com sua aparência forte e personalidade dedicada, os Dobermans se destacam como companheiros confiáveis e vigilantes.

          Uma das características mais marcantes dos Dobermans é sua postura altiva e musculosa. Eles têm um corpo bem proporcionado, com uma cabeça nobre e orelhas cortadas ou naturais que se erguem em alerta. Sua pelagem é curta e geralmente encontrada em tons de preto e castanho, embora outras variações também possam ocorrer.

          Além de sua aparência impressionante, os Dobermans são conhecidos por sua inteligência aguçada e habilidades de aprendizado rápido. Eles são cães trabalhadores e versáteis, frequentemente desempenhando papéis como cães de guarda, cães de serviço, cães de busca e resgate, e muito mais. Sua dedicação aos seus donos e suas famílias é uma característica notável.

          Os Dobermans têm uma natureza protetora e leal, o que os torna excelentes cães de guarda. Eles são conhecidos por sua capacidade de discernir entre ameaças reais e situações cotidianas, tornando-os parceiros confiáveis para proteger o lar e os entes queridos.

          Socialização adequada é fundamental para os Dobermans, especialmente desde filhotes. Isso ajuda a canalizar sua energia e garantir que eles se relacionem bem com pessoas e outros animais de estimação. O treinamento baseado em reforço positivo é eficaz para moldar seu comportamento e aproveitar ao máximo suas habilidades naturais.

          Em relação à saúde, os Dobermans podem estar suscetíveis a algumas condições genéticas, como problemas cardíacos e problemas de saúde nas articulações. Cuidados veterinários regulares, dieta equilibrada e exercícios apropriados são essenciais para manter sua saúde a longo prazo.

          Em resumo, o Doberman é uma raça canina que une aparência impressionante, inteligência e lealdade. Sua natureza protetora, combinada com sua capacidade de aprender rapidamente, os torna parceiros excepcionais para aqueles que buscam um cão vigilante e confiável. Seu histórico de trabalho e sua dedicação à família fazem deles uma opção valiosa para amantes de cães comprometidos.
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

export default DobermanPage