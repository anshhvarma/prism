import { ReactNode } from "react";

type PagesLayoutProps = {
  children: ReactNode;
};

const PagesLayout = ({ children }: PagesLayoutProps) => {
  return (
    <>
      <main className="pt-20 lg:p-10">{children}</main>
    </>
  );
};

export default PagesLayout;
