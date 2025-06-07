import axios from 'axios';

export const getAISuggestion = async (violation) => {
  try {
    const response = await axios.post('http://localhost:5000/api/ai/suggest', {
      violation,
    });

    return response.data.suggestion;
  } catch (error) {
    console.error('AI Suggestion Error:', error.message);
    return '⚠️ Failed to fetch suggestion from AI.';
  }
};
