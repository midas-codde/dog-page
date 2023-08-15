import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/belga1.webp'
import img2 from '../assets/imgs/dogs/belga2.webp'
import img3 from '../assets/imgs/dogs/belga3.webp'

function PastorBelgaPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Pastor Belga</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Inteligente</h2>
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
        <p>O Pastor Belga é uma raça canina reconhecida por sua inteligência aguçada, habilidades de trabalho impressionantes e natureza protetora. Originária da Bélgica, essa raça tem uma história rica e variada, sendo apreciada por suas capacidades de pastoreio, guarda e desempenho em várias atividades.

          Com uma aparência elegante e atlética, o Pastor Belga possui uma pelagem densa e variada que pode incluir cores como preto, malhado e fulvo. Seus olhos expressivos e orelhas alertas refletem sua disposição vigilante, fazendo dele um cão naturalmente atento ao ambiente ao seu redor.

          Uma das características mais distintivas do Pastor Belga é sua inteligência excepcional. Eles são altamente treináveis e se destacam em aprender comandos complexos e tarefas desafiadoras. Sua capacidade de entender e responder a comandos rapidamente os torna cães valiosos em uma variedade de funções, incluindo obediência, trabalho de serviço, busca e salvamento, entre outros.

          Além de sua inteligência, o Pastor Belga é conhecido por sua lealdade e natureza protetora. Eles tendem a formar vínculos profundos com suas famílias e são conhecidos por defender seus entes queridos com vigor. Sua natureza vigilante e instintos de guarda os tornam excelentes cães de guarda e cães de trabalho em várias áreas, incluindo a aplicação da lei.

          Essa raça também é conhecida por sua energia e necessidade de atividade física e mental. Pastores Belgas são cães ativos que prosperam com exercícios regulares e desafios intelectuais. Ignorar suas necessidades de estimulação pode levar ao tédio e a comportamentos indesejados.

          Existem quatro variedades de Pastor Belga: Malinois, Tervuren, Groenendael e Laekenois. Cada variedade tem suas próprias características distintivas, mas todas compartilham a mesma base de inteligência e dedicação à tarefa.
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

export default PastorBelgaPage