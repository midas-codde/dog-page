import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/golden1.webp'
import img2 from '../assets/imgs/dogs/golden2.jpg'
import img3 from '../assets/imgs/dogs/golden3.png'

function GoldenPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Golden Retriver</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Amigável</h2>
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
        <p>O Golden Retriever é uma das raças de cães mais populares e queridas em todo o mundo. Reconhecido por sua natureza gentil, inteligência e aparência deslumbrante, esse cão tem conquistado corações por gerações. Originário da Grã-Bretanha, o Golden Retriever foi desenvolvido no século 19 como um cão de caça e recuperação, sendo hábil em buscar aves aquáticas, como patos, em terrenos aquosos.

          Uma das características mais marcantes dos Golden Retrievers é seu pelagem exuberante e dourada, que lhes rendeu o nome "Golden". Seu pelo denso e impermeável não apenas os protege da água fria, mas também lhes confere uma aparência majestosa. No entanto, a beleza exterior é apenas um aspecto dessa raça.

          O Golden Retriever é amplamente conhecido por sua personalidade amigável e afetuosa. São cães extremamente leais e carinhosos, estabelecendo laços fortes com suas famílias. São igualmente alegres e energéticos, adorando brincar e se exercitar, o que os torna companheiros ideais para famílias ativas. Além disso, a inteligência desses cães é notável, tornando-os altamente treináveis em várias tarefas e comandos.

          Devido à sua natureza gentil, o Golden Retriever também é frequentemente escolhido como cão de terapia e de assistência. Sua capacidade de se conectar emocionalmente com as pessoas e de trazer conforto é algo que tem sido amplamente utilizado em ambientes terapêuticos, como hospitais e lares de idosos.

          No entanto, assim como todas as raças, o Golden Retriever também possui necessidades específicas que devem ser atendidas. Eles requerem exercícios regulares para manter sua saúde física e mental, bem como atenção ao seu pelo, que pode emaranhar se não for escovado regularmente. Além disso, devido à sua propensão genética a algumas doenças, é importante que os proprietários se atentem à saúde de seus cães e realizem consultas veterinárias regulares.
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

export default GoldenPage