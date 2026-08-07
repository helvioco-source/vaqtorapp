import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery">

      <h2>Conheça o VAQTORAPP</h2>

      <p className="subtitle">
        Veja algumas das principais telas do aplicativo que já está ajudando
        produtores rurais a controlar seus animais, vacinação, leite e finanças.
      </p>

      <div className="gallery-grid">

        <img src="/prints/home.jpg" alt="Tela Inicial" />

        <img src="/prints/animais.jpg" alt="Lista de Animais" />

        <img src="/prints/ficha.jpg" alt="Ficha do Animal" />

        <img src="/prints/leite.jpg" alt="Registro de Leite" />

        <img src="/prints/financeiro.jpg" alt="Financeiro" />

        <img src="/prints/sanitario.jpg" alt="Histórico Sanitário" />

        <img src="/prints/vacina.jpg" alt="Aplicar Vacina" />

      </div>

    </section>
  );
}