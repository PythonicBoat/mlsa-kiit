import Navbar from "@/components/navbar";
import { ILayoutProps } from "@/types";

export default function HomeLayout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}