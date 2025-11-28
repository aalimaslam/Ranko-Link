import Link from "next/link";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="group">
      <Link
        href={href}
        className="text-blue-200 hover:text-white flex items-center space-x-2 group-hover:translate-x-1 transition"
      >
        <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100" />
        <span>{children}</span>
      </Link>
    </li>
  );
}
export default FooterLink;
