
import useSWR from 'swr'
import { useState } from 'react'
import moment from "moment";
import Kost from '../components/home/studio/album'


export default function Home() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [pilih, setPilih] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [tglPesan, setTglPesan] = useState('');
    const [jadwalPesan, setJadwalPesan] = useState([]);
    const [paketpesan, setPaketpesan] = useState([]);
    const [catatan, setCatatan] = useState([]);
    const [begrond, setBegrond] = useState([]);
    const [isCheck, setIsCheck] = useState(true);
    // const fetcher = (...args) => fetch(...args).then((res) => res.json())
    // const { data: data, error } = useSWR('/api/db_studio', fetcher, { refreshInterval: 1000 })

    // if (!data) {
    //     return <div className="spinner"></div>
    // } else if (error) {
    //     return <div>Something went wrong</div>
    // }
    // let studio = data['message']
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_nowa', fetcher, { refreshInterval: 1000 })
    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }
    let pesanArr = data['message']
    let nowa = pesanArr['menu']
    // let ruangan = pesanArr['ruangan']
    // console.log(pesanArr)
    var currentdate = new Date();
    var dateDate = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear()

    let startOfMonth = moment().startOf('month').format('YYYY-MM-DD')
    let jamTersedia = ['08.00','08.30','09.00','09.30', '10.00','10.30', '11.00','11.30', '12.00','12.30', '13.00', '13.30','14.00','14.30', '15.00', '15.30','16.00', '16.30','17.00', '17.30','18.00', '18.30','19.00', '19.30','20.00']


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
        document.write("\n");
        // let text = `Hai kak ARYO'S SELF STUDIO, saya ingin reservasi%0Anama : ${nama}%0Aemail : ${email}%0ANo.hp : ${noTelp}%0ATgl : ${tglPesan}%0ABackground : ${begrond}%0Aestimasi waktu : ${jadwalPesan}%0APaket: ${paketpesan} %0A Catatan: ${catatan}%0AApakah slot tersebut tersedia?%0Aterimakasih`
        let text = `*Hai kak ARYO'S SELF STUDIO*, saya ingin reservasi%0ANama%20%3A%20*${nama}*%0ANo%20hp%20%3A%20*${noTelp}*%0AInstagram%20%3A%20*${email}*%0ATgl%20booking%20%3A%20*${tglPesan}*%0AEstimasi%20waktu%20%3A%20*${jadwalPesan}*%0ASesi%20Foto%20%3A%20*${begrond}*%0APaket%20%3A%20*${pilih}*%0ATambahan%20%3A%20*${catatan}*%0AApakah slot tersebut tersedia?%0A*Terimakasih*`
        let urlRed = `https://wa.me/+6282257569994?text=${text}`
        document.location.href = urlRed
    }

    return (
        <div>
            <div className=''>

                <div className=''><a href='/'>
                    <img src="./SELF-STUDIO-KE-2.jpg" className="img-fluid" alt="..." /></a>
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
                                <label  >Nama Pemesan</label>
                                <input type="text" name="name" className="form-control" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label  >Instagram</label>
                                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Instagram" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3 ">
                                <label  >Nomor Kontak</label>
                                <input type="number" className="form-control" value={noTelp} onChange={(e) => setNoTelp(e.target.value)} placeholder="Nomor Telp." />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3 text-dark">
                                <label  >Tanggal Booking</label>
                                <input type="date" min={startOfMonth} style={{ colorScheme: 'dark', color: 'black', backgroundColor: 'white' }} placeholder="dd/mm/yyyy" className="form-control" value={tglPesan} onChange={(e) => setTglPesan(e.target.value)} />
                                <div className="validate" />
                            </div>
                            
                            <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label  >Estimasi Jam Booking</label>

                                <a className="form-control" data-bs-toggle="collapse" href="#jam" >
                                    <icon className='fa fa-sort-amount-desc'></icon>&nbsp;pilih jam
                                </a>
                                <div className="row collapse multi-collapse text-start mt-4" id="jam">

                                    {jamTersedia.map((data, i) => (
                                        <>
                                            <div className='col-3 col-lg-2 mb-2' style={{ fontWeight: 500 }}>
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
                            {/* <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label  >Paket</label>

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

                            </div> */}
                            <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label for="telepon" class="form-label">Pilih Sesi Foto</label>
                                <select class="form-control" name="cars" onChange={(e) => setBegrond(e.target.value)} required>
                                    <option >-</option>
                                    <option value={"Self Studio"}>Self Studio</option>
                                    <option value={"Photobox Fish eye"}>Photobox Fish eye</option>
                                </select>
                            </div>
                            <div className="col-lg-10 col-md-10 form-group mt-3 ">
                                <label  >Paket Yang Dipilih</label>
                                <input type="text" className="form-control" value={pilih} onChange={(e) => setPilih(e.target.value)} placeholder="Paket" />
                                <div className="validate" />
                            </div>
                            {/* <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label  >Warna background</label>
                                <input type="text" className="form-control" value={begrond} onChange={(e) => setBegrond(e.target.value)} placeholder="Warna" />
                            </div> */}
                            
                            <div className="col-lg-10 col-md-10 form-group mt-3">
                                <label>Tambahan</label>
                                <textarea className="form-control" name="message" value={catatan} onChange={(e) => setCatatan(e.target.value)} rows={3} placeholder="Opsional ( Jika ada penambahan orang atau item yang diinginkan )" defaultValue={""} />
                                <div className="validate" />
                                <hr></hr>
                            </div>
                        

                        <div className='col-lg-10 col-md-10 form-group mt-3'>
                            <div className='' style={{ borderStyle: 'solid', borderColor: 'GrayText', borderRadius: '0.4rem' }}>
                                <table >
                                    <tr>
                                        <td><h6 className='text-black'>Nama </h6></td>
                                            <td><h6 className='text-black'>:<strong>{nama}</strong></h6></td>
                                    </tr>
                                    <tr>
                                        <td><h6 className='text-black'>No Hp </h6></td>
                                            <td><h6 className='text-black'>:<strong>{noTelp}</strong> </h6></td>
                                    </tr>
                                    <tr>
                                        <td><h6 className='text-black'>Instagram </h6></td>
                                            <td><h6 className='text-black'>:<strong>{email}</strong> </h6></td>
                                    </tr>
                                    <tr>
                                        <td><h6 className='text-black'>Tgl Booking </h6></td>
                                            <td><h6 className='text-black'>:<strong>{tglPesan}</strong> </h6></td>
                                    </tr>
                                    <tr>
                                        <td><h6 className='text-black'>Estimasi Waktu </h6></td>
                                            <td><h6 className='text-black'>:<strong>{jadwalPesan}</strong> </h6></td>
                                    </tr>
                                    <tr>
                                        <td><h6 className='text-black'>Sesi Foto</h6></td>
                                            <td><h6 className='text-black'>:<strong>{begrond}</strong> </h6></td>
                                    </tr>
                                    
                                    <tr>
                                        <td><h6 className='text-black'>Paket</h6></td>
                                            <td><h6 className='text-black'>:<strong>{pilih} </strong></h6></td>
                                    </tr>
                                    <tr>
                                        <td><h6 className='text-black'>Catatan</h6></td>
                                            <td><h6 className='text-black'>:<strong>{catatan} </strong></h6></td>
                                    </tr>
                                </table>

                            </div>
                            </div>
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
