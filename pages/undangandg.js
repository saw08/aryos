
import useSWR from 'swr'
import UNdangan from '../components/home/undangan/undangan'
export default function Home() {

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_nowa', fetcher, { refreshInterval: 1000 })
    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }
    let nowa = data['message']
    console.log(nowa.waundangan)

    const pesanWhatsapp = async (e) => {
        // let text = `Hai kak ARYO'S SELF STUDIO, saya ingin reservasi%0Anama : ${nama}%0Aemail : ${email}%0ANo.hp : ${noTelp}%0ATgl : ${tglPesan}%0ABackground : ${begrond}%0Aestimasi waktu : ${jadwalPesan}%0APaket: ${paketpesan} %0A Catatan: ${catatan}%0AApakah slot tersebut tersedia?%0Aterimakasih`
        let text = `*Halo, Saya tertarik dengan pelayanan dari ARYO'S UNDANGAN DIGITAL*`
        let urlRed = `https://wa.me/+62${nowa[0].waundangan}?text=${text}`
        document.location.href = urlRed
    }
    return (
        <div>
            <div className='text-center'><a href="/">
                <img src="./UNDANGAN-DIGITAL-KE-2.jpg" className="img-fluid" alt="..." /></a>
            </div>
            <UNdangan />
            <div className="text-center  form-group mt-3 p-4">
                <button className="book-a-table-btn" onClick={pesanWhatsapp}>
                    <icon className='fa fa-whatsapp mx-2'></icon>Hubungi Admin
                </button>
            </div>

        </div>

    )
}
