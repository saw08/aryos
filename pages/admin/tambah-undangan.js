import { Link, Image } from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import Cardfoto from '../../components/admin/undangan/undangan'
export default function Album() {
    const [link, setLink] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)
    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_undangan', fetcher, { refreshInterval: 1000 })


    const handlePost = async (e) => {
        e.preventDefault();

        if (!link)
            return setError('All fields are required');
        // post structure
        let undangan = {
            link,
        };
        // save the post
        let response1 = await fetch('/api/db_undangan', {
            method: 'POST',
            body: JSON.stringify(undangan),
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
    const deleteAlbum = async () => {
        try {
            console.log('Try')
            // Delete post
            await fetch('/api/db_undangan', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: data._id,
                }),
            });
            // reset the deleting state
            // reload the page
            alert('data Terhapus')
        } catch (error) {
            // stop deleting state
        }
    };
    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let undanganmap = data['message']

    return (
        <>
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>UNDANGNAN</h2>
                    </div>
                    <form onSubmit={handlePost} >
                        <div className=" col-lg-12">
                            <div className="col-lg-6 col-md-10 mt-3 form-group">
                                <label style={{ color: "white" }}>UNDANGNAN </label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Link undangan"
                                    onChange={(e) => setLink(e.target.value)}
                                    value={link}
                                />
                                <div className="validate" />
                            </div>

                            <div className="text-center col-lg-6 col-md-10 form-group mt-3 mt-5">
                                <button className="book-a-table-btn" type="submit" disabled={uploading === false ? (false) : (true)}>Tambahkan</button>
                                <div className="text-center col-lg-6 col-md-10">
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
            <div className="row col-lg-12">
                {undanganmap.length === 0 ? (
                    <></>
                ) : (
                    <>
                        {undanganmap.map((data, i) => (
                            <Cardfoto props={data} />
                        ))}
                    </>
                )}
            </div>

        </>
    )
}
