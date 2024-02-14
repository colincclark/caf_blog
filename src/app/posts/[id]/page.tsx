interface PostByIdProps {
  params: {
    id: string;
  };
}

export default function PostById({ params }: PostByIdProps) {
  const { id } = params;
  return (
    <main>
      <p>This is the post with id: {id}.</p>
    </main>
  );
}
