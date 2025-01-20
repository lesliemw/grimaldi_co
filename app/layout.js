import { Toaster } from "react-hot-toast";
import Footer from "./_components/UI/Footer";
import Header from "./_components/UI/Header";
import { TanstackProvider } from "./_components/Providers/TanstackProvider";
import { UserProvider } from "./_context/userContext";
import { ProductsProvider } from "./_context/productsContext";

import "./_styles/globals.css";

export const metadata = {
  title: {
    template: "%s  |  Grimaldi & Co.",
    default: "Welcome |  Grimaldi & Co.",
  },
  description: "Online shop for high-end and luxury goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen`}>
        <TanstackProvider>
          <ProductsProvider>
            <UserProvider>
              <Header />
              <div>{children}</div>
              <Footer />
              <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                  style: {
                    textAlign: "center",
                  },
                }}
              />
            </UserProvider>
          </ProductsProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
