import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/jack1.jpg'
import img2 from '../assets/imgs/dogs/jack2.jpg'
import img3 from '../assets/imgs/dogs/jack3.jpg'

function JackPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Jack Russel Terrier</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Desajeitado</h2>
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
        <p>A Jack Russell Terrier é uma raça canina enérgica e inteligente, conhecida por sua personalidade vibrante e disposição para aventuras. Originária da Inglaterra, essa raça foi desenvolvida pelo Reverendo John Russell no século 19, com o propósito de criar um cão de caça versátil e capaz de acompanhar a caça à raposa em terrenos acidentados.

          A Jack Russell Terrier é frequentemente reconhecida por seu tamanho compacto e pelagem curta e áspera, que requer poucos cuidados. Apesar de seu tamanho pequeno, esses cães são embalados com energia e resistência. Sua agilidade e força os tornam excelentes caçadores e companheiros para atividades ao ar livre.

          Uma característica notável dessa raça é sua inteligência aguçada. Os Jack Russells são cães muito astutos e rápidos em aprender comandos e truques. No entanto, essa mesma inteligência pode levar a comportamentos teimosos ou desafiadores, especialmente se não receberem estímulo mental suficiente. Portanto, treinamento consistente e enriquecimento mental são essenciais para mantê-los focados e engajados.

          A personalidade da Jack Russell é muitas vezes descrita como ousada e destemida. Eles possuem uma autoconfiança inata e podem ser bastante independentes. Essa combinação de traços de personalidade torna-os cães valentes, prontos para enfrentar qualquer desafio. No entanto, essa ousadia também exige uma socialização adequada desde cedo, para garantir que eles se relacionem bem com outros cães e pessoas.

          Devido à sua energia e necessidade de estimulação mental, a Jack Russell Terrier é uma raça mais adequada para famílias ativas e experientes em cuidar de cães enérgicos. Eles adoram brincar, correr e participar de atividades como agilidade ou treinamento de obediência. Proprietários que podem oferecer um ambiente estimulante e interativo encontrarão um companheiro leal e dedicado na Jack Russell.
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

export default JackPage