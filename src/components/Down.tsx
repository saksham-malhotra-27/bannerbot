import React from 'react';

const DownloadIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg className={`w-6 h-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14v6a2 2 0 002 2h12a2 2 0 002-2v-6m-5-5l-5 5m0 0l-5-5m5 5V3" />
    </svg>
  );
};

export default DownloadIcon;
