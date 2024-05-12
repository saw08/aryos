
import Cardfoto from './cardalbum'
import useSWR from 'swr'



export default function Home() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_weding', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }

    const Wedding1 = data.filter(item => item.kategori === 'wedding');
    const Prawedding1 = data.filter(item => item.kategori === 'prawedding');

    let weding = data['message']
    return (
        <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>WEDDING & PRAWEDDING</h2>
                </div>
            </div>
            <div className="container-fluid" data-aos="fade-up">
                <div className="row col-lg-12">
                    {weding.length === 0 ? (
                        <></>
                    ) : (
                        <>
                            {Wedding1.map((data) => (
                               <Cardfoto key={data._id} props={data} />
                            ))}
                            {Prawedding1.map((data) => (
                               <Cardfoto key={data._id} props={data} />
                            ))}
                            {/* {weding.map((data, i) => (
                                <Cardfoto props={data} />
                            ))} */}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
