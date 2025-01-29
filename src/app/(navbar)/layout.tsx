import Navbar from "./Navbar";

export default function Navbarlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
       <Navbar/>
        <div className="">
            {children}
        </div>
    </div>
  );
}
