import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/rott1.jpg'
import img2 from '../assets/imgs/dogs/rott2.avif'
import img3 from '../assets/imgs/dogs/rott3.jpg'

function RottweilerPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Rottweiler</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Corajoso</h2>
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
        <p>O Rottweiler é uma raça canina que combina uma aparência robusta com uma lealdade inabalável. Originário da Alemanha, esse cão é frequentemente associado à força e à capacidade de proteção, mas há muito mais nessa raça do que sua imagem imponente.

          Com sua pelagem curta e distintiva, que normalmente apresenta cores de preto e castanho, o Rottweiler possui uma presença marcante. Seus olhos expressivos e orelhas alertas refletem sua natureza vigilante, características que fizeram dele um cão de guarda natural ao longo da história.

          Embora muitas vezes seja visto como um cão de guarda feroz, o Rottweiler também é conhecido por sua natureza afetuosa e leal. Eles têm uma afeição profunda por suas famílias e frequentemente formam laços fortes com os membros do lar. Sua devoção e proteção são traços intrínsecos, tornando-os cães de guarda e companheiros amorosos.

          No entanto, é importante notar que o Rottweiler requer uma socialização e treinamento adequados desde cedo. Sua força e natureza protetora exigem uma abordagem de treinamento consistente e positiva para garantir que eles se tornem cães bem-comportados e equilibrados.

          A força física do Rottweiler não deve ofuscar sua inteligência. Eles são cães inteligentes e ansiosos para agradar, tornando-os altamente treináveis em uma variedade de tarefas e comandos. Sua capacidade de aprender rapidamente os torna excelentes em esportes caninos, como obediência e agilidade.

          No entanto, assim como com qualquer raça, a educação e o treinamento são fundamentais para moldar o comportamento de um Rottweiler. Uma socialização adequada desde filhote, exposição a diferentes situações e pessoas, juntamente com treinamento positivo, ajudarão a desenvolver um cão confiante e bem-comportado.
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

export default RottweilerPage