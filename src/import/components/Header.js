const Header = ()=>{
    return (
        <div className="Header p-3">
            <section className="d-flex justify-content-between align-items-center">
                <section className="search-section bubble bubble-circle d-flex align-items-center justify-content-center">
                    {/* <ion-icon name="menu-outline"></ion-icon> */}
                    <a className="d-flex align-items-center">
                        <ion-icon name="search-outline"></ion-icon>
                    </a>
                </section>
                <section className="user-section bubble bubble-pill d-flex align-items-center p-2 px-3">
                    <a className="d-flex align-items-center">
                        <ion-icon name="barcode-outline"></ion-icon>
                    </a>
                    <a className="ml-3 d-flex align-items-center">
                        <ion-icon name="videocam-outline"></ion-icon>
                    </a>
                </section>
            </section>
        </div>
    );
}

export default Header;