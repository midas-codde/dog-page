import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/labrador1.jpg'
import img2 from '../assets/imgs/dogs/labrador2.jpg'
import img3 from '../assets/imgs/dogs/labrador3.webp'

function LabradorPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Labrador Retriver</h1>
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
        <p>O Labrador Retriever é uma das raças de cães mais populares e queridas em todo o mundo, e com razão. Originário da Terra Nova, no Canadá, esse cão ganhou seu lugar nos corações de muitos devido à sua personalidade amigável, inteligência e versatilidade notáveis.

          Com sua aparência robusta e pelagem densa e brilhante, o Labrador Retriever possui uma presença magnética. Sua pelagem pode variar em cores, incluindo amarelo, preto e chocolate. Seus olhos expressivos e orelhas caídas acrescentam um toque de charme a essa raça.

          Uma das características mais notáveis dos Labradores é a sua natureza afetuosa e amigável. Eles são cães conhecidos por serem gentis e alegres, tornando-se companheiros ideais para famílias, crianças e pessoas de todas as idades. Sua habilidade natural de se conectar emocionalmente com os seres humanos os torna cães de terapia e de assistência excepcionais, capazes de proporcionar conforto e apoio em várias situações.

          Além de sua natureza amorosa, os Labradores também são cães muito inteligentes e ansiosos para agradar. Isso os torna altamente treináveis em uma variedade de atividades, desde obediência básica até esportes caninos mais avançados, como busca e resgate. Sua capacidade de aprender rapidamente e se adaptar a diferentes tarefas os torna cães versáteis, adequados para uma ampla gama de atividades e ambientes.

          A energia do Labrador também merece destaque. Eles são cães ativos que adoram brincar, correr e se exercitar. Isso faz com que sejam companheiros ideais para pessoas que gostam de atividades ao ar livre ou que procuram um parceiro de treino. A atenção à sua necessidade de exercício é essencial para manter um estilo de vida saudável e feliz para esses cães.
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

export default LabradorPage