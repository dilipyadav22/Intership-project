import logo from '../logo/company.png'
import '../style.css';
const Header= ()=>{
    return(
        <div className="head" >
            <div className="head1" >
                <img src="https://img.freepik.com/premium-vector/free-vector-illustration-tracking-order-icon-button-tab_822642-212.jpg?w=740" alt="logo" />
            </div>
            <div className="head2">
                <img src={logo} alt="company-name" />
            </div>
            <div className="head3" >
                <a className="home" href="#"  >Home</a>
                <a href="#">Services</a>
                <a href="#">About us</a>
                <a href="#">Login</a>
            </div>
        </div>
    )
}

export default Header;