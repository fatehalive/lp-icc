import Link from "next/link";

export default function CtaButton({ title, to }: { title: string, to: string }) {
  return (
    <div>
        <Link href={to}>{title}</Link>
    </div>
  );
}
