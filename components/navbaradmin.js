import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-bootstrap';

function navbarAdmin() {
    return (
        < Navbar id="header" className="navbar-dark d-flex align-items-cente" expand="lg">
            <Container className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
                <Navbar.Brand href="/admin/home">

                    <img
                        className='logo me-auto me-lg-0'
                        alt=""
                        src="/ARYOS.png"
                        width="100"
                        height="100"
                    />{'  '}
                    {/* <h4 className='text-white text-start p-2'>Warung kemarang</h4> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-header " >
                        <Nav.Link className='nav-link scrollto' href="../">
                            <h4 className='text-white text-center'><u>ADMIN ARYOS GRIP</u></h4>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/home">
                            <h5 className='text-white text-start'>Home</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-weding">
                            <h5 className='text-white text-start'>Weding</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-studiou">
                            <h5 className='text-white text-start'>Studio Utama</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-studio">
                            <h5 className='text-white text-start'>Studio</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-Tenda">
                            <h5 className='text-white text-start'>Tenda</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-kost">
                            <h5 className='text-white text-start'>Kost</h5>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navbarAdmin;