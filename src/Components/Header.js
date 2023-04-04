const Header = () => {
	return ( 
		<header>
        <nav className="container">
          <div className="hotel-logo">
            <h1>NIK</h1>
            <h2>HOTEL</h2>
          </div>
          <ul>
            <a href="/"><li>Home</li></a>
            <a href="/"><li>About</li></a>
            <a href="/"><li>Services</li></a>
            <a href="/"><li>Gallery</li></a>
            <a href="/"><li>Contacts</li></a>
          </ul>
        </nav>
      </header>
	 );
}
 
export default Header;