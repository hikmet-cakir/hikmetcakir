import './Header.css'; 

function ManagementHeader() { 
    return ( 
        <div className="header">
            <a className="name" href="/management-home">Management Panel</a>
            <div className="header-right"> 
                <a className="header-right-content"  href="/management-search">Search Essay</a>
                <a className="header-right-content"  href="/management-add">Add Essay</a> 
                <a className="header-right-content"  href="/management-update">Update Essay</a> 
                <a className="header-right-content"  href="/management-delete">Delete Essay</a>
            </div>
        </div> 
    );
}

export default ManagementHeader;