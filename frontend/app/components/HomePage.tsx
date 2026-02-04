import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden p-8 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>Unipay</div>
        <Navbar />
        <div>Connect Wallet</div>
      </div>

      {/* Hero Section */}
      <div className="flex-1 bg-linear-to-tr from-black via-gray-800 to-gray-400 rounded-2xl my-6 p-8">
        Unipay
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center gap-8">
        <div>ETHGlobal</div>
        <div>LI.FI</div>
        <div>ENS</div>
      </div>
    </div>
  );
};

export default HomePage;
