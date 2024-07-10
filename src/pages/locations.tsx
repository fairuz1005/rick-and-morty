import { useRecoilValue } from 'recoil';
import { locationsState } from '../recoil/atoms';
import Link from 'next/link';

const Locations = () => {
  const locations = useRecoilValue(locationsState);

  return (
    <div className="container">
      <h1>Characters By Location</h1>
        {Object.keys(locations).length === 0 ? (
            <p>No locations assigned yet.</p>
        ) : (
            Object.entries(locations).map(([locationName, characters]) => (
            <div key={locationName} >
                <h2>{locationName}</h2>
                <div className='row'>
                {characters.map((character) => (       
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
            ))
        )}
    </div>
  );
};

export default Locations;
