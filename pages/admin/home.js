

export default function Homeadmin() {
    return (
        <div>
            <div>
                {/* ======= Hero Section ======= */}
                <section id="events" className="events">
                    <div className="container" >
                        <div className="container position-relative text-center text-lg-start"   >
                            <section id="book-a-table">
                                <div className="container" >
                                    <div className="row text-white p-3  text-center">
                                        <div className='p-2 col-lg-4 '>
                                            <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-weding" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}>Weding</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='p-2 col-lg-4 '>
                                            <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-studio" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}>Self Studio</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='p-2 col-lg-4 '>
                                            <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-studiou" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}>Studio Utama</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='p-2 col-lg-4'>
                                            <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-ruang" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}> ruang</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='p-2 col-lg-4 '>
                                            <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-kost" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}> Kost</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='p-2 col-lg-4 '>
                                            <div className=" p-2" style={{ borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                                                <a style={{ textDecoration: 'none', color: 'white' }} href="/admin/tambah-tenda" >
                                                    <div className="section-title">
                                                        <p style={{ fontSize: '22px' }}>Tenda</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
}
