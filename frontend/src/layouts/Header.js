
import './Header.css'; 

function Header() { 

    return (
        <div className="header">
            <a className="name" href="/home">Hikmet Çakır</a>
            <div className="header-right"> 
                <a className="header-right-content"  href="/javase">Java SE</a>
                <a className="header-right-content"  href="/spring">Spring</a>
                <a className="header-right-content"  href="/about-me">Hakkimda</a>
            </div>
        </div>
  );
}


export default Header;