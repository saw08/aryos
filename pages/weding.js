
import Kost from '../components/home/weding/album'
import useSWR from 'swr'

// MONGODB_URI = "mongodb://127.0.0.1:27017"

export default function Home() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_nowa', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let nowa = data['message']
    const pesanWhatsapp = async (e) => {
        // let text = `Hai kak ARYO'S SELF STUDIO, saya ingin reservasi%0Anama : ${nama}%0Aemail : ${email}%0ANo.hp : ${noTelp}%0ATgl : ${tglPesan}%0ABackground : ${begrond}%0Aestimasi waktu : ${jadwalPesan}%0APaket: ${paketpesan} %0A Catatan: ${catatan}%0AApakah slot tersebut tersedia?%0Aterimakasih`
        let text = `Halo%2C%20Saya%20tertarik%20dengan%20pelayanan%20dari%20*ARYO%27S%20WEDDING%20%26%20PRAWEDDING*`
        let urlRed = `https://wa.me/+62${nowa[0].waweding}?text=${text}`
        document.location.href = urlRed
    }
    return (
        <div>
            <div className=''>
                <div className='text-center'><a href="/">
                    <img src="./layar-ke-2.jpg" className="img-fluid" alt="..." /></a>
                </div>
                <Kost />
                <div className="text-center  form-group mt-3 p-4">
                    <button className="book-a-table-btn" onClick={pesanWhatsapp}>
                        <icon className='fa fa-whatsapp  mx-2'></icon>Hubungi Admin
                    </button>
                </div>
            </div>

        </div>

    )
}
