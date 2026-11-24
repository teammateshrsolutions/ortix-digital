import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";

export const logoAvailable = existsSync(join(process.cwd(), "public/brand/ortix-digital-logo.png"));

export function Brand({ preload = false }: { preload?: boolean }) {
  return (
    <Link className="brand" href="/">
      {logoAvailable ? (
        <Image src="/brand/ortix-digital-logo.png" alt="ORTIX DIGITAL home" fill sizes="108px" preload={preload} />
      ) : <span>ORTIX DIGITAL</span>}
    </Link>
  );
}
