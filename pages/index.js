import { NextSeo } from 'next-seo';
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <NextSeo
        title="Boking Studio Foto – Aryos Group"
        description="fotografi studio, jasa fotografi, foto studio lebih mudah dengan aplikasi kami. boking studio foto yang anda inginkan dengan lokasi yang dekat dari rumah anda, dengan harga yang terjangkau"
        canonical="https://infolapangan.com/"
        openGraph={{
          url: 'https://aryosgroup.com',
          title: 'Boking Studio Foto – Aryos Group',
          description:"fotografi studio, jasa fotografi,booking foto studio lebih mudah dengan aplikasi kami. boking studio foto yang anda inginkan dengan lokasi yang dekat dari rumah anda, dengan harga yang terjangkau",
          tags: ['boking studio online', 'boking studio foto', 'studio foto terbagus', 'studio foto kekinian','studo foto terjangkau'],
          images: [
            {
              url: 'https://aryosgroup.com/DEPAN-r-2.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpg',
            },
            { url: 'https://aryosgroup.com/STUDIO-UTAMA-KE-2.jpg' },
            { url: 'https://aryosgroup.com/SELF-STUDIO-KE-2.jpg' },
            { url: 'https://aryosgroup.com/UNDANGAN-DIGITAL-KE-2.jpg' },
            { url: 'https://aryosgroup.com/ARYOS-TENDAKE-2.jpg' },
          ],
          siteName: 'AryosGroup',
        }}
      />
      <Head>
        <meta name="google-site-verification" content="DsqtojQvQGXlFJPmasKfDt5kY3Yo2_yZ2fxtJLuW-Ac" />
      </Head>
      <div className='bg-black ' >
        {/* ======= Hero Section ======= */}
        {/* <section id="hero" className="d-flex align-items-center ">
          <div className="container text-lg-start mb-5 mt-5"   >
            <div className="row mb-5 text-center">
            
              <div className=''><a href="/">
                <img src="./DEPAN.png" className="img-fluid" alt="..." /></a>
              </div>
            </div>
          </div>
        </section> */}
        <div className=''><a href="/">
          <img src="./DEPAN-r-2.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=" d-flex justify-content-center">
          <div className="row col-6  justify-content-center">
            <div className='col-3' data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="./IG.jpg" className="img-fluid" alt="..." />
          </div>
            <div className='col-3'><a href="https://youtube.com/@aryosstudio3756">
              <img src="./YTB.jpg" className="img-fluid" alt="..." /></a>
          </div>
            <div className='col-3'><a href="https://goo.gl/maps/siC5iBXaHCNcSHvM9">
              <img src="./MAPS.jpg" className="img-fluid" alt="..." /></a>
            </div>
          </div>
          <div>
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Instagram</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div><a href="https://instagram.com/aryos_studio" style={{color: 'inherit',textDecoration: 'none'}}><img src="./IG.png" className="img-fluid" width={50} alt="..." />aryos_studio</a></div>
                    <div><a href="https://instagram.com/aryos.selfstudio" style={{ color: 'inherit', textDecoration: 'none' }}><img src="./IG.png" className="img-fluid" width={50} alt="..." />aryos.selfstudio</a></div>
                    <div><a href="https://instagram.com/aryos.tenda" style={{ color: 'inherit', textDecoration: 'none' }}><img src="./IG.png" className="img-fluid" width={50} alt="..." />aryos.tenda</a></div>
                    <div><a href="https://instagram.com/kost.kostan_aryos" style={{ color: 'inherit', textDecoration: 'none' }}><img src="./IG.png" className="img-fluid" width={50} alt="..." />kost.kostan_aryos</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className=''><a href="/weding">
          <img src="./wedding.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=''><a href="/studioutama">
          <img src="./studioutama.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=''><a href="/selfstudio">
          <img src="./selfstudio.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=''><a href="/undangandg">
          <img src="./undangan.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=''><a href="/tenda">
          <img src="./aryostenda.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=''><a href="/kost">
          <img src="./kost.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=''><a href="/">
          <img src="./website.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=''><a href="https://goo.gl/maps/siC5iBXaHCNcSHvM9">
          <img src="./alamat.jpg" className="img-fluid" alt="..." /></a>
        </div>
        <div className=''>
          <img src="./bg-bawa.jpg" className="img-fluid" alt="..." />
        </div>
        {/* <div className='container'>
        <div className='d-grid gap-2 col-md-8 col-lg-6 mx-auto text-center'>
              <a href='/weding' type='btn' className='btn-rs mt-5' style={{ textDecoration: 'none', color: 'white' }}>
                <b >WEDING & PRAWEING</b>
                <i className="fa fa-arrow-circle-right" style={{ fontSize: '22px', marginLeft: '4px' }} />
            </a>
            <a href='/selfstudio' type='btn' className='btn-rs mt-3' style={{ textDecoration: 'none', color: 'white' }}>
              <b >SELF STUIO</b>
              <i className="fa fa-arrow-circle-right" style={{ fontSize: '22px', marginLeft: '4px' }} />
            </a>
            <a href='/undangandg' type='btn' className='btn-rs mt-3' style={{ textDecoration: 'none', color: 'white' }}>
              <b >UNDANGAN DIGITAL</b>
              <i className="fa fa-arrow-circle-right" style={{ fontSize: '22px', marginLeft: '4px' }} />
            </a>
            <a href='/tenda' type='btn' className='btn-rs mt-3' style={{ textDecoration: 'none', color: 'white' }}>
              <b >ARYO'S TENDA</b>
              <i className="fa fa-arrow-circle-right" style={{ fontSize: '22px', marginLeft: '4px' }} />
            </a>
            <a href='/kost' type='btn' className='btn-rs mt-3' style={{ textDecoration: 'none', color: 'white' }}>
              <b >ARYO'S KOST</b>
              <i className="fa fa-arrow-circle-right" style={{ fontSize: '22px', marginLeft: '4px' }} />
            </a>
            <a href='/' type='btn' className='btn-rs mt-3' style={{ textDecoration: 'none', color: 'white' }}>
              <b >official web</b>
              <i className="fa fa-arrow-circle-right" style={{ fontSize: '22px', marginLeft: '4px' }} />
            </a>
          </div>
        </div> */}
        {/* <main id="main"> */}
          {/* ======= Specials Section ======= */}
          {/* End Gallery Section */}
          {/* <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <p>Lokasi ARYOS</p>
              </div>  
            </div>
            <div >
              <iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ border: 0, width: '100%', height: 350 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.869415100399!2d114.34950411416062!3d-8.315773185992981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1596d8d402c4b%3A0xa25d5099ffe514a7!2sARYO'S%20STUDIO%20Photography%20%26%20Videography!5e0!3m2!1sid!2sid!4v1676207610026!5m2!1sid!2sid" frameBorder={0} allowFullScreen />
            </div>
          </section> */}
        {/* </main> */}

      </div>

    </div>

  )
}
