import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/husky1.webp'
import img2 from '../assets/imgs/dogs/husky2.jpeg'
import img3 from '../assets/imgs/dogs/husky3.jpg'

function HuskyPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Husky Siberiano</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Gentil</h2>
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
        <p>O Husky Siberiano é uma raça canina que cativa os corações com sua aparência imponente e resistência admirável. Originária da Sibéria, Rússia, essa raça foi desenvolvida pelos povos indígenas da região para suportar as condições climáticas rigorosas e a exigente vida nômade. Com um manto espesso e olhos penetrantes, o Husky é um símbolo de força e beleza selvagem.

          Uma das características mais marcantes do Husky Siberiano é a sua pelagem densa e dupla, projetada para protegê-lo tanto do frio intenso quanto do calor extremo. Sua variedade de cores e padrões de pelagem adiciona à sua aura misteriosa e atrativa. Os olhos azuis ou heterocromáticos (um de cada cor) também são uma característica distintiva que capta a atenção de todos que os observam.

          Além de sua aparência impressionante, o Husky Siberiano é conhecido por sua personalidade independente e enérgica. São cães altamente ativos e atléticos, que adoram desafios físicos e mentais. Essa energia exuberante pode ser canalizada através de atividades como corridas, caminhadas longas e treinamento de obediência. No entanto, essa independência muitas vezes se traduz em um espírito um tanto teimoso, o que pode exigir uma abordagem de treinamento paciente e consistente.

          Outra característica intrigante do Husky é sua natureza social e amigável. Eles geralmente gostam da companhia de humanos e de outros cães, tornando-se excelentes animais de estimação para famílias ativas. Seu instinto de matilha os torna afetuosos e leais, embora possam não ser cães de guarda no sentido tradicional, devido à sua natureza amigável com estranhos.

          No entanto, é importante notar que o Husky Siberiano possui necessidades específicas que devem ser atendidas para garantir seu bem-estar. Sua energia exuberante requer atividade física regular e enriquecimento mental para evitar comportamentos indesejados devido ao tédio. Além disso, sua pelagem exige escovação regular para manter sua saúde e evitar emaranhados.
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

export default HuskyPage