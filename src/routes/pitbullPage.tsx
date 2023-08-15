import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/pit1.webp'
import img2 from '../assets/imgs/dogs/pit2.webp'
import img3 from '../assets/imgs/dogs/pit3.jpg'

function PitbullPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Pitbull</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Protetor</h2>
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
        <p>O Pitbull é uma raça canina que tem sido frequentemente mal compreendida e estigmatizada devido a equívocos e mitos. No entanto, essa raça é muito mais do que os estereótipos que a cercam. Originária de cruzamentos entre terriers e bulldogs no século 19, o Pitbull é conhecido por sua força, agilidade e, mais importante, por seu caráter dedicado.

          Os Pitbulls vêm em várias variações, incluindo o American Pit Bull Terrier, o Staffordshire Bull Terrier e o American Staffordshire Terrier. Sua pelagem curta e musculosa reflete sua natureza atlética, enquanto seus olhos expressivos demonstram uma inteligência viva.

          Ao contrário da crença popular, os Pitbulls podem ser cães afetuosos e leais. Eles frequentemente formam laços profundos com suas famílias, mostrando um desejo genuíno de agradar. Sua natureza carinhosa pode ser direcionada para crianças e adultos, tornando-os companheiros dedicados para aqueles dispostos a investir tempo e treinamento em sua socialização.

          No entanto, é importante lembrar que, devido à sua força e energia, os Pitbulls requerem treinamento e socialização adequados desde tenra idade. Um ambiente amoroso e consistente, juntamente com exercícios regulares e estímulos mentais, é essencial para cultivar um comportamento positivo e equilibrado.

          Os Pitbulls têm sido usados em várias funções ao longo dos anos, incluindo cães de trabalho em fazendas, cães de terapia e até mesmo cães de busca e salvamento. Sua adaptabilidade e desejo de aprender tornam-nos cães versáteis, capazes de se destacar em diversas atividades e ambientes.
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

export default PitbullPage