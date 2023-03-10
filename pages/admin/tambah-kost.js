import { Link, Image } from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr'
import Cardfoto from '../../components/admin/kost/album'
export default function Album() {
    const [foto, setFoto] = useState('');
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false)
    const router = useRouter()


    const handlePost = async (e) => {
        e.preventDefault();
        let imageUrl = ''
        //Uploading
        setUploading(true)
        //Uploading
        const body = new FormData();
        //console.log("file", image)
        body.append("file", image);
        body.append('upload_preset', 'kemrangimg');
        const response = await fetch('https://api.cloudinary.com/v1_1/perpus/image/upload', {
            method: 'POST',
            body
        }).then(r => r.json());
        let foto = response.secure_url
        //Uploading
        setUploading(true)
        //Cloudinary End

        // reset error and message
        setError('');
        setMessage('');
        // alert("Penambahan Data Sukses")
        // fields check
        if ( !foto)
            return setError('All fields are required');
        // post structure
        let weding = {
            foto
        };
        // save the post
        let response1 = await fetch('/api/db_kost', {
            method: 'POST',
            body: JSON.stringify(weding),
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
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setFoto(i.name)
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    
    return (
        <>
            <section id="events" className="events">
                <div className="container" >
                    <div className="section-title">
                        <h2>KOST ARYO'S</h2>
                    </div>
                    <form onSubmit={handlePost} >
                        <div className=" col-lg-12">
                            <div className="col-lg-6 col-md-10 form-group mt-3">
                                <div className="col-6   ">
                                    <img src={createObjectURL} className='img img-fluid' style={{ width: '30', height: '20' }} />
                                </div>
                                <label style={{ color: "white" }}>Gambar</label>
                                <input type="file" className="form-control" name="myImage" onChange={uploadToClient} />
                            </div>
                            
                            
                            <div className="text-center col-lg-6 col-md-10 form-group mt-3 mt-5">
                                <button className="book-a-table-btn" type="submit" disabled={uploading === false ? (false) : (true)}>Tambahkan</button>
                                <div className="text-center col-lg-6 col-md-10">
                                {uploading &&
                                    <>
                                        <div className="lds-ellipsis"><div /><div /><div />
                                        </div>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
            <Cardfoto/>
            
            
        </>
    )
}
