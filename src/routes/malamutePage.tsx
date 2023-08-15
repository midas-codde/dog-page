import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/labrador1.jpg'
import img2 from '../assets/imgs/dogs/labrador2.jpg'
import img3 from '../assets/imgs/dogs/labrador3.webp'

function MalamutePage() {
   return (
      <>
         <div className="dog-header">
            <a href="/"><img src={iconHome} /></a>
            <h1>Malamute do alasca</h1>
            <a href="/races"><img src={iconRaces} /></a>
         </div>
         <h2>Brincalhão</h2>
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
            <p>O Malamute do Alasca, uma raça canina imponente e poderosa, evoca a majestade dos territórios selvagens do norte. Originária das regiões árticas, essa raça é reconhecida por sua aparência impressionante e sua herança como cão de trabalho resistente.

               Com sua pelagem densa e espessa, frequentemente em tons de cinza e branco, o Malamute do Alasca é uma visão notável. Seus olhos amendoados e expressivos parecem refletir as vastas paisagens geladas de sua terra natal. No entanto, sua beleza exterior é apenas uma parte da história.

               Essa raça foi desenvolvida pelos povos indígenas do Alasca para resistir às duras condições do Ártico, sendo tradicionalmente usada como cão de tração para transportar cargas pesadas por longas distâncias. A força e tenacidade do Malamute do Alasca são inegáveis, e essas características são refletidas em sua personalidade e comportamento.

               O Malamute é conhecido por sua natureza amigável e afetuosa, especialmente com sua família. Apesar de seu tamanho impressionante, eles geralmente têm uma personalidade dócil e tranquila. No entanto, essa tranquilidade não deve ser confundida com preguiça. Esses cães ainda mantêm uma quantidade considerável de energia e adoram atividades que desafiam seus instintos naturais, como corridas, caminhadas e jogos interativos.

               Uma das peculiaridades do Malamute é sua inclinação à independência. Eles possuem um toque de teimosia e podem ser desafiadores para treinar, requerendo uma mão firme e paciente no treinamento. Uma abordagem consistente e recompensas positivas é geralmente a melhor maneira de conquistar sua cooperação.

               Devido à sua herança como cães de trabalho, o Malamute do Alasca precisa de exercícios regulares e atividades que estimulem sua mente. A falta de atividade pode levar ao tédio, o que pode resultar em comportamentos indesejados. Além disso, a pelagem densa exige escovação frequente para manter sua saúde e beleza.
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

export default MalamutePage