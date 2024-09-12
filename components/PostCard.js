import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <div className="flex justify-between mt-4">
        <Link href={`/edit/${post.id}`}>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Edit</button>
        </Link>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => handleDelete(post.id)}>Delete</button>
      </div>
    </div>
  );
}
