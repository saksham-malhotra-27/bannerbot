"use client"
import React, { useState, useEffect } from 'react';

interface ImageOption {
  id: string;
  src: string;
}

interface Banner {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  textColor: string;
}

interface EditBannerTemplateBsProps {
  isOpen: boolean;
  onClose: () => void;
  banner: Banner;
  onSave: (banner: Banner) => void;
  backgrounds: ImageOption[];
  otherImages: ImageOption[];
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ isOpen, onClose, banner, onSave, backgrounds, otherImages }) => {
  const [form, setForm] = useState<Banner>(banner);
  const [selectedBackground, setSelectedBackground] = useState<string>(banner.background);
  const [selectedImage, setSelectedImage] = useState<string>(banner.image);

  useEffect(() => {
    setForm((prev) => ({ ...prev, background: selectedBackground }));
  }, [selectedBackground]);

  useEffect(() => {
    setForm((prev) => ({ ...prev, image: selectedImage }));
  }, [selectedImage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'image' | 'background') => {
    const file = e.target.files?.[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onload = () => setForm((prev) => ({ ...prev, [field]: reader.result as string }));
      reader.readAsDataURL(file);
    } else {
      alert('Only JPG and PNG files are allowed.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`z-30 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end`}>
      <form className="bg-white w-full p-4 rounded-t-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Edit Banner</h2>
        <div className="mt-4">
          <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded mb-2" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded mb-2" />
          <input type="text" name="cta" value={form.cta} onChange={handleChange} placeholder="Call to Action" className="w-full p-2 border rounded mb-2" />

          <h3 className="font-bold mt-4">Select or Upload Background</h3>
          <input type="file" onChange={(e) => handleFileChange(e, 'background')} accept="image/png, image/jpeg" className="mb-2" />
          <div className="flex space-x-2 overflow-x-auto py-2">
            {backgrounds.map(bg => (
              <img key={bg.id} src={bg.src} alt="Background" className={`h-20 w-20 rounded-full cursor-pointer ${bg.src === selectedBackground ? 'border-4 border-green-500' : 'hover:border-4 hover:border-blue-500'}`} onClick={() => setSelectedBackground(bg.src)} />
            ))}
          </div>

          <h3 className="font-bold mt-4">Select or Upload Image</h3>
          <input type="file" onChange={(e) => handleFileChange(e, 'image')} accept="image/png, image/jpeg" className="mb-2" />
          <div className="flex space-x-2 overflow-x-auto py-2">
            {otherImages.map(img => (
              <img key={img.id} src={img.src} alt="Other Image" className={`h-20 w-20 rounded-full cursor-pointer ${img.src === selectedImage ? 'border-4 border-green-500' : 'hover:border-4 hover:border-blue-500'}`} onClick={() => setSelectedImage(img.src)} />
            ))}
          </div>

          <h3 className="font-bold mt-4">Text Color</h3>
          <select name="textColor" value={form.textColor} onChange={handleChange} className="w-full p-2 border rounded mb-2">
            <option value="text-white">White</option>
            <option value="text-black">Black</option>
            <option value="text-red-400">Red</option>
            <option value="text-blue-400">Blue</option>
            <option value="text-green-400">Green</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 mr-2 bg-gray-300 rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditBannerTemplateBs;
