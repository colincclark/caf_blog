interface PostsByTripProps {
  params: {
    slug: string;
  };
}

export default function PostsByTrip({ params }: PostsByTripProps) {
  const { slug } = params;
  return (
    <main>
      <p>These are the posts for trip: {slug}.</p>
    </main>
  );
}
