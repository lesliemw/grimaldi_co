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
      <body className={`min-h-screen flex flex-col relative`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
