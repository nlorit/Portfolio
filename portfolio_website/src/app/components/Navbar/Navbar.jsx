import icon from "../../images/logo512.png"

export default function Navbar() {
    return (
        <nav>
            <div className="main_div_navbar">
                <div className="logo_div_navbar">
                    <a href="/">
                        <img src={icon} />
                    </a>
                </div>
                <div className="right_div_navbar">
                    <div className="links_div_navbar">
                        <a className="active" href="/">Home</a>
                        <a href="/project">My projects</a>
                        <a href="/about">About me</a>
                    </div>

                    <div className="button_div_navbar">
                        <button>
                            <a href="/about">
                                Contact
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
