
import Kost from '../components/home/weding/album'
// MONGODB_URI = "mongodb://127.0.0.1:27017"

export default function Home() {
    return (
        <div>
            <div className=''>
                <div className='text-center'><a href="/">
                    <img src="./layar-ke-2.jpg" height={200}  alt="..." /></a>
                </div>
                <Kost />
                <div className=" fixed-bottom mb-5 ">
                    <div className="text-center form-group pt-5">
                        <a href='/pesan' type='btn' className='btn-rs ' style={{ textDecoration: 'none', color: 'white' }}>
                            <b style={{ marginTop: '3px' }}>Boking...</b>
                            <i className="fa fa-hand-o-right" style={{ fontSize: '22px', paddingLeft: '1px' }} />
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}
