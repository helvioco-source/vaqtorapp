import "./Benefits.css";

import {
  AnimalIcon,
  QRCodeIcon,
  VaccineIcon,
  MilkIcon,
  FinanceIcon,
  MobileIcon,
  PrivacyIcon,
  SecurityIcon,
} from "./icons";

const benefits = [
  {
    title: "Cadastro Inteligente",
    text: "Cadastre vacas, novilhas, touros e bezerros em poucos segundos, mantendo todas as informações organizadas em um único lugar.",
    icon: <AnimalIcon size={42} />,
  },
  {
    title: "QR Code Exclusivo",
    text: "Basta apontar a câmera do celular para acessar instantaneamente todo o histórico do animal.",
    icon: <QRCodeIcon size={42} />,
  },
  {
    title: "Controle Sanitário",
    text: "Gerencie vacinas, medicamentos, tratamentos e acompanhe todo o histórico sanitário do rebanho.",
    icon: <VaccineIcon size={42} />,
  },
  {
    title: "Produção de Leite",
    text: "Registre diariamente a produção de cada animal e acompanhe indicadores da fazenda em tempo real.",
    icon: <MilkIcon size={42} />,
  },
  {
    title: "Gestão Financeira",
    text: "Controle receitas, despesas e visualize a rentabilidade da atividade leiteira de forma simples.",
    icon: <FinanceIcon size={42} />,
  },
  {
    title: "100% Mobile",
    text: "Tenha todas as informações da fazenda sempre disponíveis na palma da sua mão, mesmo durante o manejo.",
    icon: <MobileIcon size={42} />,
  },
  {
    title: "Privacidade LGPD",
    text: "Os dados permanecem protegidos e armazenados com total segurança e conformidade com a LGPD.",
    icon: <PrivacyIcon size={42} />,
  },
  {
    title: "Segurança Premium",
    text: "Criptografia, autenticação e acesso protegido garantem tranquilidade para o produtor rural.",
    icon: <SecurityIcon size={42} />,
  },
];

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">

      <div className="benefits-header">

        <span className="section-tag">
          BENEFÍCIOS
        </span>

        <h2>
          Tudo o que sua fazenda precisa
          <br />
          em um único aplicativo.
        </h2>

        <p>
          O VaqtorApp foi desenvolvido para simplificar o dia a dia do produtor,
          centralizando informações do rebanho, produção leiteira, finanças,
          vacinação e identificação por QR Code em uma plataforma moderna,
          rápida e extremamente intuitiva.
        </p>

      </div>

      <div className="benefits-grid">

        {benefits.map((item, index) => (

          <div
            className="card"
            key={index}
          >

            <div className="card-glow"></div>

            <div className="icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}