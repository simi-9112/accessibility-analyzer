import React, { useState } from 'react';
import { getAISuggestion } from '../api/suggestFix';
import SuggestionBox from './SuggestionBox';

const ViolationList = ({ violations }) => {
  const [selected, setSelected] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetFix = async (violation) => {
    setSelected(violation);
    setLoading(true);
    const suggestionText = await getAISuggestion(violation);
    setSuggestion(suggestionText);
    setLoading(false);
  };

  return (
    <div>
      {violations.length === 0 ? (
        <p className="text-gray-600">✅ No violations found!</p>
      ) : (
        violations.map((violation, index) => (
          <div key={index} className="p-4 bg-white rounded shadow mb-4">
            <h3 className="font-bold text-lg">{violation.help}</h3>
            <p className="text-gray-700">{violation.description}</p>
            <button
              className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
              onClick={() => handleGetFix(violation)}
            >
              Get AI Fix
            </button>
          </div>
        ))
      )}

      {selected && <SuggestionBox suggestion={suggestion} loading={loading} />}
    </div>
  );
};

export default ViolationList;
