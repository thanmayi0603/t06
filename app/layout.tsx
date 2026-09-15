// import './globals.css'

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-900 text-white">{children}</body>
//     </html>
//   )
// }
import './globals.css';
import Navbar from './components/Navbar';
import { ThemeSwitcher } from './components/theme-switcher';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Portfolio',
  description: 'Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
   <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50  rounded-2xl p-1">
            <ThemeSwitcher />
          </div>
      {/* <div className="flex items-center space-x-4 fixed right-4 top-1/2 -translate-y-1/2 z-50  rounded-2xl  p-1">
  <ThemeSwitcher />
</div> */}



  
  



        <main className="max-w-4xl mx-auto px-4">
          <Navbar />
          {children}
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
