import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container-fuid">
      <Navbar />
        {children}
    </div>
  );
};

export default Layout;
