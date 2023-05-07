export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Post: {params.slug}</h1>
    </div>
  );
}
