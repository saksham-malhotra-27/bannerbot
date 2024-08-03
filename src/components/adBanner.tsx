import React from 'react';

interface BannerImageCompProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  textColor: string;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({
  title,
  description,
  cta,
  image,
  background,
  textColor,
}) => {
  return (
    <div className="relative p-4 m-4 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${background})` }}>
      
      {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />}
      <div className={textColor}> 
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
        <p className="mt-2">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">{cta}</button>
      </div>
    </div>
  );
};

export default BannerImageComp;
