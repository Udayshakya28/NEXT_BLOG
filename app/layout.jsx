import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";

export const metadata = {
  title: "NextBlog",
  description: "Discover & Share Blog",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    </head>

    <body>
      <Provider>

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <Footer />
        </main>

      </Provider>
    </body>
  </html>
);

export default RootLayout;
