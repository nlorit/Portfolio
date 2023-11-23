import icon from "../../images/placeholder.png"
export default function Navbar() {
    return (
        <nav>
            <div className="main-div-navbar">
                <div className="logo-div-navbar">
                    <img src={icon}/>
                </div>
                
                <div className="links-div-navbar">
                    <a class="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </nav>
    )
}
