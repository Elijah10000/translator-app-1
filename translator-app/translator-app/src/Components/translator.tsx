import { ChangeEvent, useState } from 'react';
import { translateText } from '../App';
import { languages } from './languages';
interface TranslatorProps {
  value: string;
  text: string;
  onChange: (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onClick: () => void;
}

const inputStyles = "border p-2 rounded-lg";
const buttonStyles = "px-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600";

const LanguageSelector: React.FC<Partial<TranslatorProps>> = ({ value, onChange }) => (
  <select 
    className={`${inputStyles} w-42 max-h-24 overflow-y-auto`}
  value={value} 
  onChange={onChange}>
    {Object.entries(languages).map(([code, name]) => (
      <option key={code} value={code}>
        {name}
      </option>
    ))}
  </select>
);

const TextArea: React.FC<Partial<TranslatorProps>> = ({ value, onChange, onKeyDown }) => (
  <textarea
    className={`${inputStyles} h-[100px] w-full`}
    placeholder="Enter text to translate"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);

const Button: React.FC<Partial<TranslatorProps>> = ({ onClick, text }) => (
  <button className={buttonStyles} onClick={onClick}>
    {text}
  </button>
);

function Translator() {
  const [text, setText] = useState<string>('');
  const [sourceLanguage, setSourceLanguage] = useState<string>('en');
  const [targetLanguage, setTargetLanguage] = useState<string>('es');
  const [translatedText, setTranslatedText] = useState<string>('');

  const handleTranslate = async () => {
    const translatedText = await translateText(text, sourceLanguage, targetLanguage);
    setTranslatedText(translatedText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {
      setText((prevText) => prevText + '\n');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleTranslate();
    }
  };

  const handleSwapLanguages = () => {
  setText('');
  setTranslatedText('');
  const temp = sourceLanguage;
  setSourceLanguage(targetLanguage);
  setTargetLanguage(temp);
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-20">Translation App</h1>
      <div className="p-4 grid grid-cols-3 gap-4 w-3/4">
        <div className="flex flex-col space-y-4 items-center">
          <LanguageSelector value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)} />
          <TextArea value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} />
        </div>
        <div className="flex items-center justify-center">
         <Button text="Translate" onClick={handleTranslate} />
         <Button text="Swap" onClick={handleSwapLanguages} /> 
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <LanguageSelector value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} />
          <div className={`${inputStyles} h-[100px] w-full border p-2 rounded-lg`}>{translatedText}</div>
        </div>
      </div>
    </div>
  );
}

export default Translator;

//.