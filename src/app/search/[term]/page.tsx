interface SearchByTermProps {
  params: {
    term: string;
  };
}

export default function SearchByTerm({ params }: SearchByTermProps) {
  const { term } = params;
  return (
    <main>
      <p>This is the search page for search term: {term}.</p>
    </main>
  );
}
