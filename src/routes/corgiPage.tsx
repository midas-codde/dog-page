import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/corgi1.webp'
import img2 from '../assets/imgs/dogs/corgi2.jpeg'
import img3 from '../assets/imgs/dogs/corgi3.jpg'

function CorgiPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Corgi</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Extrovertido</h2>
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
        <p>O Corgi é uma raça canina que cativa com sua aparência encantadora e personalidade enérgica. Originária do País de Gales, essa raça ganhou popularidade global graças à sua presença carismática e história rica. Com suas pernas curtas, corpo alongado e disposição amigável, os Corgis conquistaram os corações de muitos amantes de cães.

          Uma das características mais distintivas dos Corgis são suas pernas curtas, que contrastam com seus corpos alongados. Essa combinação única confere a eles um olhar adorável e quase cômico. Sua pelagem é geralmente dupla, com uma camada externa densa e uma camada interna mais macia, o que os ajuda a enfrentar condições climáticas variadas.

          Além de sua aparência peculiar, os Corgis são conhecidos por seu espírito alegre e extrovertido. Eles são cães enérgicos e inteligentes, muitas vezes ansiosos para participar de atividades e brincadeiras. Sua natureza amigável e sociável os torna ótimos companheiros para famílias ativas.

          Corgis também podem ser cães de guarda eficazes, alertando seus donos com latidos quando percebem algo incomum. No entanto, eles geralmente são amigáveis com pessoas e outros animais de estimação quando socializados desde filhotes.

          Devido à sua inteligência, os Corgis podem ser treinados com relativa facilidade. No entanto, eles também podem ser teimosos em algumas situações, o que requer uma abordagem de treinamento positiva e consistente.

          A saúde dos Corgis é uma consideração importante. Como cães com corpos alongados, eles podem estar suscetíveis a problemas de coluna, como a doença do disco intervertebral. Cuidados veterinários regulares e manutenção de um peso saudável são essenciais para garantir seu bem-estar.</p>
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

export default CorgiPage