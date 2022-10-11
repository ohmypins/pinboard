import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Board() {
  const { data, error } = useSWR('/api/boards', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}
