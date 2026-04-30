import "./globals.css";

export const metadata = {
  title: "Olive - The Safest Way to Shop for Groceries",
  description:
    "Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family's Diet",
  icons: {
    icon: "/vercel.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
