import './style.css'
import frame from '../../assets/Frame.png';
import logo from '../../assets/Logo.png';

function Home() {
  
  return (
    <section className='principal'>

      <div className='left'>
        <div className='luz'></div>
        <div className='frame1'>
          <img src={frame} alt="" />
          <p>Crie sua conta e salve suas memórias!</p>
        </div>
        <div className='frame2'>
          <img src={logo} alt="Logo Marca" />
          <div>
            <h2>Sua cápsula do tempo</h2>
            <p>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>
          <button type='button'>CADASTRAR LEMBRANÇA</button>
        </div>
        <div className='frame3'>
          <p>Feito com 💜 no NLW da Rocketseat</p>
        </div>
      </div>

      <div className='right'>
        <div className='frame4'>
          <p>Você ainda não registrou nenhuma lembrança, comece a criar agora!</p>
        </div>
      </div>

    </section>

  )
}

export default Home;
