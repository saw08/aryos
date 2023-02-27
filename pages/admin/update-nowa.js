import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function TambahPaket() {
    let router = useRouter()
    const {
        waweding,
        wastudiutama,
        waselfstudio,
        waundangan,
        watenda,
        wakost,
        objectId,
    } = router.query

    //State of Art
    const [_waweding, setWeding] = useState('');
    const [_wastudiutama, setStudioutama] = useState('');
    const [_waselfstudio, setSelfstudio] = useState('');
    const [_waundangan, setUndangan] = useState('');
    const [_watenda, setTenda] = useState('');
    const [_wakost, setKost] = useState('');
    const [message, setMessage] = useState('');




    //Set All
    useEffect(() => {
        if (typeof waweding == 'string') {
            setWeding(waweding)

        }
        if (typeof wastudiutama == 'string') {
            setStudioutama(wastudiutama)
        }
        if (typeof waselfstudio == 'string') {
            setSelfstudio(waselfstudio)
        }
        if (typeof waundangan == 'string') {
            setUndangan(waundangan)
        }
        if (typeof watenda == 'string') {
            setTenda(watenda)
        }
        if (typeof wakost == 'string') {
            setKost(wakost)
        }
    }, [waweding,
        wastudiutama,
        waselfstudio,
        waundangan,
        watenda,
        wakost,
        objectId])

    //UPDATE
    const handlePost = async (e) => {
        e.preventDefault();
        // fields check
        try {
            // Update post
            await fetch('/api/db_nowa', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    waweding: _waweding,
                    wastudiutama: _wastudiutama,
                    waselfstudio: _waselfstudio,
                    waundangan: _waundangan,
                    watenda: _watenda,
                    wakost: _wakost,
                    objectId: objectId
                }),
            });
            // reload the page
            alert('nowa sukses diupdate')
            router.push('/admin/tambah-nowa');
        } catch (error) {
            // Stop publishing state
        }
    };
    return (
        <section id="events" className="events">
            <div className="container " >
                <div className="section-title">
                    <p>Tambah Data Menu</p>
                </div>
                <form onSubmit={handlePost} >
                    <div className=" col-lg-12">
                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                            <label style={{ color: "white" }}>Wa Wedong &Prawedong </label>
                            <input type="number"
                                className="form-control"
                                placeholder="Wa weding"
                                onChange={(e) => setWeding(e.target.value)}
                                value={_waweding}
                            />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                            <label style={{ color: "white" }}>Wa Studio Utama </label>
                            <input type="number"
                                className="form-control"
                                placeholder="Wa Studio Utama"
                                onChange={(e) => setStudioutama(e.target.value)}
                                value={_wastudiutama}
                            />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                            <label style={{ color: "white" }}>Wa Self Studio </label>
                            <input type="number"
                                className="form-control"
                                placeholder="Wa self studio"
                                onChange={(e) => setSelfstudio(e.target.value)}
                                value={_waselfstudio}
                            />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                            <label style={{ color: "white" }}>Wa Undangan </label>
                            <input type="number"
                                className="form-control"
                                placeholder="Wa Undangan"
                                onChange={(e) => setUndangan(e.target.value)}
                                value={_waundangan}
                            />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                            <label style={{ color: "white" }}>Wa Aryo's Tenda </label>
                            <input type="number"
                                className="form-control"
                                placeholder="Wa aryos tenda"
                                onChange={(e) => setTenda(e.target.value)}
                                value={_watenda}
                            />
                            <div className="validate" />
                        </div>
                        <div className="col-lg-6 col-md-10 mt-3 form-group">
                            <label style={{ color: "white" }}>Wa Aryo's Kost </label>
                            <input type="number"
                                className="form-control"
                                placeholder="Wa aryos Kost"
                                onChange={(e) => setKost(e.target.value)}
                                value={_wakost}
                            />
                            <div className="validate" />
                        </div>

                        <div className="text-center col-lg-6 col-md-10 form-group mt-3 mt-5">
                            <button className="book-a-table-btn" type="submit">Simpan</button>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}
