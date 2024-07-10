import { get } from 'http';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter();

  const getActiveClass = (path: string) => {
    return router.pathname === path ? 'active' : '';
  }

  const getActiveStyleLi = (path: string) => {
    return router.pathname === path ? { backgroundColor: 'green', color: 'white' } : {};
  }

  const getActiveStyleLinkText = (path: string) => {
    return router.pathname === path ? { color: 'white' } : {};
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">MyApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li style={getActiveStyleLi("/")}>
            <Link href="/" className="nav-link" style={getActiveStyleLinkText("/")}>
              Home
            </Link>
          </li>
          <li style={getActiveStyleLi("/locations")}>
            <Link href="/locations" className="nav-link" style={getActiveStyleLinkText("/locations")}>
              By Location
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
