// import clsx from 'clsx';
// import Contact from './components/Contact';
// export default function Home() {
//   return (
//     <main className="max-w-4xl mx-auto px-4">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between py-4 border-b border-gray-600">
//         {/* <div className="text-green-600 font-semibold text-xl">Gale codes</div> */}
// <div className="text-3xl font-extrabold font-mono bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text tracking-wide">
//   {"t06"}
// </div>





//         <div className="space-x-6">
//           <a href="#" className="hover:text-purple-400">Blog</a>
//           <a href="#" className="hover:text-purple-400">About</a>
//           <a href="#" className="hover:text-purple-400">Dashboard</a>
//           <a href="#" className="hover:text-purple-400">Guest</a>
//           <a href="#contact" className="hover:text-purple-400">Contact</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="flex flex-col-reverse sm:flex-row items-start mt-10 mb-8">
//         {/* Text */}
//         <div className="flex flex-col basis-2/3 justify-start pr-8">
//           <h1 className="text-4xl font-bold text-pink-600 mb-2">Hi, I'm Thanmayi J R</h1>
//           {/* <p className="text-blue-400 mt-2">Web developer</p> */}
//            <h2 className="text-gray-700 dark:text-gray-200 mb-2">
//               <span className="relative inline-block group overflow-hidden">
//                 <span
//                   className={clsx(
//                     'bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500',
//                     'after:bg-gradient-to-r block transform transition-transform duration-500 group-hover:translate-y-full'
//                   )}
//                 >
//                   Web developer{' '}
//                 </span>
//                 <span
//                   className={clsx(
//                     'bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500',
//                     'after:bg-gradient-to-r absolute inset-0 block transform translate-y-full transition-transform duration-500 group-hover:translate-y-0'
//                   )}
//                 >
//                   And a Student
//                 </span>
//               </span>
//             </h2>
//           <p className=" text-gray-600 dark:text-gray-400 mb-3">
//             A  wizard of code, weaving stories through projects and applications. I’m passionate about web development and an enthusiast for technology, constantly crafting web experiences and building tools that make an impact.
//           </p>
//         </div>

//         {/* Image */}
//         <div className="flex basis-1/3 justify-end w-[120px]  mb-8 sm:mb-0 mr-8">
//           <img
//             src="./girl.png" // Replace with actual image path in public folder
//             alt="Thanmayi"
//             className="w-45 h-45 rounded-full object-cover border-4 border-pink-600"
//           />
//         </div>
//       </div>
//       <section id="contact" className="mt-16">
//         <Contact />
//       </section>
//     </main>
//   );
// }
import clsx from 'clsx';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col-reverse sm:flex-row items-start mt-10 mb-8">
        {/* Text */}
        <div className="flex flex-col basis-2/3 justify-start pr-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">Hi, I'm Thanmayi J R</h1>
          {/* <p className="text-blue-400 mt-2">Web developer</p> */}
          <h2 className="text-gray-700 dark:text-gray-200 mb-2">
            <span className="relative inline-block group overflow-hidden">
              <span
                className={clsx(
                  'bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500',
                  'after:bg-gradient-to-r block transform transition-transform duration-500 group-hover:translate-y-full'
                )}
              >
                Web developer{' '}
              </span>
              <span
                className={clsx(
                  'bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-green-500',
                  'after:bg-gradient-to-r absolute inset-0 block transform translate-y-full transition-transform duration-500 group-hover:translate-y-0'
                )}
              >
                And a Student
              </span>
            </span>
          </h2>
          <p className=" text-gray-600 dark:text-gray-400 mb-3">
            A  wizard of code, weaving stories through projects and applications. I’m passionate about web development and an enthusiast for technology, constantly crafting web experiences and building tools that make an impact.
          </p>
        </div>

        {/* Image */}
        <div className="flex basis-1/3 justify-end w-[120px]  mb-8 sm:mb-0 mr-8">
          <img
            src="./girl.png" // Replace with actual image path in public folder
            alt="Thanmayi"
            className="w-45 h-45 rounded-full object-cover border-4 border-transparent"
 
          />
        </div>
      </div>
    </main>
  );
}
