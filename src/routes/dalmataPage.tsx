import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/dalmata1.webp'
import img2 from '../assets/imgs/dogs/dalmata2.webp'
import img3 from '../assets/imgs/dogs/dalmata3.jpg'

function DalmataPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Dalmata</h1>
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
        <p>O Dálmata é uma raça canina que se destaca por sua pelagem distintiva de manchas pretas ou marrons sobre um fundo branco. Com sua aparência única e uma história rica, essa raça ganhou popularidade global e se tornou uma figura icônica em muitos contextos, incluindo a cultura popular. Com sua elegância atlética e personalidade animada, os Dálmatas são verdadeiramente especiais.

          Uma das características mais notáveis dos Dálmatas é a sua pelagem manchada, que é única entre as raças caninas. As manchas são distribuídas de forma irregular sobre um fundo branco, criando um padrão que é reconhecível instantaneamente. Sua aparência vibrante e distinta contribuiu para sua fama duradoura.

          Além da aparência, os Dálmatas são conhecidos por sua energia inesgotável e disposição enérgica. Eles são cães atléticos e ágeis, muitas vezes exibindo uma alegria contagiante ao se envolverem em atividades físicas. Seja em corridas, caminhadas ou jogos, os Dálmatas desfrutam de exercícios regulares e estímulos mentais.

          Essa raça também é lembrada por sua associação com os bombeiros e carruagens puxadas por cavalos, que se popularizou em parte devido ao filme "101 Dálmatas". No entanto, é importante notar que, embora sejam cães leais e protetores, eles também podem ser independentes e teimosos, o que requer uma abordagem de treinamento positiva e paciente.

          Os Dálmatas têm uma disposição amigável e social, geralmente se dando bem com pessoas e outros animais de estimação quando devidamente socializados desde filhotes. Sua natureza protetora também pode torná-los bons cães de guarda, alertando os proprietários sobre a presença de estranhos.

          Em termos de cuidados, os Dálmatas requerem exercícios regulares para evitar o tédio e manter-se saudáveis. Eles têm uma pelagem curta que requer escovação regular para manter a saúde da pele e do pelo.</p>
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

export default DalmataPage