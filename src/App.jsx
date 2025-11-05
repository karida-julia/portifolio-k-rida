
import styles from'./App.module.css'
import fotoPerfil from '../public/perfil.png'
import facebookIcon from '../public/logof.avif'
import instagramIcon from '../public/logoinsta.avif'
import githubIcon from '../public/logogit.png'
import whatsappIcon from '../public/logowhats.avif'
import htmlIcon from 
import jsIcon from 
import cssIcon from 
import viteIcon from 
import 
import  reactIcon from
import

function App() {

//javascript

  return(
    <>
      <nav className={styles.menu}>
      <a href="#s1">Home</a>
      <a href="#s2">Cards</a>
      <a href="#s3">Video</a>
      <a href="#s4">Contato</a>
      </nav>
      <main>
        <section  className={styles.s1}
        id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src= {fotoPerfil} alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}> Kárida Júlia</h2>
            <p className={styles.paragraph}> Estudante, 17 anos, terminando o ensino médio no terceiro ano, cursando curso tecnico de TEI.</p>
          </div>
        </section>
        
        <section className={styles.s2} id="s2">
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
              <div clasName={styles.card}>
              <img src="" alt="HTML" />
              <h3>HTML</h3>
              <p>HTML é a sigla para Hypertext Markup Language (Linguagem de Marcação de Hipertexto) e é a linguagem de marcação padrão usada para criar e estruturar páginas da web. Ela fornece a estrutura e a organização de um site, definindo elementos como títulos, parágrafos, imagens e links para que os navegadores possam interpretá-los corretamente. </p>
              </div>

          </div>
        

          
          <div className={styles.card}>
              <img src="" alt="JS" />
              <h3>JS</h3>
              <p>JavaScript adiciona funcionalidades como animações, validação de formulários, e carregamento de conteúdo sem recarregar a página. Ele também pode ser usado no lado do servidor para criar aplicativos de back-end com tecnologias como o Node.js. </p>
              </div>
         
        
          <div className={styles.card}>
              <img width={100} src="" alt="CSS" />
              <h3>CSS</h3>
              <p> Ele permite separar o conteúdo de um site (HTML) da sua aparência (CSS), controlando elementos como cores, fontes, espaçamento, layout e design para criar páginas web mais agradáveis e organizadas. </p>

          </div>
        

          
              <div clasName={styles.card}>
              <img src="" alt="VITE" />
              <h3>VITE</h3>
              <p> é uma ferramenta de build e servidor de desenvolvimento para projetos frontend que se destaca pela sua velocidade e eficiência. Criado por Evan You, o mesmo do Vue.js, o Vite utiliza módulos ES nativos e é otimizado para o desenvolvimento moderno, oferecendo um ambiente de desenvolvimento rápido, com carregamento instantâneo e um processo de build para produção mais eficiente.</p>
              </div>
            

          
          <div className={styles.card}>
              <img src="" alt="REACT" />
              <h3>REACT</h3>
              <p>é uma biblioteca JavaScript de código aberto criada pelo Facebook para construir interfaces de usuário (UIs) interativas, especialmente para aplicações web e single-page applications (SPAs). Seu principal objetivo é facilitar o desenvolvimento de UIs complexas através do uso de um modelo de programação baseado em componentes reutilizáveis, o que torna o código mais fácil de gerenciar e organizar.  </p>
              </div>

          <div className={styles.card}>
            <img src="" alt="VERCEL" />
            <h3>VERCEL</h3>
            <p>é uma plataforma de nuvem que simplifica a criação, implantação e hospedagem de sites e aplicativos web modernos, oferecendo um ambiente otimizado para desenvolvedores, especialmente para aqueles que utilizam o framework Next.js, que foi criado pela própria Vercel. </p>
          </div>
         </section>


      </main>
      <footer className={styles.rodape}>
        <a href="https://www.facebook.com"  target='_blank' rel='noopener noreferrer'>  <img width={70} src={facebookIcon} alt="Facebook" /></a>
        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={instagramIcon} alt="Instagram" /></a>
        <a href="https://www.github.com" target='_blank' rel='noopener noreferrer'> <img  width={70} src= {githubIcon} alt="Linkedin" /></a>
        <a href="https://www.whatsapp.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={whatsappIcon} alt="WhatsApp" /></a>
      </footer>
      </>
    )
  }

  export default App