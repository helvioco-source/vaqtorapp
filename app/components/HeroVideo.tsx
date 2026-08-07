"use client";

import "./Hero.css";

export default function HeroVideo() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-content">

        <span className="hero-badge">
          Gestão Inteligente para Pecuária Leiteira e Gado de Corte
        </span>

        <h1>
          O jeito mais moderno de gerenciar todos os animais da sua fazenda.
        </h1>

        <p>
          Controle seus animais, vacinação, reprodução,
          produção, despesas, receitas e identifique
          rapidamente cada animal pelo QR Code,
          tudo em um único aplicativo.
        </p>

      </div>

      <div className="hero-video-container">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          controls
        >

          <source
            src="/videos/vaqtorapp.mp4"
            type="video/mp4"
          />

          Seu navegador não suporta vídeo.

        </video>

      </div>

    </section>
  );
}