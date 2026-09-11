import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
};

export function LinkButton({ href, children, variant }: LinkButtonProps) {
  const variantStyle =
    variant === "primary"
      ? "bg-green-600 text-white hover:bg-green-700"
      : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100";

  return (
    <Link
      href={href}
      className={`rounded-md px-6 py-3 font-semibold transition ${variantStyle}`}
    >
      {children}
    </Link>
  );
}
