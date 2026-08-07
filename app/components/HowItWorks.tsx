import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how">

      <h2>Como funciona?</h2>

      <p className="subtitle">
        Em poucos passos você começa a controlar toda a fazenda pelo celular.
      </p>

      <div className="steps">

        <div className="step">
          <div className="number">1</div>

          <h3>Cadastre os animais</h3>

          <p>
            Registre cada animal com suas principais informações,
            foto e número do brinco.
          </p>
        </div>

        <div className="step">
          <div className="number">2</div>

        <h3>Coloque o Brinco com QR Code</h3>


          <p>
              Coloque o brinco com QR Code no animal para facilitar a identificação e consultar todas as informações sempre que necessário.

          </p>
        </div>

        <div className="step">
          <div className="number">3</div>

          <h3>Controle a fazenda</h3>

          <p>
            Registre vacinações, leite, despesas,
            receitas e consulte tudo em segundos.
          </p>
        </div>

      </div>

    </section>
  );
}