import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
