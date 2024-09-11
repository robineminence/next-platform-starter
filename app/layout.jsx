import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

// export const metadata = {
//   title: "gapo gapi",
//   description: "haha Generated bu 2 min",
// };
export async function generateMetadata() {

  return {
    title: "site_name1",
    description: "site_description1",
    openGraph: {
      title: "site_name2",
      description: "site_description2",
   
    },
    twitter: {
    
      title: "site_name3",
      description: "site_description3",
    },
    skype: {
    
      title: "site_name4",
      description: "site_description4",
    },
  };
}

export default async function RootLayout({ children }) {
  const metadata = await generateMetadata();
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
