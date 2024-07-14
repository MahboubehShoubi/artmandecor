import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({subsets:["latin"] , weight:"300"});

export const metadata = {
  title: "ArtMan Decor",
  description: "ArtMan Decor is active in the field of designing and manufacturing cabinets and wooden products",
  authors: [{ name: 'Mahboubeh Shoubi', url: 'https://shoubi.ir' }], 
  creator: 'Mahboubeh Shoubi',
  keywords: ['Cobinet', 'ShowCase', 'Closet' , 'Tv Stand', 'Design' ,'kitchen' , 'CNC'],
  icons: { icon:"./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={roboto.className} >{children}</body>
    </html>
  );
}
