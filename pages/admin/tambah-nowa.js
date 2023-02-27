import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import Cardfoto from '../../components/admin/undangan/undangan'

export default function Album() {
    const [waweding, setWeding] = useState('');
    const [wastudiutama, setStudioutama] = useState('');
    const [waselfstudio, setSelfstudio] = useState('');
    const [waundangan, setUndangan] = useState('');
    const [watenda, setTenda] = useState('');
    const [wakost, setKost] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_nowa', fetcher, { refreshInterval: 1000 })


    const handlePost = async (e) => {
        e.preventDefault();

        if (!waweding || !wastudiutama || !waselfstudio || !waundangan || !watenda || !wakost)
            return setError('All fields are required');
        // post structure
        let nowa = {
            waweding,
            wastudiutama,
            waselfstudio,
            waundangan,
            watenda,
            wakost
        };
        // save the post
        let response1 = await fetch('/api/db_nowa', {
            method: 'POST',
            body: JSON.stringify(nowa),
        });
        // get the data
        let data = await response1.json();
        if (data.success) {
            // reset the fields
            router.reload()
            // set the message
            return setMessage(data.message);

        }
        else {
            // set the error
            console.log(data.message);
            return setError(data.message);
        }
    };
    
    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }
    let cek = data[0];


    let nowamap = data['message']
    console.log("data")
    console.log(nowamap)

    return (
        <>
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>NO WA</h2>
                    </div>
                    {nowamap.length === 0 ? (
                        <form onSubmit={handlePost} >
                            <div className=" col-lg-12">
                                <div className="col-lg-6 col-md-10 mt-3 form-group">
                                    <label style={{ color: "white" }}>Wa Wedong &Prawedong </label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Wa weding"
                                        onChange={(e) => setWeding(e.target.value)}
                                        value={waweding}
                                    />
                                    <div className="validate" />
                                </div>
                                <div className="col-lg-6 col-md-10 mt-3 form-group">
                                    <label style={{ color: "white" }}>Wa Studio Utama </label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Wa Studio Utama"
                                        onChange={(e) => setStudioutama(e.target.value)}
                                        value={wastudiutama}
                                    />
                                    <div className="validate" />
                                </div>
                                <div className="col-lg-6 col-md-10 mt-3 form-group">
                                    <label style={{ color: "white" }}>Wa Self Studio </label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Wa self studio"
                                        onChange={(e) => setSelfstudio(e.target.value)}
                                        value={waselfstudio}
                                    />
                                    <div className="validate" />
                                </div>
                                <div className="col-lg-6 col-md-10 mt-3 form-group">
                                    <label style={{ color: "white" }}>Wa Undangan </label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Wa Undangan"
                                        onChange={(e) => setUndangan(e.target.value)}
                                        value={waundangan}
                                    />
                                    <div className="validate" />
                                </div>
                                <div className="col-lg-6 col-md-10 mt-3 form-group">
                                    <label style={{ color: "white" }}>Wa Aryo's Tenda </label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Wa aryos tenda"
                                        onChange={(e) => setTenda(e.target.value)}
                                        value={watenda}
                                    />
                                    <div className="validate" />
                                </div>
                                <div className="col-lg-6 col-md-10 mt-3 form-group">
                                    <label style={{ color: "white" }}>Wa Aryo's Kost </label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Wa aryos Kost"
                                        onChange={(e) => setKost(e.target.value)}
                                        value={wakost}
                                    />
                                    <div className="validate" />
                                </div>

                                <div className="text-center col-lg-6 col-md-10 form-group mt-3 mt-5">
                                    <button className="book-a-table-btn" type="submit" disabled={uploading === false ? (false) : (true)}>Tambahkan</button>
                                </div>
                            </div>

                        </form>
                    ) : (
                        <>
                                {nowamap.map((data, index) => (
                                <div className="container" >
                                    <div className=" col-lg-12">
                                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                                            <label style={{ color: "white" }}>Wa Weding &Praweding </label>
                                            <input type="text"
                                                className="form-control"
                                                readOnly
                                                value={data.waweding}
                                            />
                                            <div className="validate" />
                                        </div>
                                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                                            <label style={{ color: "white" }}>Wa Studio Utama </label>
                                            <input type="text"
                                                className="form-control"
                                                readOnly
                                                value={data.wastudiutama}
                                            />
                                            <div className="validate" />
                                        </div>
                                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                                            <label style={{ color: "white" }}>Wa Self Studio </label>
                                            <input type="text"
                                                className="form-control"
                                                readOnly
                                                value={data.waselfstudio}
                                            />
                                            <div className="validate" />
                                        </div>
                                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                                            <label style={{ color: "white" }}>Wa Undangan </label>
                                            <input type="text"
                                                className="form-control" readOnly
                                                value={data.waundangan}
                                            />
                                            <div className="validate" />
                                        </div>
                                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                                            <label style={{ color: "white" }}>Wa Aryo's Tenda </label>
                                            <input type="text"
                                                className="form-control"
                                                readOnly
                                                value={data.watenda}
                                            />
                                            <div className="validate" />
                                        </div>
                                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                                            <label style={{ color: "white" }}>Wa Aryo's Kost </label>
                                            <input type="text"
                                                className="form-control"
                                                readOnly
                                                value={data.wakost}
                                            />
                                            <div className="validate" />
                                        </div>

                                        <div className="text-center col-lg-6 col-md-10 form-group mt-3 mt-5">
                                                <Link className="book-a-table-btn " href={{
                                                    pathname: './update-nowa',
                                                    query: {
                                                        waweding: data.waweding,
                                                        wastudiutama: data.wastudiutama,
                                                        waselfstudio: data.waselfstudio,
                                                        waundangan: data.waundangan,
                                                        watenda: data.watenda,
                                                        wakost: data.wakost,
                                                        objectId: data._id

                                                    }

                                                }}>Edit no whatsapp</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </section>
        </>
    )
}
