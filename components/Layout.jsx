import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
}
