import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LGPD() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "60vh",
          padding: "90px 22px",
          background:
            "linear-gradient(180deg, #fbfdff 0%, #eef6ff 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "900px",
            padding: "60px 40px",
            background: "rgba(255,255,255,.82)",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,.75)",
            boxShadow: "0 20px 50px rgba(0,0,0,.08)",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 22px",
              borderRadius: "50px",
              background: "#e8f5e9",
              color: "#2E7D32",
              fontSize: ".82rem",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "24px",
            }}
          >
            VAQTORAPP
          </div>

          <h1
            style={{
              margin: "0 0 28px",
              color: "#183b24",
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              lineHeight: 1.15,
              fontWeight: 800,
            }}
          >
            LGPD — Proteção de Dados
          </h1>

          <div
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#5d6774",
              fontSize: "1.08rem",
              lineHeight: 1.85,
              textAlign: "left",
            }}
          >
            <p>
              O VaqtorApp respeita a Lei Geral de Proteção de Dados Pessoais
              (LGPD) e adota medidas para proteger os dados tratados em sua
              plataforma.
            </p>

            <p>
              Os dados são utilizados de acordo com as finalidades do serviço
              e com os princípios de segurança, transparência e
              responsabilidade no tratamento de informações.
            </p>

            <p>
              O VaqtorApp busca manter os dados protegidos contra acessos não
              autorizados, alterações, divulgação ou utilização indevida,
              adotando medidas técnicas e organizacionais compatíveis com a
              natureza das informações tratadas.
            </p>

            <p>
              A privacidade e a segurança dos dados dos usuários são
              compromissos importantes para o VaqtorApp.
            </p>
          </div>

          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "36px",
              padding: "14px 28px",
              borderRadius: "12px",
              background: "#16a34a",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            Voltar para o início
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}