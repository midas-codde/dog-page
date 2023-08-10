import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/beagle1.webp'
import img2 from '../assets/imgs/dogs/beagle2.jpg'
import img3 from '../assets/imgs/dogs/beagle3.jpg'

function BeaglePage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Beagle</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Amável</h2>
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
        <p>O Beagle é uma raça canina que conquistou os corações de muitos devido à sua aparência cativante e personalidade encantadora. Originária da Inglaterra, essa raça tem uma história rica e distinta, com raízes que remontam a cães de caça medievais. Seu nome deriva do termo francês "be'geule", que significa garganta, em referência ao seu característico latido melodioso e uivante.

          Os Beagles são cães de porte médio, exibindo pelagem curta e densa, frequentemente tricolor, com tons de preto, branco e castanho. Suas orelhas longas e caídas dão-lhes um ar de curiosidade perpetua, como se estivessem sempre prontos para investigar qualquer aroma intrigante. E, falando em olfato, os Beagles são conhecidos por possuírem um dos sentidos do olfato mais aguçados do reino canino. Isso os tornou excelentes cães farejadores e parceiros de caça, originalmente treinados para rastrear presas como coelhos e lebres.

          No entanto, o Beagle é mais do que apenas um cão de caça. Sua personalidade carinhosa e amigável torna-o um companheiro maravilhoso para a vida doméstica. Esses cães têm um apreço notável por pessoas, incluindo crianças, e muitas vezes se dão bem com outros animais de estimação. Sua energia inesgotável os mantém sempre prontos para brincar, correr e participar de atividades ao ar livre, o que os torna uma ótima opção para famílias ativas.

          No entanto, é importante estar ciente da natureza independente dos Beagles. Sua inteligência muitas vezes é acompanhada por uma teimosia suave, o que pode tornar o treinamento um desafio gratificante. A abordagem certa, baseada em reforço positivo e paciência, é essencial para moldar um Beagle em um cão bem-comportado e obediente.

          Além disso, é essencial fornecer-lhes estímulos mentais e físicos adequados para evitar o tédio, que pode levar a comportamentos indesejados. Passeios diários e brincadeiras interativas são fundamentais para manter um Beagle feliz e saudável.</p>
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

export default BeaglePage