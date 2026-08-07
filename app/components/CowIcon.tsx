export default function CowIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chifres */}
      <path
        d="M18 18
           C13 12 8 13 7 18
           C10 17 13 19 15 23"
        stroke="#16A34A"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M46 18
           C51 12 56 13 57 18
           C54 17 51 19 49 23"
        stroke="#16A34A"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cabeça */}
      <path
        d="M20 22
           C20 14 44 14 44 22
           L44 38
           C44 48 38 54 32 54
           C26 54 20 48 20 38
           Z"
        fill="#16A34A"
      />

      {/* Orelhas */}
      <ellipse
        cx="16"
        cy="28"
        rx="5"
        ry="8"
        fill="#16A34A"
      />

      <ellipse
        cx="48"
        cy="28"
        rx="5"
        ry="8"
        fill="#16A34A"
      />

      {/* Olhos */}
      <circle cx="27" cy="31" r="2" fill="white" />
      <circle cx="37" cy="31" r="2" fill="white" />

      {/* Focinho */}
      <ellipse
        cx="32"
        cy="42"
        rx="8"
        ry="6"
        fill="white"
      />

      <circle cx="29" cy="42" r="1.3" fill="#16A34A" />
      <circle cx="35" cy="42" r="1.3" fill="#16A34A" />

      {/* Boca */}
      <path
        d="M29 46
           Q32 48
           35 46"
        stroke="#16A34A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}