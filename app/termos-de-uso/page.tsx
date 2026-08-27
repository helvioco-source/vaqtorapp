import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermosDeUso() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "60vh",
          padding: "90px 22px",
          background:
            "linear-gradient(180deg, #fbfdff 0%, #eef6ff 100%)",
          boxSizing: "border-box",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "60px 40px",
            background: "rgba(255,255,255,.94)",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,.75)",
            boxShadow: "0 20px 50px rgba(0,0,0,.08)",
            boxSizing: "border-box",
            color: "#30343b",
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
              margin: "0 0 12px",
              color: "#183b24",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              lineHeight: 1.15,
              fontWeight: 800,
            }}
          >
            Termos de Uso
          </h1>

          <p
            style={{
              margin: "0 0 40px",
              color: "#6b7280",
              fontSize: "1rem",
            }}
          >
            VAQTORAPP — Aplicativo de Controle de Rebanho/Gado para
            Produtores Rurais
          </p>

          <div
            style={{
              textAlign: "left",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            <div
              style={{
                marginBottom: "36px",
                padding: "24px",
                borderRadius: "18px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
              }}
            >
              <h2 style={{ marginTop: 0 }}>Identificação da Empresa</h2>
              <p style={{ marginBottom: 0 }}>
                <strong>VAQTORAPP GESTAO DE DADOS LTDA</strong>
                <br />
                Nome fantasia: VAQTORAPP
                <br />
                Sociedade Empresária Limitada — ME
                <br />
                CNPJ: 68.819.492/0001-85
                <br />
                Endereço: Rua 1, s/n, Quadra 1, Lote 10, Setor Lima,
                Sanclerlândia/GO, CEP 76.160-000
                <br />
                E-mail: vaqtorapp@gmail.com
                <br />
                Telefone: (64) 99283-1256
                <br />
                Representantes legais: Helvio Ferreira de Melo Côrtes e
                Valmir Alves de Andrade
              </p>
            </div>

            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao utilizar o VAQTORAPP, o Usuário declara que leu,
              compreendeu e concorda com estes Termos de Uso. Caso não
              concorde com qualquer disposição, deverá interromper a
              utilização do aplicativo.
            </p>

            <h2>2. Sobre o VAQTORAPP</h2>
            <p>
              O VAQTORAPP é um aplicativo destinado ao controle e
              gerenciamento de rebanho para Produtores Rurais, permitindo o
              registro e a consulta de informações relacionadas aos animais
              e às atividades cadastradas pelo Usuário.
            </p>

            <h2>3. Implantação e Assinatura</h2>
            <p>
              A utilização do VAQTORAPP ocorrerá mediante contratação do
              serviço. O valor promocional de lançamento da implantação é de
              R$ 3.890,00 (três mil oitocentos e noventa reais), em parcela
              única ou em até 4 (quatro) parcelas sem juros. A mensalidade é
              de R$ 149,00 (cento e quarenta e nove reais), conforme as
              condições da contratação.
            </p>

            <p>
              Não haverá período de teste gratuito. A implantação do sistema
              será realizada uma única vez, conforme as condições acordadas
              entre as partes.
            </p>

            <h3>3.1. Valor Promocional de Lançamento</h3>
            <p>
              O valor de R$ 3.890,00 constitui condição promocional de
              lançamento do VAQTORAPP. A promoção poderá ser encerrada ou
              alterada a qualquer momento, a critério do VAQTORAPP.
            </p>

            <p>
              Qualquer novo valor será aplicado exclusivamente aos novos
              Produtores Rurais que formalizarem a contratação após o
              encerramento ou a alteração da promoção. Os Produtores Rurais
              que já tiverem formalizado a contratação manterão integralmente
              o valor acordado, não lhes sendo exigidos reajuste,
              complementação, diferença de preço, cobrança retroativa ou
              qualquer pagamento adicional em razão do encerramento ou da
              alteração da promoção.
            </p>

            <p>
              Para novas contratações, o valor-base vigente será informado
              previamente. Quando o cadastro inicial dos animais for
              solicitado à equipe de suporte do VAQTORAPP, será aplicado
              acréscimo sucessivo e cumulativo de 25% (vinte e cinco por
              cento) sobre o valor da faixa imediatamente anterior para cada
              nova faixa de até 100 (cem) animais. O cálculo partirá do
              valor-base vigente apresentado na proposta comercial.
            </p>

            <h2>4. Kit de Implantação</h2>
            <p>
              Como parte da implantação, o Produtor Rural receberá um Kit
              composto pelos seguintes itens:
            </p>

            <ol>
              <li>
                100 brincos bovinos numerados, fabricados em material TPU;
              </li>
              <li>
                100 brincos bovinos sem numeração, acompanhados de etiquetas
                impressas com os respectivos QR Codes dos animais cadastrados
                no aplicativo;
              </li>
              <li>
                1 dispositivo Tablet novo, na caixa, PC Mil de 10 polegadas,
                Android 13 ou equivalente;
              </li>
              <li>1 extrator de brinco bovino tipo navalha;</li>
              <li>1 alicate aplicador de brincos bovinos;</li>
              <li>
                1 pomada cicatrizante Unguento, pote de 250 g.
              </li>
            </ol>

            <h2>5. Responsabilidade pelo Kit</h2>
            <p>
              A responsabilidade pelo devido cuidado, conservação,
              manuseio, utilização adequada, substituição de peças
              danificadas ou quebradas e eventual troca dos demais itens
              integrantes do Kit fornecido será de inteira responsabilidade
              do Usuário.
            </p>

            <p>
              O Usuário deverá utilizar os equipamentos e acessórios de
              maneira adequada, observando as orientações de segurança e
              conservação aplicáveis a cada item.
            </p>

            <h2>6. Responsabilidades do Usuário</h2>
            <p>
              O Usuário é responsável pela veracidade, atualização e
              integridade das informações inseridas no VAQTORAPP, bem como
              pela utilização adequada do sistema.
            </p>

            <p>
              O Usuário também é responsável pela guarda de suas credenciais
              de acesso e por impedir que terceiros não autorizados utilizem
              sua conta.
            </p>

            <h2>7. Suporte</h2>
            <p>
              O suporte ao Usuário será prestado por meio de ligações
              telefônicas, mensagens de texto e áudio por aplicativos de
              comunicação, como WhatsApp, quando disponível, e também por
              contato via e-mail.
            </p>

            <h2>8. Disponibilidade do Serviço</h2>
            <p>
              O VAQTORAPP depende de serviços de terceiros, infraestrutura de
              internet, plataformas de armazenamento e demais tecnologias
              necessárias ao seu funcionamento. Por esse motivo, poderão
              ocorrer indisponibilidades temporárias decorrentes de
              manutenção, falhas técnicas ou fatores externos.
            </p>

            <h2>9. Propriedade Intelectual</h2>
            <p>
              O VAQTORAPP, sua identidade visual, estrutura, funcionalidades,
              textos, elementos gráficos, código e demais componentes
              relacionados ao sistema são protegidos pela legislação
              aplicável e não poderão ser copiados, modificados,
              distribuídos ou explorados sem autorização.
            </p>

            <h2>10. Alterações dos Termos</h2>
            <p>
              Estes Termos de Uso poderão ser atualizados sempre que
              necessário para adequação do serviço, alterações legais,
              melhorias ou modificações nas funcionalidades do VAQTORAPP.
            </p>

            <h2>11. Encerramento da Utilização</h2>
            <p>
              O acesso ao VAQTORAPP poderá ser encerrado nas hipóteses
              previstas na contratação, inclusive em caso de inadimplência,
              uso indevido do sistema ou descumprimento destes Termos.
            </p>

            <h2>12. Proteção de Dados Pessoais</h2>
            <p>
              O tratamento de dados pessoais relacionado ao VAQTORAPP será
              realizado conforme a legislação brasileira aplicável,
              especialmente a Lei nº 13.709/2018 — Lei Geral de Proteção de
              Dados Pessoais (LGPD).
            </p>

            <p>
              Os dados utilizados pelo sistema serão armazenados em
              infraestrutura de banco de dados da plataforma Google
              AppSheet, observadas as condições de utilização e segurança
              aplicáveis aos serviços utilizados.
            </p>

            <h2>13. Foro</h2>
            <p>
              Fica eleito o Foro da Comarca de Sanclerlândia — GO para
              dirimir quaisquer dúvidas ou controvérsias decorrentes destes
              Termos de Uso, com renúncia expressa a qualquer outro foro, por
              mais privilegiado que seja.
            </p>

            <h2>14. Informações de Contato</h2>
            <p>
              <strong>VAQTORAPP GESTAO DE DADOS LTDA</strong>
              <br />
              Nome fantasia: VAQTORAPP
              <br />
              CNPJ: 68.819.492/0001-85
              <br />
              Representantes legais: Helvio Ferreira de Melo Côrtes e Valmir
              Alves de Andrade
              <br />
              E-mail: vaqtorapp@gmail.com
              <br />
              Telefone: (64) 99283-1256
              <br />
              Rua 1, s/n, Quadra 1, Lote 10, Setor Lima
              <br />
              CEP 76.160-000 — Sanclerlândia/GO
              <br />
              Site: vaqtorapp.vercel.app
            </p>

            <p
              style={{
                marginTop: "45px",
                paddingTop: "25px",
                borderTop: "1px solid #e5e7eb",
                color: "#6b7280",
                fontSize: ".9rem",
              }}
            >
              <strong>
                VAQTORAPP — Versão 1.2 — 27 de agosto de 2026
              </strong>
            </p>

            {/* BOTÃO VOLTAR PARA O INÍCIO */}
            <div
              style={{
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              <a
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  background: "#16a34a",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 700,
                  transition: "opacity .2s ease",
                }}
              >
                Voltar para o início
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
