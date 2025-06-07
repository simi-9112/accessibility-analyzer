const ScanResults = ({ result, onClear }) => {
  if (!result) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    alert("📋 Report copied to clipboard!");
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "accessibility-report.json";
    a.click();
  };

  return (
    <div className="bg-gray-50 p-4 rounded shadow mt-4">
      <h2 className="text-xl font-bold mb-2">Results for: {result.url}</h2>
      <p>
        Lighthouse Score:{" "}
        <strong
          className={
            result.lighthouseScore >= 90
              ? "text-green-600"
              : result.lighthouseScore >= 50
              ? "text-yellow-600"
              : "text-red-600"
          }
        >
          {result.lighthouseScore}
        </strong>
      </p>

      <div className="flex gap-2 mt-3 flex-wrap">
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          🔄 Rescan
        </button>
        <button
          onClick={onClear}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          🗑️ Clear Results
        </button>
        <button
          onClick={handleCopy}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          📋 Copy Report
        </button>
        <button
          onClick={handleExport}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          📤 Export JSON
        </button>
      </div>

      <h3 className="text-lg mt-5 mb-2 font-semibold">
        Accessibility Violations:
      </h3>
      {result.axeViolations.length === 0 ? (
        <p className="text-green-600">✅ No violations found</p>
      ) : (
        result.axeViolations.map((v, i) => (
          <div key={i} className="border p-3 mb-3 rounded bg-white">
            <h4 className="font-semibold">{v.help}</h4>
            <p>{v.description}</p>
            <p className="text-sm text-gray-600">Impact: {v.impact}</p>
            <pre className="bg-gray-100 p-2 rounded mt-2 whitespace-pre-wrap overflow-auto">
              {v.nodes?.[0]?.html}
            </pre>
          </div>
        ))
      )}
    </div>
  );
};

export default ScanResults;
