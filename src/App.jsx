
import styles from'./App.module.css'
import fotoPerfil from '../public/foto.jpg'
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
        
        <section id='s2'>
          <h2>sessão 2</h2>
        </section>

        <section id='s3'>
          <h2>sessão 3</h2>
        </section>

        <section id='s4'>
          <h2>sessão 4</h2>
        </section>

      </main>
      </>
    )
  }

  export default App