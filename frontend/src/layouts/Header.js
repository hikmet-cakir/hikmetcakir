
import './Header.css'; 

function Header() { 

    return (
        <div className="header">
            <a className="name" href="#default">Hikmet Çakır</a>
            <div className="header-right"> 
                <a className="header-right-content"  href="/login">Java SE</a>
                <a className="header-right-content"  href="#default">Spring</a>
                <a className="header-right-content"  href="/about-me">Hakkimda</a>
            </div>
        </div>
  );
}


export default Header;