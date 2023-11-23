import icon from "../../images/placeholder.png"
export default function Footer() {
    return (
        <div className="main-div-footer">
            <div class="logo-div-footer">
                <img src={icon} alt="icon linkedIn"/>
                <img src={icon} alt="icon linkedIn"/>
                <img src={icon} alt="icon linkedIn"/>
                <img src={icon} alt="icon linkedIn"/>
            </div>
            <div className="links-div-footer">
                <a>Lien</a>
                <a>Lien</a>
                <a>Lien</a>
                <a>Lien</a>
                <a>Lien</a>
            </div>
            <div className="copyrights-div-footer">
                <h4>
                    Copyrights © 2024, Designed by Nathan LORIT
                </h4>
            </div>

        </div>

    )
}
