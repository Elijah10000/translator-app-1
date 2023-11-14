import './style.css';
import Translator from './Components/translator';
import axios from 'axios';
import { useEffect } from 'react';
import { rapidApiKey } from './config';

// eslint-disable-next-line react-refresh/only-export-components
export async function translateText(text: string, sourceLanguage: string, targetLanguage: string) {
  const endpoint = 'https://text-translator2.p.rapidapi.com/translate';

  const encodedParams = new URLSearchParams();
  encodedParams.set('source_language', sourceLanguage);
  encodedParams.set('target_language', targetLanguage);
  encodedParams.set('text', text);

  const options = {
    method: 'POST',
    url: endpoint,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data.data.translatedText;
  } catch (error) {
    return 'Translation error';
  }
}

function App() {
  useEffect(() => {
    async function fetchTranslatedText() {
    }

    fetchTranslatedText();
  }, []);

  return (
    <div>
      <Translator />
    </div>
  );
}

export default App; 