
import Kost from '../components/home/kost/album'
// MONGODB_URI = "mongodb://127.0.0.1:27017"

export default function Home() {
    return (
        <div>
            <div className=''>

                <div className='text-center'><a href="/">
                    <img src="./ARYOS-KOST-KE-2.jpg" className="img-fluid" alt="..." /></a>
                </div>

                <Kost />
                <div className="text-center col-lg-10 col-md-10 form-group p-4">
                    <a href="/"> <button className="book-a-table-btn" >Boking sekarang</button></a>
                </div>
            </div>

        </div>

    )
}
