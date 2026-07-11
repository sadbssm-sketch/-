import React, { useEffect, useState } from 'react';

export default function Radar() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 2) % 360);
    }, 16); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.radarBody}>
        <div style={{ ...styles.circle, width: '100%', height: '100%' }}></div>
        <div style={{ ...styles.circle, width: '75%', height: '75%' }}></div>
        <div style={{ ...styles.circle, width: '50%', height: '50%' }}></div>
        <div style={{ ...styles.circle, width: '25%', height: '25%' }}></div>
        <div style={styles.axisH}></div>
        <div style={styles.axisV}></div>
        <div style={{ ...styles.sweepLine, transform: `rotate(${rotation}deg)` }}></div>
        <div style={{ ...styles.blip, top: '30%', left: '40%' }}></div>
        <div style={{ ...styles.blip, top: '65%', left: '70%' }}></div>
      </div>
      <div style={styles.statusText}>AIRCRAFT RADAR: SCANNING...</div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a1108', padding: '20px', borderRadius: '12px', fontFamily: 'monospace', color: '#00ff00' },
  radarBody: { position: 'relative', width: '250px', height: '250px', backgroundColor: 'rgba(0, 20, 0, 0.6)', borderRadius: '50%', border: '2px solid #00ff00', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  circle: { position: 'absolute', borderRadius: '50%', border: '1px dashed rgba(0, 255, 0, 0.3)' },
  axisH: { position: 'absolute', width: '100%', height: '1px', backgroundColor: 'rgba(0, 255, 0, 0.3)' },
  axisV: { position: 'absolute', width: '1px', height: '100%', backgroundColor: 'rgba(0, 255, 0, 0.3)' },
  sweepLine: { position: 'absolute', width: '50%', height: '50%', top: '0', left: '50%', transformOrigin: 'bottom left', background: 'linear-gradient(90deg, rgba(0,255,0,0.4) 0%, rgba(0,255,0,0) 10%)', borderLeft: '2px solid #00ff00' },
  blip: { position: 'absolute', width: '6px', height: '6px', backgroundColor: '#00ff00', borderRadius: '50%', boxShadow: '0 0 10px #00ff00' },
  statusText: { marginTop: '15px', fontSize: '12px', letterSpacing: '2px' }
};
