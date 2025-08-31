import logo from "../../assets/logotipo-LBC-transparente.png";

export function Footer() {
    return (
        <footer>
            <div className="pt-48 pb-48 d-flex flex-row align-items-center gap-32 w-1100">
                <img src={logo} alt="Logo LBC" className="img-fluid logo-footer" />
                <span className="text-gray-700">
                    Exercício desenvolvido por: Marina Mendonça
                </span>
            </div>
        </footer>
    );
}