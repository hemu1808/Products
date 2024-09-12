import { useState } from 'react';

export default function Form({ initialData = { title: '', content: '' }, onSubmit }) {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="w-full p-2 border"
      />
      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        className="w-full p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
    </form>
  );
}
