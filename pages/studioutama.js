
import useSWR from 'swr'
import { useState } from 'react'
import moment from "moment";
import Kost from '../components/home/studio/album'


export default function Home() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [tglPesan, setTglPesan] = useState('');
    const [jadwalPesan, setJadwalPesan] = useState([]);
    const [paketpesan, setPaketpesan] = useState([]);
    const [isCheck, setIsCheck] = useState(true);
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_studio', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }
    let studio = data['message']

    // let pesanArr = data['message']
    // let ruangan = pesanArr['ruangan']
    // console.log(pesanArr)
    var currentdate = new Date();
    var dateDate = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear()

    let nextDay = moment(dateDate, "DD/MM/YYYY").add(1, 'days').format('YYYY-MM-DD')

    let jamTersedia = ['08.00-09.00', '09.00-10.00', '11.00-12.00', '13.00-14.00', '15.00-16.00', '17.00-18.00', '19.00-20.00', '21.00-22.00', '22.00-23.00']


    const setChange = (e, jadwal) => {
        setIsCheck(e.target.checked)
        if (e.target.checked === true) {
            setJadwalPesan(arr => [...arr, jadwal]);
        } else {
            let index = jadwalPesan.indexOf(jadwal)
            setJadwalPesan(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
        }
        console.log(jadwalPesan)

    }
    const setPaket = (e, paket) => {
        setIsCheck(e.target.checked)
        if (e.target.checked === true) {
            setPaketpesan(arr => [...arr, paket]);
        } else {
            let index = paketpesan.indexOf(paket)
            setPaketpesan(tim => [...tim.slice(0, index), ...tim.slice(index + 1)])
        }
        console.log(jadwalPesan)

    }
    const pesanWhatsapp = async (e) => {

        let text = `[nama : "${nama}"]  [email : "${email}"]  [No.hp : "${noTelp}"]   [Tgl : "${tglPesan}"]   [estimasi waktu : "${jadwalPesan}"]    [Paket: "${paketpesan}"]`
        let urlRed = `https://wa.me/+6281353025114?text=${text}`
        document.location.href = urlRed
    }

    return (
        <div>
            <div className=''>

                <div className=''>
                    <img src="./layar-ke-2.jpg" className="img-fluid" alt="..." />
                </div>

                <Kost />

            </div>
            <section >
                <div className="container" >
                    <div className="section-title">
                        <h2>BOOKING</h2>
                        <p>Lengkapi Data Anda</p>
                    </div>
                    <form method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-10 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>Nama Pemesan</label>
                                <input type="text" name="name" className="form-control" placeholder="Nama Pemesan" value={nama} onChange={(e) => setNama(e.target.value)} data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Email</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3 ">
                                <label style={{ color: "white" }}>Nomor Kontak</label>
                                <input type="text" className="form-control" value={noTelp} onChange={(e) => setNoTelp(e.target.value)} name="phone" id="phone" placeholder="Nomor Telp." data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Tanggal Booking</label>
                                <input type="date" className="form-control" value={tglPesan} onChange={(e) => setTglPesan(e.target.value)} />
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Estimasi Booking</label>

                                <a className="form-control" data-bs-toggle="collapse" href="#jam" >
                                    <icon className='fa fa-sort-amount-desc'></icon>&nbsp;PILIH JAM
                                </a>
                                <div className="row collapse multi-collapse text-start mt-4" id="jam">

                                    {jamTersedia.map((data, i) => (
                                        <>
                                            <div className='col-6 col-lg-3 mb-2' style={{ fontWeight: 500 }}>
                                                <div>
                                                    <input type="checkbox" className="btn-check" id={`btn-${i}`}
                                                        name='jadwal'
                                                        onChange={(e) => setChange(e, data)}
                                                        value={data} />
                                                    <label className="btn-apisport-parent btn-apisport" htmlFor={`btn-${i}`}>{data}</label>
                                                </div>
                                            </div>
                                        </>
                                    ))}

                                </div>
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label style={{ color: "white" }}>Paket</label>

                                <a className="form-control" data-bs-toggle="collapse" href="#ruang" >
                                    <icon className='fa fa-sort-amount-desc'></icon>&nbsp;Pilih Paket
                                </a>
                                <div className="row col collapse multi-collapse text-start mt-4" id="ruang">
                                    {studio.map((data, i) => (
                                        <div className="col-4  p-2">
                                            <input type="checkbox" id={`btn-check${i}`}
                                                name='paket'
                                                onChange={(e) => setPaket(e, data.nama)}
                                                value={data.nama} className="btn-check" />
                                            <label className="card btn-apisport btn-apisport-parent" htmlFor={`btn-check${i}`}><div>
                                                <img src={data.foto} className="card-img-top" alt="..." style={{ objectFit: "cover" }} />
                                                <div className="card-body">
                                                    <p className="card-text" style={{ fontSize: '18px', lineHeight: '80%' }}><b>{data.nama}</b></p>
                                                </div>
                                            </div></label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <h5 className='text-black'>Nama: {nama}</h5>
                            <h5 className='text-black'>Email: {email}</h5>
                            <h5 className='text-black'>No. Telp: {noTelp}</h5>
                            <h5 className='text-black'>Tgl Reservasi: {tglPesan}</h5>
                            <h5 className='text-black'>Ruangan: </h5>
                            <h5 className='text-black'>Jam Pesanan</h5>
                            {jadwalPesan.length === 0 ? (
                                <h4>Tidak ada data Jadwal yang dipesan</h4>
                            ) : (
                                <>

                                    {jadwalPesan.map((data, index) => (
                                        <div className='col-6 col-sm-3 mb-2'>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <span>{data}</span><br></br>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                            <h5 className='text-black'>Paket</h5>
                            {paketpesan.length === 0 ? (
                                <h4>Tidak ada data Jadwal yang dipesan</h4>
                            ) : (
                                <>

                                    {paketpesan.map((data, index) => (
                                        <div className='col-6 col-sm-3 mb-2'>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <span>{data}</span><br></br>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                        </div>
                        <div className="text-center col-lg-10 col-md-10 form-group mt-3 mt-5">
                            <a href="/"> <button className="book-a-table-btn" onClick={pesanWhatsapp}>Boking sekarang</button></a>
                        </div>

                    </form>
                </div>
            </section>
        </div>

    )
}