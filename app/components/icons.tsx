import React from "react";

type IconProps = {
  className?: string;
  size?: number;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AnimalIcon({
  className = "",
  size = 28,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <path {...stroke} d="M7 11 L4 7 L7 5 L10 9" />
      <path {...stroke} d="M25 11 L28 7 L25 5 L22 9" />
      <path
        {...stroke}
        d="M9 10
           C9 6 23 6 23 10
           L23 19
           C23 23 20 26 16 26
           C12 26 9 23 9 19Z"
      />
      <circle cx="13" cy="15" r="1.2" fill="currentColor" />
      <circle cx="19" cy="15" r="1.2" fill="currentColor" />
      <path {...stroke} d="M14 20 Q16 22 18 20" />
      <path {...stroke} d="M12 11 H20" />
    </svg>
  );
}

export function QRCodeIcon({
  className = "",
  size = 28,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <rect {...stroke} x="4" y="4" width="8" height="8" />
      <rect {...stroke} x="20" y="4" width="8" height="8" />
      <rect {...stroke} x="4" y="20" width="8" height="8" />

      <rect x="7" y="7" width="2" height="2" fill="currentColor" />
      <rect x="23" y="7" width="2" height="2" fill="currentColor" />
      <rect x="7" y="23" width="2" height="2" fill="currentColor" />

      <rect x="17" y="17" width="2" height="2" fill="currentColor" />
      <rect x="21" y="17" width="2" height="2" fill="currentColor" />
      <rect x="25" y="17" width="2" height="2" fill="currentColor" />

      <rect x="17" y="21" width="2" height="2" fill="currentColor" />
      <rect x="25" y="21" width="2" height="2" fill="currentColor" />

      <rect x="21" y="25" width="2" height="2" fill="currentColor" />
      <rect x="25" y="25" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

export function VaccineIcon({
  className = "",
  size = 28,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <path {...stroke} d="M11 21 L21 11" />
      <path {...stroke} d="M8 24 L11 21" />
      <path {...stroke} d="M21 11 L24 8" />
      <path {...stroke} d="M18 8 L24 14" />
      <path {...stroke} d="M8 18 L14 24" />
      <path {...stroke} d="M5 27 L8 24" />
      <path {...stroke} d="M24 8 L27 5" />
    </svg>
  );
}

export function MilkIcon({
  className = "",
  size = 28,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <path
        {...stroke}
        d="M12 4
           H20
           L19 9
           V25
           C19 27 17.5 28 16 28
           C14.5 28 13 27 13 25
           V9Z"
      />
      <path {...stroke} d="M12 9 H20" />
    </svg>
  );
}

export function FinanceIcon({
  className = "",
  size = 28,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <circle {...stroke} cx="16" cy="16" r="11" />
      <path {...stroke} d="M16 9 V23" />
      <path {...stroke} d="M20 12 C19 10 13 10 13 13 C13 17 20 15 20 19 C20 22 14 22 12 20" />
    </svg>
  );
}

export function MobileIcon({
  className = "",
  size = 28,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <rect {...stroke} x="9" y="3" width="14" height="26" rx="3" />
      <circle cx="16" cy="24" r="1.2" fill="currentColor" />
      <path {...stroke} d="M13 7 H19" />
    </svg>
  );
}

export function PrivacyIcon({
  className = "",
  size = 28,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <path
        {...stroke}
        d="M16 4
           L25 8
           V15
           C25 21
           21 25
           16 28
           C11 25
           7 21
           7 15
           V8Z"
      />
      <path {...stroke} d="M16 10 V20" />
      <path {...stroke} d="M12 16 H20" />
    </svg>
  );
}

export function SecurityIcon({
  className = "",
  size = 28,
}: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <rect {...stroke} x="8" y="14" width="16" height="13" rx="2" />
      <path {...stroke} d="M11 14 V10 C11 7 13 5 16 5 C19 5 21 7 21 10 V14" />
      <circle cx="16" cy="20" r="1.5" fill="currentColor" />
      <path {...stroke} d="M16 21.5 V24" />
    </svg>
  );
}