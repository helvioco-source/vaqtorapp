import "./Showcase.css";

export default function AppShowcase() {
  return (
    <section className="showcase">

      <div className="showcase-title">
        <h2>Conheça o VAQTORAPP</h2>

        <p>
          Veja como é simples controlar sua fazenda diretamente pelo celular.
        </p>
      </div>

      <div className="phone">

        <img
          src="/prints/lista.jpg"
          alt="Tela do aplicativo"
        />

      </div>

    </section>
  );
}