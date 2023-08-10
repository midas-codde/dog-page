import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/chow1.jpg'
import img2 from '../assets/imgs/dogs/chow2.jpg'
import img3 from '../assets/imgs/dogs/chow3.webp'

function ChowPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Chow chow</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Leal/Tranquilo</h2>
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
        <p>O Chow Chow é uma raça canina que se destaca por sua aparência majestosa e sua história intrigante. Originário da China, esse cão possui características únicas que o tornam facilmente reconhecível e cativante. Com sua pelagem densa, língua azul e personalidade independente, o Chow Chow é verdadeiramente uma raça única.

          Uma das características mais marcantes dos Chow Chows é a sua pelagem densa e profusa, que dá a eles uma aparência de leão em miniatura. Suas cores variam de creme a preto, passando por tons de vermelho e azul. Além disso, a língua azul-escura é uma característica distintiva dessa raça, que intriga e fascina.

          Além de sua aparência única, os Chow Chows são conhecidos por sua personalidade distinta. São cães independentes e muitas vezes reservados, demonstrando uma certa dignidade que é característica da raça. Eles podem ser leais e afetuosos com seus donos, mas também têm um lado mais solitário e tranquilo.

          A socialização é fundamental para os Chow Chows, pois eles podem ter uma tendência natural à desconfiança em relação a estranhos e outros animais. Um treinamento paciente e positivo desde filhote ajuda a canalizar sua natureza protetora e a construir confiança.

          Chow Chows tendem a ser bastante limpos e autossuficientes em termos de higiene. Eles não requerem banhos frequentes, mas a escovação regular de sua pelagem densa é essencial para manter a saúde da pele e do pelo.

          Em termos de saúde, os Chow Chows podem estar sujeitos a problemas como displasia de quadril, problemas oculares e problemas de respiração devido à conformação física de suas faces achatadas. Visitas regulares ao veterinário e uma dieta equilibrada são cruciais para garantir uma vida saudável para esses cães.</p>
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

export default ChowPage