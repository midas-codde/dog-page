import '../css/DogPage.css'
import iconHome from '../assets/icons/home.png'
import iconRaces from '../assets/icons/pawprint.png'
import img1 from '../assets/imgs/dogs/bully1.jpg'
import img2 from '../assets/imgs/dogs/bully2.jpg'
import img3 from '../assets/imgs/dogs/bully3.webp'

function AmericanPage() {
  return (
    <>
      <div className="dog-header">
        <a href="/"><img src={iconHome} /></a>
        <h1>American Bully</h1>
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
        <p>O American Bully é uma raça de cães que se originou nos Estados Unidos, resultando da mistura entre diversas raças, incluindo American Pit Bull Terrier, American Staffordshire Terrier, Bulldog Inglês e outras. Eles foram criados para serem companheiros leais e amigáveis, com uma aparência imponente e musculosa.

          A raça é conhecida por sua variedade de tamanhos, variando do chamado "Pocket" (menor) até o "XL" (maior). Seu temperamento geralmente é afetuoso, gentil e amigável, especialmente com pessoas. São cães inteligentes e fáceis de treinar quando são socializados desde filhotes e recebem educação consistente.

          Os American Bullies têm uma aparência robusta, com músculos definidos e uma cabeça larga. Sua pelagem pode ser curta e densa, existindo uma variedade de cores e padrões. Embora sejam frequentemente confundidos com os Pit Bulls, o American Bully tem uma natureza mais dócil e tranquila em comparação com a imagem às vezes negativa associada aos Pit Bulls.

          É importante notar que, como qualquer raça, o temperamento individual de um cão pode variar. A socialização precoce, o treinamento adequado e a interação positiva com pessoas e outros animais são fundamentais para garantir que um American Bully seja um membro saudável e bem-comportado da família. Além disso, é essencial que os donos sejam responsáveis, fornecendo cuidados adequados, exercícios e atenção emocional para garantir o bem-estar do cão.</p>
      </div>
      <div className="races-title">
        <div className="races-line-left"></div>
        <h1>Curiosidades</h1>
        <div className="races-line-right"></div>
      </div>
      <div className="dog-text colunm">
        <h4>1. Origem nos Estados Unidos: O American Bully foi criado nos Estados Unidos, principalmente nas últimas décadas, por meio da seleção de características específicas de várias raças, incluindo Pit Bull Terrier, American Staffordshire Terrier e Bulldog Inglês.</h4> <br />
        <h4>2. Variedade de tamanhos: Essa raça possui uma ampla variedade de tamanhos, desde os "Pocket" (pequenos) até os "XL" (grandes), o que permite aos criadores escolher o tamanho que melhor se adapta às suas preferências.</h4> <br />
        <h4>3. Temperamento amigável: Os American Bullies são frequentemente elogiados por seu temperamento amigável e gentil. Eles tendem a ser sociáveis com pessoas, incluindo crianças, e muitas vezes são considerados excelentes cães de companhia e família.</h4> <br />
        <h4>4. Variedade de cores e padrões: A raça apresenta uma ampla gama de cores de pelagem e padrões, o que contribui para sua aparência única e variada.</h4> <br />
        <h4>5. Aparência musculosa: Os American Bullies têm uma aparência musculosa e robusta, com corpos atléticos e bem definidos.</h4> <br />
        <h4>6. Predisposição à obesidade: Como muitas raças musculosas, os American Bullies podem ser suscetíveis à obesidade. O proprietário deve monitorar cuidadosamente a dieta e garantir exercícios regulares para manter um peso saudável.</h4> <br />
        <h4>7. Necessidade de socialização: A socialização adequada desde tenra idade é crucial para os American Bullies. Isso ajuda a garantir que eles se tornem cães confiantes, equilibrados e bem-comportados em várias situações e na presença de outros animais.</h4> <br />
        <h4>8. Aptidão para esportes caninos: Devido à sua inteligência e disposição para agradar, os American Bullies podem se destacar em esportes caninos, como o agility e o obedience, além de desfrutarem de atividades físicas e mentais.</h4> <br />
        <h4>9. Linha tênue entre guarda e amizade: Embora sejam amigáveis por natureza, alguns exemplares da raça ainda podem exibir instintos de proteção, tornando-os bons cães de guarda, desde que sejam adequadamente treinados e socializados.</h4> <br />
        <h4>10. Cuidados com a saúde: Como todas as raças, os American Bullies precisam de cuidados regulares de saúde, incluindo visitas ao veterinário, vacinações, cuidados dentários e higiene adequada. Também podem estar sujeitos a problemas de saúde específicos, como displasia de quadril e problemas de pele, então é importante estar atento a essas questões.</h4> <br />
      </div>
    </>
  )
}

export default AmericanPage