
import React, { useRef } from 'react';

const copyToClipboard = (text) => {
  const textarea = document.createElement('textarea');
  textarea.textContent = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
};

const CodeBlock = ({ code }) => {
  const codeRef = useRef(null);

  const handleCopyClick = () => {
    if (codeRef.current) {
      copyToClipboard(codeRef.current.innerText);
    }
  };

  return (
    <div className="relative">
      <pre className="bg-gray-800 p-4 mt-2 rounded text-gray-200">
        <code ref={codeRef}>{code}</code>
      </pre>
      <button
        onClick={handleCopyClick}
        className="absolute top-1 right-1 bg-gray-600 text-gray-100 py-1 px-2 rounded"
      >
        Copy
      </button>
    </div>
  );
};

export default CodeBlock;
