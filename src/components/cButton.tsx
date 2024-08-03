"use client"
import React from 'react';
import CopyIcon from './Copy';

const CopyHtmlButton = ({ elementId, label = "Copy HTML" }: {elementId: string, label:string}) => {
  const copyHtmlToClipboard = () => {
    //console.log(elementId)
    const element = document.getElementById(elementId);
    if (!element) {
      alert("Element not found");
      return;
    }
    const html = element.outerHTML; // Includes the element itself
    navigator.clipboard.writeText(html).then(() => {
      alert('HTML copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <button onClick={copyHtmlToClipboard} className="px-4 py-2 flex items-center space-x-2 bg-blue-500 text-white rounded hover:bg-blue-700">
    <CopyIcon />
    <span>{label}</span>
  </button>
  );
};

export default CopyHtmlButton;
