import React, { useState } from "react";
import ScanForm from "../components/ScanForm";
import ScanResults from "../components/ScanResults";

const Home = () => {
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <ScanForm onResult={setScanResult} setLoading={setLoading} />
      {loading && (
        <p className="text-blue-600 font-medium animate-pulse mb-2">🔍 Scanning website...</p>
      )}
      <ScanResults result={scanResult} onClear={() => setScanResult(null)} />
    </div>
  );
};

export default Home;
