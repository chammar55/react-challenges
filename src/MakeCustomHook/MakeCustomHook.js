import { useState } from "react";

function useGeolocation(setCountClicks) {
  // custom hook
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }
  return { isLoading, position, error, getPosition };
}

export default function MakeCustomHook() {
  const [countClicks, setCountClicks] = useState(0);

  const {
    isLoading,
    position: { lat, lng }, // destructuring like bellow code
    error,
    getPosition,
  } = useGeolocation(setCountClicks);
  // const { lat, lng } = position;

  function handleClick9() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div>
      <button onClick={handleClick9} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
