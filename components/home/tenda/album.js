
import Cardfoto from './cardalbum'
import useSWR from 'swr'



export default function Home() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_tenda', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }


    let tenda = data['message']
    return (
        <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Tenda</h2>
                </div>
            </div>
            <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
                <div className="row text-center col-lg-12">
                    {tenda.length === 0 ? (
                        <></>
                    ) : (
                        <>

                            {tenda.map((data, i) => (
                                <Cardfoto props={data} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
