interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, className = '', children, ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-emerald-500 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}