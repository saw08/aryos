
import useSWR from 'swr'

export default function Home() {

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data: data, error } = useSWR('/api/db_undangan', fetcher, { refreshInterval: 1000 })
    if (!data) {
        return <div className="spinner"></div>
    } else if (error) {
        return <div>Something went wrong</div>
    }
    let undanganmap = data['message']
    return (
        <div>
            <div className="text-center col-lg-12 mb-5">
                {undanganmap.length === 0 ? (
                    <></>
                ) : (
                    <>
                        {undanganmap.map((data, i) => (
                            <div className="d-grid gap-2 col-6 mx-auto form-group p-4">
                                <a href={data.link}> <button className="book-a-table-btn p-3" >Contoh Undangan {i + 1}</button></a>
                            </div>
                        ))}
                    </>
                )}
            </div>

        </div>

    )
}
