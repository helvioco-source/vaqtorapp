import "./Benefits.css";
import Image from "next/image";

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

const eliteItems = [
  "Genealogia e linhagem organizadas",
  "Dados do reprodutor e da matriz",
  "Registros genéticos especiais",
  "Mais valor para o rebanho de elite",
];

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits-header">
        <div className="benefits-badges">
          <span className="section-tag">BENEFÍCIOS</span>
          <span className="elite-tag">🏆 GADO DE ELITE</span>
        </div>

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

      <div className="elite-highlight">
        <div className="elite-image-wrap">
          <Image
            src="/images/boi-elite.jpg"
            alt="Bovino de elite em destaque"
            fill
            sizes="(max-width: 1100px) 100vw, 50vw"
            className="elite-image"
            priority
          />

          <div className="elite-image-overlay" />

          <div className="elite-image-topbar">
            <span className="elite-gold-badge">🏆 GADO DE ELITE</span>
            <span className="elite-new-badge">NOVO</span>
          </div>

          <div className="elite-image-caption">
            <strong>Genética que merece destaque.</strong>
            <span>Organização, histórico e valorização em um só lugar.</span>
          </div>
        </div>

        <div className="elite-content">
          <span className="elite-kicker">RECURSO PREMIUM</span>

          <h3>REGISTRE SEUS ANIMAIS COM GENÉTICA</h3>

          <p>
            O VaqtorApp também oferece um cadastro especial para
            <strong> Gado de Elite</strong>, reunindo informações de
            <strong> genealogia</strong>, <strong>linhagem</strong>,
            <strong> reprodutor</strong>, <strong>matriz</strong> e registros
            importantes para quem trabalha com seleção e valorização genética.
          </p>

          <div className="elite-points">
            {eliteItems.map((item, index) => (
              <div className="elite-point" key={index}>
                <span className="elite-point-icon">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="elite-actions">
            <a
              href="https://wa.me/5564992831256?text=Olá! Quero saber mais sobre o cadastro de Gado de Elite do VaqtorApp."
              target="_blank"
              rel="noopener noreferrer"
              className="elite-button"
            >
              <span>Saiba mais</span>
              <span className="elite-button-arrow">→</span>
            </a>

            <span className="elite-note">
              Mais controle para genética, seleção e valorização do rebanho.
            </span>
          </div>
        </div>
      </div>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-glow"></div>

            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
