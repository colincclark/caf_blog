interface PostsByCountryProps {
  params: {
    slug: string;
  };
}

export default function PostsByCountry({ params }: PostsByCountryProps) {
  const { slug } = params;
  return (
    <main>
      <p>These are the posts for country: {slug}.</p>
    </main>
  );
}
