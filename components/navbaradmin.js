import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-bootstrap';

function navbarAdmin() {
    return (
        < Navbar id="header" className="navbar-dark d-flex align-items-cente" expand="lg">
            <Container className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
                {/* <Navbar.Brand href="/admin/home">

                    <img
                        className='logo me-auto me-lg-0'
                        alt=""
                        src="/ARYOS.png"
                        width="100"
                        height="100"
                    />{'  '}
                    <h4 className='text-white text-start p-2'>Warung kemarang</h4>
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-header " >
                        <Nav.Link className='nav-link scrollto' href="../admin/home" style={{ textDecoration: 'none', borderStyle: 'solid', borderColor: 'white', borderRadius: '0.3rem' }}>
                            <h4 className='text-white text-center' >ADMIN ARYOS GRUP</h4>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/home">
                            <h5 className='text-white text-start'>Home</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-weding">
                            <h5 className='text-white text-start'>Weding & Praweding</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-studiou">
                            <h5 className='text-white text-start'>Studio Utama</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-studio">
                            <h5 className='text-white text-start'>Self Studio</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-Tenda">
                            <h5 className='text-white text-start'>Aryo's Tenda</h5>
                        </Nav.Link>
                        <Nav.Link className='nav-link scrollto' href="../admin/tambah-kost">
                            <h5 className='text-white text-start'>Aryo's Kost</h5>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default navbarAdmin;