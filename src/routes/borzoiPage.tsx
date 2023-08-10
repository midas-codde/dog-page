import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/borzoi1.jpg'
import img2 from '../assets/imgs/dogs/borzoi2.webp'
import img3 from '../assets/imgs/dogs/borzoi3.webp'

function BorzoiPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>Borzoi</h1>
        <a href="/races"><img src={iconRaces} /></a>
      </div>
      <h2>Gentil</h2>
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
        <p>O Borzoi, muitas vezes referido como "galgo russo", é uma raça canina que exala elegância e majestade. Originários da Rússia, esses cães têm uma história rica e intrigante, remontando aos tempos dos czares. Com sua aparência distinta e traços de personalidade únicos, o Borzoi se destaca entre as raças de cães.

          Os Borzois são cães de porte grande e atlético, com um corpo esguio e musculoso. Sua pelagem é longa, fina e frequentemente ondulada, o que confere a eles uma aparência imponente e grácil. Uma das características mais marcantes dos Borzois são suas pernas longas, que lhes permitem cobrir grandes distâncias com passadas elegantes e fluidas.

          Embora sejam frequentemente associados à realeza russa e à caça de lobos, os Borzois também são excelentes companheiros para a vida familiar. Eles são conhecidos por sua natureza tranquila e gentil, além de serem extremamente leais aos seus donos. Sua personalidade costuma ser reservada e digna, mas eles são afetuosos com seus entes queridos.

          Outra característica notável dos Borzois é sua relação com outros cães. Devido à sua história como cães de caça em matilhas, eles geralmente se dão bem com outros cães e podem ser bastante sociais. No entanto, a interação com outros animais de estimação deve ser supervisionada, especialmente com animais menores devido ao seu instinto de caça.

          Apesar de sua aparência elegante, os Borzois não são excessivamente exigentes em termos de cuidados. Sua pelagem requer escovação regular para evitar emaranhados e manter o pelo saudável, mas eles não tendem a sujar-se facilmente.

          Com seu olhar nobre e atitude serena, o Borzoi é verdadeiramente uma raça única e notável. Seu passado intrigante, combinado com sua personalidade amigável e aparência majestosa, fazem deles uma opção fascinante para aqueles que procuram um companheiro canino que une história, beleza e lealdade.</p>
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

export default BorzoiPage