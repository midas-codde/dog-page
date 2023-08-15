import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/poddle1.jpg'
import img2 from '../assets/imgs/dogs/poddle2.jpg'
import img3 from '../assets/imgs/dogs/poddle3.webp'

function PoodlePage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Poodle</h1>
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
        <p>O Poodle é uma raça canina que combina elegância e inteligência em um corpo pequeno, conquistando corações em todo o mundo. Originário da França, esse cão ganhou popularidade não apenas por sua aparência distinta, mas também por sua natureza versátil e personalidade cativante.

          Com sua pelagem densa e cacheada, o Poodle apresenta uma aparência única e refinada. Disponível em três tamanhos - Padrão, Miniatura e Toy - o Poodle cativa a atenção com seus movimentos graciosos e olhos expressivos, que revelam sua inteligência aguçada.

          O Poodle é frequentemente elogiado por sua inteligência excecional. Eles estão entre as raças caninas mais inteligentes e facilmente treináveis, demonstrando uma capacidade notável de aprender comandos complexos e truques variados. Essa habilidade torna-os destaque em competições de obediência e atividades de treinamento.

          Além de sua inteligência, o Poodle também é conhecido por sua personalidade afetuosa e amigável. Eles geralmente formam laços profundos com seus proprietários, demonstrando lealdade e carinho. Sua natureza dócil os torna ótimos companheiros para famílias, crianças e idosos.

          Uma característica notável dos Poodles é sua baixa tendência a soltar pelos, o que os torna populares entre pessoas com alergias. No entanto, essa característica requer manutenção regular da pelagem para evitar emaranhados. A versatilidade do Poodle também é evidente em sua capacidade de ser estilizado de várias maneiras, como o famoso corte de leão.

          Os Poodles não são apenas cães de companhia; também têm uma herança de trabalho. Eles foram originalmente criados para buscar aves aquáticas, e essa habilidade de buscar é frequentemente mantida em sua personalidade. Além disso, sua natureza curiosa e enérgica os torna companheiros ideais para atividades ao ar livre e esportes caninos.
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

export default PoodlePage