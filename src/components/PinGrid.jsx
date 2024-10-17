import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPins } from '../redux/pinSlice';
import PinItem from './PinItem';

const PinGrid = () => {
  const dispatch = useDispatch();
  const pins = useSelector((state) => state.pins.pins);
  const pinStatus = useSelector((state) => state.pins.status);
  const error = useSelector((state) => state.pins.error);

  useEffect(() => {
    if (pinStatus === 'idle') {
      dispatch(fetchPins());
    }
  }, [pinStatus, dispatch]);

  return (
    <div className="pin-grid">
      {pinStatus === 'loading' && <p>Cargando...</p>}
      {pinStatus === 'succeeded' &&
        pins.map(pin => (
          <PinItem key={pin.id} pin={pin} />
        ))}
      {pinStatus === 'failed' && <p>Error: {error}</p>}
    </div>
  );
};

export default PinGrid;
