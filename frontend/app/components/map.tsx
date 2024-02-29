import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import { useMemo } from 'react';

const MapComponent = () => {
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      mapTypeId: "terrain",
    }),
    []
  );
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_API_KEY',
    libraries: libraries as any,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      options={mapOptions}
      zoom={14}
      center={mapCenter}
      mapContainerStyle={{ width: '800px', height: '800px' }}
      onLoad={() => console.log('Map Component Loaded...')}
    />
  );
};

export default MapComponent;