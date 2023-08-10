import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/dach1.jpg'
import img2 from '../assets/imgs/dogs/dach2.webp'
import img3 from '../assets/imgs/dogs/dach3.png'

function DachPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Dachshund</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Perfeito</h2>
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
        <p>O Dachshund, carinhosamente conhecido como "cachorro salsicha", é uma raça canina que atrai a atenção com sua forma única e personalidade encantadora. Originário da Alemanha, esse cão de tamanho pequeno a médio é facilmente reconhecível por seu corpo alongado e pernas curtas. Com uma história que remonta a séculos atrás e uma natureza afetuosa, os Dachshunds são verdadeiramente especiais.

          A característica mais marcante dos Dachshunds é seu corpo alongado e suas pernas curtas, que se assemelham à forma de uma salsicha. Essa conformação única foi desenvolvida para permitir que eles se movessem com facilidade em tocas enquanto caçavam pequenos animais, como texugos e coelhos.

          Além de sua aparência distintiva, os Dachshunds são conhecidos por sua personalidade destemida e brincalhona. Eles são cães enérgicos e curiosos, muitas vezes ansiosos para explorar seu ambiente e participar de atividades. Sua natureza alegre e afetuosa os torna excelentes companheiros para famílias, especialmente aquelas com crianças.

          No entanto, os Dachshunds também podem exibir uma dose de teimosia, o que pode tornar o treinamento um desafio. Paciência, consistência e métodos de treinamento baseados em recompensas costumam funcionar bem com essa raça.

          Devido à sua história de caça e seu instinto de cavar, os Dachshunds muitas vezes se divertem ao ar livre, explorando e cavando. Eles têm uma energia surpreendente para sua estatura e gostam de brincadeiras interativas.

          Cuidados com a saúde são essenciais para os Dachshunds, especialmente em relação à sua coluna vertebral. Devido ao seu corpo alongado, eles podem estar mais propensos a problemas nas costas. Manter um peso saudável, evitar atividades de alto impacto e supervisionar seu comportamento de escavação pode ajudar a prevenir problemas de saúde.</p>
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

export default DachPage