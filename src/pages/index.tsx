import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_CHARACTERS } from '../apollo/queries/characterQueries';
import { Character } from '../recoil/atoms';
import Loading from '@/components/Loading';

interface CharactersData {
  characters: {
    results: Character[];
  };
}

const CharactersList = () => {
  const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1 className="my-4">Characters List</h1>
      <div className="row">
        {data?.characters.results.map((character) => (
          <div key={character.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <Link href={`/character/${character.id}`}>
              <div className="card h-100 text-center">
                <img src={character.image} alt={character.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
