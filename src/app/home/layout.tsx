export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='mt-5'>
        {children}
      </div>
          
    );
  }