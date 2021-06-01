import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'


const Footer = (props)=>{
    const location = useLocation().pathname;
    return (
        <div className="Footer p-3">
            <footer className="footer-menu bubble bubble-pill py-3 d-flex justify-content-around align-items-center">
                <Link to="/" className={(location == '/')?'active':''}>
                    <ion-icon name="radio-outline"></ion-icon>
                </Link>
                <Link to="/follow" className={(location == '/follow')?'active':''}>
                    <ion-icon name="albums-outline"></ion-icon>
                </Link>
                <Link to="/chat" className={(location == '/chat')?'position-relative active':'position-relative'}>
                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    <span className="badge badge-pill badge-theme alert-pos">1</span>
                </Link>
                <Link to="/me" className={(location == '/me')?'active':''}>
                    <img src="https://i.imgur.com/IigY4Hm.png" className="rounded-circle user-icon user-head-img" alt="User"></img>
                </Link>
            </footer>
        </div>
    );
}

export default Footer;