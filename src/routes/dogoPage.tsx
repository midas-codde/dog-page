import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/dogo1.jpg'
import img2 from '../assets/imgs/dogs/dogo2.jpg'
import img3 from '../assets/imgs/dogs/dogo3.jpg'

function DogoPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Dogo Argentino</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Alegre/Protetor</h2>
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
        <p>O Dogo Argentino é uma raça canina imponente e poderosa, originária da Argentina. Reconhecido por sua aparência robusta e pelagem branca, esse cão é conhecido por suas habilidades de caça, proteção e lealdade inabalável. Com uma história relativamente recente, o Dogo Argentino se destacou como um cão versátil e confiável, capaz de desempenhar uma variedade de papéis.

          O Dogo Argentino é notável por sua musculatura impressionante e cabeça larga. Sua pelagem é branca e curta, destacando sua expressão confiante e olhos expressivos. Sua construção física foi cuidadosamente desenvolvida para resistência, força e agilidade, características que fazem dele um cão altamente funcional em várias atividades.

          Uma das características mais proeminentes do Dogo Argentino é sua lealdade profunda e afeição pela família. Eles são conhecidos por serem extremamente devotados aos seus donos, formando laços estreitos com todos os membros da família. Sua natureza protetora e vigilante os torna cães de guarda naturais, prontos para defender seus entes queridos quando necessário.

          Embora sejam cães gentis e afetuosos com a família, o Dogo Argentino também possui uma natureza forte e decidida. Eles requerem uma liderança firme e treinamento consistente desde filhotes para garantir que sua energia seja canalizada de maneira positiva. Com a socialização apropriada, eles podem se dar bem com outros animais e pessoas.

          Devido à sua história de caça e trabalho, os Dogos Argentinos têm uma energia considerável e precisam de exercícios regulares e estímulo mental. Atividades como caminhadas, jogos e treinamento são essenciais para mantê-los saudáveis e felizes.

          Em relação à saúde, o Dogo Argentino pode estar propenso a algumas condições de saúde, como problemas de pele e surdez congênita. Portanto, cuidados veterinários regulares e uma dieta equilibrada são cruciais para garantir sua saúde e bem-estar.
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

export default DogoPage