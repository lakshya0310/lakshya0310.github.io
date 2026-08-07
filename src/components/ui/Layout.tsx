type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="
      w-screen
      h-screen
      bg-[#080706]
      flex
      items-center
      justify-center
      "
    >
      {children}
    </div>
  );
}