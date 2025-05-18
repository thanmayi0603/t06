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

export const metadata = {
  title: 'Portfolio',
  description: 'Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <body className="bg-black text-white">
        
        <main className="max-w-4xl mx-auto px-4">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
