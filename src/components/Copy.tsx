import React from 'react';

const CopyIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg className={`w-6 h-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-2M16 1h-4a2 2 0 00-2 2v2h4a2 2 0 012 2v4h2a2 2 0 002-2V3a2 2 0 00-2-2z" />
    </svg>
  );
};

export default CopyIcon;
