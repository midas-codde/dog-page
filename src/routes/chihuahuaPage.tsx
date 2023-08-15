import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/chi1.png'
import img2 from '../assets/imgs/dogs/chi2.webp'
import img3 from '../assets/imgs/dogs/chii3.jpg'

function ChihuahuaPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Chihuahua</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Vivaz/Agitado</h2>
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
        <p>O Chihuahua é uma raça canina que prova que grandes corações podem vir em pequenos pacotes. Originária do México, essa raça minúscula tem uma história fascinante e uma presença que se destaca, mesmo entre cães maiores. Com sua aparência distinta e personalidade audaciosa, os Chihuahuas conquistaram uma legião de admiradores ao redor do mundo.

          Os Chihuahuas são cães pequenos, muitas vezes pesando menos de 2 kg e medindo cerca de 15 a 23 cm na altura dos ombros. Apesar de seu tamanho diminuto, sua personalidade é grande. Eles são conhecidos por suas cabeças arredondadas e olhos expressivos, que parecem transmitir uma mistura de curiosidade e autoconfiança.

          Com uma disposição que às vezes desafia seu tamanho, os Chihuahuas muitas vezes se veem como "grandes cães em corpos pequenos". Eles são animados, alertas e geralmente exalam uma atitude destemida. Apesar de sua natureza ousada, eles podem ser muito apegados aos seus donos, buscando proximidade e carinho.

          Chihuahuas têm personalidades variadas, com alguns sendo extrovertidos e sociáveis, enquanto outros podem ser mais reservados. Eles muitas vezes formam laços intensos com uma única pessoa, embora possam se dar bem com famílias inteiras quando socializados desde cedo.

          Devido ao seu tamanho, os Chihuahuas não precisam de muito espaço para exercícios, mas ainda desfrutam de atividades físicas regulares e estímulos mentais. Eles podem ser cães de colo perfeitos, mas também apreciam explorar o mundo ao seu redor durante passeios curtos.

          Além disso, a saúde dos Chihuahuas requer atenção especial. Devido ao seu tamanho delicado, eles podem estar sujeitos a problemas dentários, fraturas e problemas cardíacos. Portanto, cuidados veterinários regulares e uma dieta equilibrada são essenciais para mantê-los saudáveis e felizes.</p>
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

export default ChihuahuaPage