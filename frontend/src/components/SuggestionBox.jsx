import React from 'react';

const SuggestionBox = ({ suggestion, loading }) => {
  return (
    <div className="mt-4 bg-gray-50 p-4 rounded border">
      <h2 className="font-bold mb-2">AI Suggestion:</h2>
      {loading ? (
        <p className="text-sm text-gray-600 italic animate-pulse">Generating suggestion...</p>
      ) : (
        <pre className="whitespace-pre-wrap text-sm">{suggestion}</pre>
      )}
    </div>
  );
};

export default SuggestionBox;
