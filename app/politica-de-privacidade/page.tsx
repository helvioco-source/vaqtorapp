import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PoliticaDePrivacidade() {
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
              margin: "0 0 24px",
              color: "#183b24",
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              lineHeight: 1.15,
              fontWeight: 800,
            }}
          >
            Política de Privacidade
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "680px",
              color: "#5d6774",
              fontSize: "1.12rem",
              lineHeight: 1.8,
            }}
          >
            Seus dados são tratados conforme a LGPD.
          </p>

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