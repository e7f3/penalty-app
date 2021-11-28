import Image from "next/image";

export default function Logo({ ...props }) {
  return (
    <div {...props}>
      <div className="logo-icon">
        <Image src="/logo_icon-icon.svg" alt="ш" width="17.06" height="14" />
      </div>
      <Image
        src="/logo_text-icon.svg"
        alt="штрафов нет"
        width="138"
        height="26"
      />
    </div>
  );
}
