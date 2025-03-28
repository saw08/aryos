import Link from 'next/link';

export default function Cardpesanan({ props }) {
    const foto = "/" + props.foto
    const deleteAlbum = async () => {
        try {
            console.log('Try')
            // Delete post
            await fetch('/api/db_weding', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    _id: props._id,
                }),
            });
            // reset the deleting state
            // reload the page
            alert('Album Terhapus')
        } catch (error) {
            // stop deleting state
        }
    };
    return (
        <div className="col-lg-3 col-md-4">
            <div className=''>
                <div className="profile-card-6">
                    <img src={props.foto} className="img img-fluid" height={300} width={300} style={{ objectFit: "cover" }} />
                    <div className="profile-name">{` ${props.deskripsi}`}</div><br/>
                    <div className="profile-name">{` ${props.kategori}`}</div>
                </div>
            </div>
            <div>
                <button type="button"
                    onClick={() => deleteAlbum()}
                    className="btn btn-outline-secondary mx-3" >
                    HAPUS
                </button>
            </div>
        </div>
    )
}

