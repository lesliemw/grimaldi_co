import { Toaster } from "react-hot-toast";
import Footer from "./_components/UI/Footer";
import Header from "./_components/UI/Header";
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
        <Header />
        <div>{children}</div>
        <Footer />
        <Toaster
          toastOptions={{
            style: {
              textAlign: "center",
            },
          }}
        />
      </body>
    </html>
  );
}
