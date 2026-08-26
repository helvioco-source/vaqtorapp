"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import "./animal.css";

const URL_CONSULTA_PUBLICA =
  "https://script.google.com/macros/s/AKfycbwh2BBLPDUkVYunEz6dgxHPf84QoIvMJcV_zf9mUhcDUtovkvW_4SQyDHP2ubYU-1Cq8g/exec";

type DadosPublicosAnimal = {
  ok: boolean;
  vaqId?: string;
  proprietario?: string;
  fazenda?: string;
  municipio?: string;
  contato?: string;
  erro?: string;
};

function AnimalPublicoConteudo() {
  const searchParams = useSearchParams();

  const [vaqId, setVaqId] = useState("");
  const [dados, setDados] = useState<DadosPublicosAnimal | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [mensagemErro, setMensagemErro] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");

    if (!id) {
      setVaqId("");
      setDados(null);
      setCarregando(false);
      setMensagemErro("Identificação do animal não informada.");
      return;
    }

    const idFormatado = id.toUpperCase();
    const controlador = new AbortController();

    setVaqId(idFormatado);
    setDados(null);
    setCarregando(true);
    setMensagemErro("");

    async function consultarAnimal() {
      try {
        const resposta = await fetch(
          `${URL_CONSULTA_PUBLICA}?id=${encodeURIComponent(idFormatado)}`,
          {
            cache: "no-store",
            signal: controlador.signal,
          }
        );

        if (!resposta.ok) {
          throw new Error("Falha ao consultar os dados públicos.");
        }

        const resultado: DadosPublicosAnimal = await resposta.json();

        if (!resultado.ok) {
          if (resultado.erro === "ANIMAL_INATIVO") {
            setMensagemErro(
              "Este animal não está disponível para consulta pública."
            );
          } else if (resultado.erro === "ANIMAL_NAO_ENCONTRADO") {
            setMensagemErro("Animal não encontrado.");
          } else {
            setMensagemErro(
              "Não foi possível carregar os dados públicos do animal."
            );
          }

          setDados(null);
          return;
        }

        setDados(resultado);
      } catch (erro) {
        if (
          erro instanceof Error &&
          erro.name === "AbortError"
        ) {
          return;
        }

        setDados(null);
        setMensagemErro(
          "Não foi possível carregar os dados públicos do animal."
        );
      } finally {
        setCarregando(false);
      }
    }

    consultarAnimal();

    return () => {
      controlador.abort();
    };
  }, [searchParams]);

  const textoCarregamento = "Consultando...";

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
            {dados?.vaqId || vaqId || "VAQ-00000000"}
          </strong>
        </div>

        {mensagemErro && (
          <p className="animal-public-intro">
            {mensagemErro}
          </p>
        )}

        <div className="animal-public-info">
          <div className="animal-info-item">
            <span className="animal-info-label">
              PROPRIETÁRIO
            </span>

            <strong>
              {carregando
                ? textoCarregamento
                : dados?.proprietario || "Informação não disponível"}
            </strong>
          </div>

          <div className="animal-info-item">
            <span className="animal-info-label">
              FAZENDA
            </span>

            <strong>
              {carregando
                ? textoCarregamento
                : dados?.fazenda || "Informação não disponível"}
            </strong>
          </div>

          <div className="animal-info-item">
            <span className="animal-info-label">
              MUNICÍPIO
            </span>

            <strong>
              {carregando
                ? textoCarregamento
                : dados?.municipio || "Informação não disponível"}
            </strong>
          </div>

          <div className="animal-info-item">
            <span className="animal-info-label">
              CONTATO
            </span>

            <strong>
              {carregando
                ? textoCarregamento
                : dados?.contato || "Informação não disponível"}
            </strong>
          </div>
        </div>

        <div className="animal-public-message">
          <div className="animal-public-message-icon">
            🐄
          </div>

          <p>
            Caso você tenha encontrado este animal,
            entre em contato com o proprietário.
          </p>
        </div>

        <div className="animal-public-footer">
          VaqtorApp • Tecnologia que conecta.
        </div>
      </section>
    </main>
  );
}

export default function AnimalPublico() {
  return (
    <Suspense fallback={null}>
      <AnimalPublicoConteudo />
    </Suspense>
  );
}