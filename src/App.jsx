
import styles from'./App.module.css'
import fotoPerfil from '/perfil.png'
import facebookIcon from '/logof.avif'
import instagramIcon from '/logoinsta.avif'
import githubIcon from '/logogit.png'
import whatsappIcon from '/logowhats.avif'
import htmlIcon from '/logoh.webp'
import jsIcon from '/logoj.png'
import cssIcon from  '/logocss.png'
import viteIcon from  '/logovite.jpg'
import reactIcon from '/logor.png'
import vercelIcon from '/logovercel.jpg'

import {useState} from 'react'

function App() {
  const defaultPhoneNumber = '55419999999'
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({... formData, [name]: value})
  }

  const handleZap = () => {
    const {name, email, message} = formData
    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome=${name}%0D%0A
    Email:${email}%0D%0A
    Mensagem:${message}%0D%0A`

    window.open(urlZap, "_blank")
  }
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
              <img  width={100} src={htmlIcon} alt="HTML" />
              <h3>HTML</h3>
              <p>HTML é a sigla para Hypertext Markup Language (Linguagem de Marcação de Hipertexto) e é a linguagem de marcação padrão usada para criar e estruturar páginas da web. Ela fornece a estrutura e a organização de um site, definindo elementos como títulos, parágrafos, imagens e links para que os navegadores possam interpretá-los corretamente. </p>
              </div>

          </div>
                  
          <div className={styles.card}>
              <img width={100} src={jsIcon} alt="JS" />
              <h3>JS</h3>
              <p>JavaScript adiciona funcionalidades como animações, validação de formulários, e carregamento de conteúdo sem recarregar a página. Ele também pode ser usado no lado do servidor para criar aplicativos de back-end com tecnologias como o Node.js. </p>
              </div>
         
        
          <div className={styles.card}>
              <img width={100} src={cssIcon} alt="CSS" />
              <h3>CSS</h3>
              <p> Ele permite separar o conteúdo de um site (HTML) da sua aparência (CSS), controlando elementos como cores, fontes, espaçamento, layout e design para criar páginas web mais agradáveis e organizadas. </p>

          </div>
        
              <div clasName={styles.card}>
              <img  width={100} src={viteIcon} alt="VITE" />
              <h3>VITE</h3>
              <p> é uma ferramenta de build e servidor de desenvolvimento para projetos frontend que se destaca pela sua velocidade e eficiência. Criado por Evan You, o mesmo do Vue.js, o Vite utiliza módulos ES nativos e é otimizado para o desenvolvimento moderno, oferecendo um ambiente de desenvolvimento rápido, com carregamento instantâneo e um processo de build para produção mais eficiente.</p>
              </div>
                     
          <div className={styles.card}>
              <img   width={100} src={reactIcon} alt="REACT" />
              <h3>REACT</h3>
              <p>é uma biblioteca JavaScript de código aberto criada pelo Facebook para construir interfaces de usuário (UIs) interativas, especialmente para aplicações web e single-page applications (SPAs). Seu principal objetivo é facilitar o desenvolvimento de UIs complexas através do uso de um modelo de programação baseado em componentes reutilizáveis, o que torna o código mais fácil de gerenciar e organizar.  </p>
              </div>

          <div className={styles.card}>
            <img  width={100} src={vercelIcon} alt="VERCEL" />
            <h3>VERCEL</h3>
            <p>é uma plataforma de nuvem que simplifica a criação, implantação e hospedagem de sites e aplicativos web modernos, oferecendo um ambiente otimizado para desenvolvedores, especialmente para aqueles que utilizam o framework Next.js, que foi criado pela própria Vercel. </p>
          </div>
         </section>

 <section className={styles.s5} id='s5'>
  <div className={styles}>
    <h2></h2>
           
          </div>

 </section>
    <section id='s4' className={styles.s4}>
    <h2>CONTATO</h2>
    <div className={styles.formData}> 
      <label htmlFor="name">Informe seu nome</label>
      <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />
      <label htmlFor="email">Informe seu email</label>
      <input type="text" id='email' name='email' value= {formData.email } onChange={handleChange} required/>
      <label htmlFor="message">Informe uma mensagem</label>
      <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
      <button onClick={handleZap}>Enviar mensagem</button>
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