
import logo from "../../assets/logotipo-LBC-transparente.png";

export function Header() {
    return (
        <header className="">
            <div className="pt-48 pb-48 d-flex w-1100">
                <img src={logo} alt="Logo LBC" className="img-fluid logo-header" />
            </div>
        </header>
    );
}