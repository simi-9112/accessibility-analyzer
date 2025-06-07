import React, { useState } from "react";
import axios from "axios";

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const ScanForm = ({ onResult,setLoading }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleScan = async () => {
    setError("");

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/scan", { url });
      onResult(response.data);
    } catch (err) {
      setError("Scan failed. Please try again.");
      console.error("Scan failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <button
        onClick={handleScan}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Scanning..." : "Scan Website"}
      </button>

      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
};

export default ScanForm;
