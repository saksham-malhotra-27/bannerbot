import React from 'react';
import html2canvas from 'html2canvas';
import DownloadIcon from './Down';
interface DownloadButtonProps {
  elementId: string;
  label?: string; // Optional with a default value
  format?: string; // Optional with a default value
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  elementId,
  label = "Download as Image",
  format = "png"
}) => {
  const handleDownload = async () => {
    const element = document.getElementById(elementId);
    if (!element) {
      alert("Element not found");
      return;
    }

    html2canvas(element, { scale: window.devicePixelRatio, useCORS: true, logging:true }) // Use device pixel ratio for higher resolution
      .then(canvas => {
        const image = canvas.toDataURL(`image/${format}`);
        const link = document.createElement('a');
        link.href = image;
        link.download = `banner.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(err => {
        console.error("Failed to capture the banner:", err);
        alert("Failed to download the image, please try again.");
      });
  };

  return (
    <button onClick={
      ()=>{
        const handled = async ()=> { await handleDownload()};
        setTimeout(() => {
          handled();
        }, 3000);

      }} className="px-4 py-2 flex items-center space-x-2 bg-green-500 text-white rounded hover:bg-green-700">
      <DownloadIcon />
      <span>{label}</span>
    </button>
  );
};

export default DownloadButton;
