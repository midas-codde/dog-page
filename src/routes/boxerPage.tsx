import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/boxer1.webp'
import img2 from '../assets/imgs/dogs/boxer2.webp'
import img3 from '../assets/imgs/dogs/boxer3.webp'

function BoxerPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Boxer</h1>
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
        <p>O Boxer é uma raça canina que combina força, energia e afeto em um pacote irresistível. Originária da Alemanha, essa raça conquistou corações em todo o mundo com sua personalidade cativante e aparência robusta. Com uma história que remonta ao século XIX, os Boxers evoluíram de cães de trabalho versáteis para companheiros amigáveis e protetores.

          Os Boxers são cães de porte médio a grande, com músculos bem desenvolvidos e uma postura atlética. Seu focinho quadrado e mandíbula forte são características distintas, dando-lhes uma aparência imponente. A pelagem curta e brilhante é frequentemente encontrada em diversas cores, incluindo marrom, tigrado e branco.

          Um dos traços mais marcantes dos Boxers é sua personalidade animada e extrovertida. Eles são conhecidos por serem cães enérgicos e brincalhões, sempre prontos para uma sessão de brincadeiras ou para acompanhar atividades ao ar livre. Sua natureza afetuosa os torna excelentes companheiros para famílias ativas, e eles frequentemente se dão bem com crianças.

          Além disso, os Boxers têm um instinto natural de proteção em relação à sua família. Eles podem ser cães de guarda eficazes, alertando seus donos sobre a presença de estranhos. No entanto, essa característica não deve ser confundida com agressão; os Boxers são conhecidos por serem amigáveis e sociáveis quando devidamente socializados desde filhotes.

          Embora sejam cães inteligentes e capazes de aprender comandos com facilidade, os Boxers também podem ser teimosos em algumas situações. O treinamento deve ser baseado em reforço positivo e paciência para alcançar os melhores resultados.

          A saúde dos Boxers é uma prioridade. Como muitas raças, eles podem estar suscetíveis a certos problemas de saúde, como displasia de quadril e problemas cardíacos. Visitas regulares ao veterinário e uma dieta saudável são fundamentais para garantir uma vida longa e feliz para esses companheiros caninos.</p>
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

export default BoxerPage