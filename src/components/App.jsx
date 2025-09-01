import './App.css'
import minhafoto from '../assets/tanjiro.jpeg' // Certifique-se que o caminho está correto
import { resumeData } from '../data/resumeData.js'; // Importamos os dados

function App() {
  return (
    <div className='curriculo-container'>
      <header className='curriculo-header'>
        <h1>Meu Currículo</h1>
        <img src={minhafoto} alt="Foto de Tanjiro Kamado" className="profile-pic" />
        <h2>{resumeData.profile.name}</h2>
        <p>{resumeData.profile.title}</p>
      </header>

      <main>
        {/* Usamos .map para criar uma seção para cada item nos nossos dados */}
        {resumeData.sections.map((section) => (
          <section key={section.title} className="curriculo-section">
            <h3>{section.title}</h3>
            <ul className="item-list">
              {section.items.map((item) => (
                <li key={item.title}>
                  <p className="item-title">{item.title}</p>
                  {/* Se o item tiver detalhes, criamos uma sub-lista para eles */}
                  {item.details && (
                    <ul className="details-list">
                      {item.details.map((detail, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  )
}

export default App