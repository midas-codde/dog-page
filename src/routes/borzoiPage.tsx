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
        <h4>Origens Russas: O Borzoi, também conhecido como Galgo Russo, é uma raça de cão originária da Rússia. Eles eram originalmente criados para caçar presas como lobos e lebres nas vastas paisagens russas.</h4> <br />

        <h4>2. Elegância e Altura: Os Borzois são notáveis por sua elegância e altura. São cães de porte grande, com corpos longos e esguios, além de uma postura majestosa que reflete sua herança nobre.</h4> <br />

        <h4>3. Pelagem Luxuosa: A pelagem do Borzoi é uma das suas características mais marcantes. Eles possuem uma pelagem longa e sedosa, frequentemente em cores variadas, incluindo branco, preto, marrom e cinza. Essa pelagem exige cuidados regulares para manter seu esplendor.</h4> <br />

        <h4>4. Personalidade Reservada: Os Borzois são frequentemente descritos como cães de personalidade tranquila e reservada. Eles podem ser independentes e, por vezes, distantes com estranhos, mas são extremamente leais aos seus donos.</h4> <br />

        <h4>5. Corredores Velozes: O Borzoi é um excelente corredor e é capaz de atingir altas velocidades. Sua agilidade e capacidade de percorrer grandes distâncias faziam deles caçadores eficientes nas vastas planícies russas.</h4> <br />

        <h4>6. Caçadores Habilidosos: Originalmente criados para a caça, os Borzois são cães de rastreamento talentosos. Sua visão aguçada e senso de olfato apurado os tornavam excelentes na perseguição de presas.</h4> <br />

        <h4>7. Socialização Importante: Devido à sua natureza reservada, a socialização precoce é essencial para Borzois. Expor esses cães a diferentes pessoas, animais e ambientes desde filhotes ajuda a evitar comportamentos tímidos ou reclusos.</h4> <br />

        <h4>8. Companheiros Tranquilos: Embora tenham um passado de caça e velocidade, os Borzois muitas vezes são cães tranquilos em ambientes domésticos. Eles apreciam relaxar e podem ser considerados companheiros afetuosos e serenos.</h4> <br />

        <h4>9. Expectativa de Vida Moderada: A expectativa de vida de um Borzoi geralmente varia de 10 a 12 anos. Cuidados de saúde adequados, uma dieta equilibrada e exercícios regulares podem ajudar a mantê-los saudáveis e ativos.</h4> <br />

        <h4>10. Ligações Profundas: Embora possam ser inicialmente reservados com estranhos, os Borzois formam laços profundos e duradouros com suas famílias. Eles são conhecidos por sua lealdade e devoção aos seus donos, tornando-se companheiros fiéis ao longo da vida.</h4> <br />
      </div>
    </>
  )
}

export default BorzoiPage