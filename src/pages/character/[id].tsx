import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { locationsState, Character } from '../../recoil/atoms';
import { GET_CHARACTER } from '../../apollo/queries/characterQueries';
import Loading from '@/components/Loading';

interface CharacterData {
  character: Character & {
    status: string;
    species: string;
    type: string;
    gender: string;
  };
}

const CharacterDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery<CharacterData>(GET_CHARACTER, { variables: { id } });
  const [locations, setLocations] = useRecoilState(locationsState);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  const handleAssignLocation = () => {
    const locationName = prompt('Enter location name:');
    if (locationName) {
      const characterToAdd = data?.character; // Assuming this is the character object with an id
      if (characterToAdd) {
        setLocations((prevLocations) => {
          const newLocations = { ...prevLocations };
          if (!newLocations[locationName]) {
            newLocations[locationName] = [];
          }
          if (characterExists(newLocations[locationName], characterToAdd) === false){
            newLocations[locationName] = [ ...newLocations[locationName] , characterToAdd];
          } else {
            alert('This character is already added to the location.');
          }
          return newLocations;
        });
      }
    }
  };

  const characterExists = (characters: Character[], character: Character): boolean => {
    return characters.some((c) => c.id === character.id);
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={data?.character.image} alt={data?.character.name} className="card-img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data?.character.name}</h5>
              <p className="card-text">Status: {data?.character.status}</p>
              <p className="card-text">Species: {data?.character.species}</p>
              <p className="card-text">Type: {data?.character.type || 'Unknown'}</p>
              <p className="card-text">Gender: {data?.character.gender}</p>
              <button className="btn btn-primary" onClick={handleAssignLocation}>Assign to Location</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
