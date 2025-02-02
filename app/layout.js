import { Toaster } from "react-hot-toast";
import Footer from "./_components/UI/Footer";
import Header from "./_components/UI/Header";
import { TanstackProvider } from "./_components/Providers/TanstackProvider";
import { AuthProvider } from "./_context/userContext";

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
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
