"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import "./animal.css";

export default function AnimalPublico() {
  const searchParams = useSearchParams();

  const [vaqId, setVaqId] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      setVaqId(id.toUpperCase());
    }
  }, [searchParams]);

  return (
    <main className="animal-public-page">
      <section className="animal-public-card">

        <div className="animal-public-logo">
          <img
            src="/logo.png"
            alt="VaqtorApp"
          />
        </div>

        <div className="animal-public-brand">
          VAQTORAPP
        </div>

        <div className="animal-public-tag">
          IDENTIFICAÇÃO PÚBLICA DO ANIMAL
        </div>

        <h1>
          Animal identificado
        </h1>

        <p className="animal-public-intro">
          Este QR Code pertence a um animal cadastrado
          no VaqtorApp.
        </p>

        <div className="animal-public-id">
          <span>VAQ ID</span>
          <strong>
            {vaqId || "VAQ-00000000"}
          </strong>
        </div>

        <div className="animal-public-info">

          <div className="animal-info-item">
            <span className="animal-info-label">
              PROPRIETÁRIO
            </span>

            <strong>
              Informação do proprietário
            </strong>
          </div>

          <div className="animal-info-item">
            <span className="animal-info-label">
              FAZENDA
            </span>

            <strong>
              Informação da fazenda
            </strong>
          </div>

          <div className="animal-info-item">
            <span className="animal-info-label">
              MUNICÍPIO
            </span>

            <strong>
              Cidade — Estado
            </strong>
          </div>

          <div className="animal-info-item">
            <span className="animal-info-label">
              CONTATO
            </span>

            <strong>
              Telefone do proprietário
            </strong>
          </div>

        </div>

        <div className="animal-public-message">

          <div className="animal-public-message-icon">
            🐄
          </div>

          <p>
            Se caso você encontrou esse animal,
            entre em contato com o Proprietário.
          </p>

        </div>

        <div className="animal-public-footer">
          VaqtorApp • Tecnologia que conecta.
        </div>

      </section>
    </main>
  );
}