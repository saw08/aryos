
import Cardfoto from './cardalbum'
import useSWR from 'swr'
import { useEffect, useState } from 'react';

async function connectToDatabase() {
    const client = await MongoClient.connect('weding');
    return client;
  }
  
export default function Home() {
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_weding', fetcher, { refreshInterval: 1000 })

    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }

    const dataweding = await weding.findOne({ kategor:'wedding'});
    const dataprawed = await weding.findOne({ kategor:'prawedding'});
    setOptionData({wedding:dataweding,prawedding:dataprawed});
    // let weding = data['message']
    const [optionsData, setOptionsData] = useState({ option1: null, option2: null });

    return (
        <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>WEDING</h2>
                </div>
            </div>
            <div className="container-fluid" data-aos="fade-up">
                <div className="row col-lg-12">
                    {/* {weding.length === 0 ? (
                        <></>
                    ) : (
                        <>

                            {weding.map((data, i) => (
                                <Cardfoto props={data} />
                            ))}
                        </>
                    )} */}
                    {weding.dataweding && (   
                        <>
                      <h2>WEDING</h2>
                    <Cardfoto props={data} /></>
                    )}
                     {/* Card untuk Opsi 2 */}
                     {optionsData.option2 && (
                         <>
                         <h2>WEDING</h2>
                        <Cardfoto props={data} /></>
                     )}
                </div>
            </div>
        </section>
    )
}
