import { Toaster } from "react-hot-toast";
import Footer from "./_components/UI/Footer";
import Header from "./_components/UI/Header";
import { TanstackProvider } from "./_components/Providers/TanstackProvider";
import { AuthProvider } from "./_context/userContext";
import { CartProvider } from "./_context/useCart";

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
      <body className={`max-h-screen`}>
        <TanstackProvider>
          <AuthProvider>
            <CartProvider>
              <Header />
              <div>{children}</div>
              <Footer />
              <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{
                  style: {
                    textAlign: "center",
                  },
                }}
              />
            </CartProvider>
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
