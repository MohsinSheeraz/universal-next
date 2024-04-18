// "use client";

// import { usePathname } from "next/navigation";
// import ScrollToTop from "./components/ScrollToTop";

// // import Providers from "../../components/Providers";

// // import "../../styles/globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = usePathname();
//   const hideBanner = router?.startsWith("/post/") ? false : true;
//   return (
//     <html>
//       <body className="max-w-7xl mx-auto bg-[#F8F8F8] dark:bg-[#222] ">
//         {/* <Providers> */}
//         <ScrollToTop />
//         {/* {hideBanner && <Banner />} */}
//         {children}
//         {/* </Providers> */}
//       </body>
//     </html>
//   );
// }
