import Link from 'next/link';

export default function Cardpesanan({ props }) {
    
    return (
        <div className="col-lg-6 col-md-10">
            <div className=''>
                <div className="profile-card-6">
                    <img src={props.foto} className="img img-fluid" height={700}  style={{ objectFit: "cover" }} />
                    <div className="profile-name">{` ${props.nama}`}</div>
                </div>
            </div>
            
        </div>
    )
}

