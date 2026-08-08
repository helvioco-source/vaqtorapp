import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="brand">
        <img
          src="/logo.png"
          alt="Logo VaqtorApp"
          className="logo-img"
        />

        <div className="brand-text">
          <h1 className="logo-name">
            VaqtorApp
          </h1>

          <span className="logo-slogan">
            Tecnologia que conecta.
          </span>
        </div>
      </div>

      <nav className="menu" aria-label="Navegação principal">
        <a href="#">
          INÍCIO
        </a>

        <a href="#benefits">
          BENEFÍCIOS
        </a>

        <a href="mailto:vaqtorapp@gmail.com?subject=Contato%20VaqtorApp">
          CONTATO COMERCIAL
        </a>
      </nav>

      <a
        href="https://wa.me/5562982937272?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20VaqtorApp%20e%20conhecer%20como%20o%20sistema%20pode%20ajudar%20no%20gerenciamento%20da%20minha%20fazenda."
        target="_blank"
        rel="noopener noreferrer"
        className="btn-demo"
      >
        Agendar Demonstração
      </a>

    </header>
  );
}