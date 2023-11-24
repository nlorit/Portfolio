import icon from "../images/placeholder.png"
export default function Navbar() {
    return (
        <nav>
            <div className="main-div-navbar">
                <div className="logo-div-navbar">
                    <a href="/">
                        <img src={icon} />
                    </a>
                </div>

                <div className="links-div-navbar">
                    <a href="/">Home</a>
                    <a href="/project">My projects</a>
                    <a href="/about">About me</a>
                </div>

                <div className = "button-div-navbar">
                    <button>
                        <a href ="/about">
                            Contact
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    )
}
