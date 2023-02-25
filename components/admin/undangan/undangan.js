
export default function Album({props}) {
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
                    _id: props._id,
                }),
            });
            // reset the deleting state
            // reload the page
            alert('data Terhapus')
        } catch (error) {
            // stop deleting state
        }
    };
 let i =[]
    return (
        <>
            <div className="text-center col-lg-10 col-md-10 form-group p-2">
                <a href={props.link}> <button className="book-a-table-btn" >Contoh Undangan {i + 1}</button></a>
                    <button type="button"
                        onClick={() => deleteAlbum()}
                        className="btn btn-outline-secondary mx-3" >
                        HAPUS
                    </button>
            </div>
            

        </>
    )
}
