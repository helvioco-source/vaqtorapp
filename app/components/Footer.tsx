import "./Footer.css";

import {
  Mail,
  ShieldCheck,
  Handshake,
  Clock3,
  Lock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= TOPO ================= */}

        <div className="footer-header">

          <div className="footer-logo-box">

            <img
              src="/logo.png"
              alt="VaqtorApp"
              className="footer-logo"
            />

          </div>

          <h2>VAQTORAPP</h2>

          <p>
            TECNOLOGIA QUE CONECTA.
            <br />
            DADOS QUE TRANSFORMAM.
          </p>

        </div>

        <div className="footer-divider"></div>

        {/* ================= COLUNAS ================= */}

        <div className="footer-columns">

          <div className="footer-column">

            <div className="footer-item">

              <ShieldCheck size={18} />

              <span>
                © 2026 • TODOS OS DIREITOS RESERVADOS
              </span>

            </div>

            <div className="footer-item">

    <div className="country-row">
  <img
    src="/images/brazil.svg"
    alt="Bandeira do Brasil"
    className="brazil-flag"
  />

  <span>APLICATIVO DESENVOLVIDO NO BRASIL</span>
</div>

</div>

          </div>

          <div className="footer-column">

            <h4>ATENDIMENTO</h4>

            <div className="footer-item">

              <Mail size={18} />

              <a
                href="mailto:vaqtorapp@gmail.com?subject=Solicitação%20de%20Demonstração%20do%20VaqtorApp&body=Olá,%0A%0AGostaria%20de%20agendar%20uma%20demonstração%20do%20VaqtorApp.%0A%0ATelefone:%0A%0AObrigado!"
              >
                vaqtorapp@gmail.com
              </a>

            </div>

            <div className="footer-item">

              <Handshake size={18} />

              <span>
                PRESENCIAL
                <br />
                (SOMENTE COM AGENDAMENTO)
              </span>

            </div>

            <div className="footer-item">

              <Clock3 size={18} />

              <span>
                RESPOSTA EM ATÉ 24 HORAS ÚTEIS
              </span>

            </div>

          </div>

        </div>

        <div className="footer-divider"></div>

        {/* ================= SELOS ================= */}

        <div className="footer-seals">

          <div className="seal">

            <ShieldCheck size={26} />

            <div>

              <h5>POLÍTICA DE PRIVACIDADE</h5>

              <p>
                Seus dados são tratados conforme a LGPD.
              </p>

            </div>

          </div>

          <div className="seal">

            <Lock size={26} />

            <div>

              <h5>SEGURANÇA DOS DADOS</h5>

              <p>
                Conexão protegida por criptografia.
              </p>

            </div>

          </div>

        </div>

        <div className="footer-divider"></div>

        {/* ================= LINKS ================= */}

        <div className="footer-links">

          <a href="#">
            POLÍTICA DE PRIVACIDADE
          </a>

          <span>•</span>

          <a href="#">
            TERMOS DE USO
          </a>

          <span>•</span>

          <a href="#">
            LGPD
          </a>

        </div>

      </div>

    </footer>
  );
}