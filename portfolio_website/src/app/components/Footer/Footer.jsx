import icon from "../../images/placeholder.png"



export default function Footer() {
    return (
        <div className="main_div_footer">
            <div class="logo_div_footer">
                <img src={icon} alt="icon linkedIn" />
                <img src={icon} alt="icon linkedIn" />
                <img src={icon} alt="icon linkedIn" />
                <img src={icon} alt="icon linkedIn" />
            </div>
            <div className="links_div_footer">
                <a>Lien</a>
                <a>Lien</a>
                <a>Lien</a>
                <a>Lien</a>
                <a>Lien</a>
            </div>
            <div className="main_copyrights_div_footer">
                <h4>Copyrights © 2024</h4>
                <h4 className="dash_copyrights_footer"> - </h4>
                <h4>Designed by Nathan LORIT</h4>
            </div>

        </div>

    )
}
