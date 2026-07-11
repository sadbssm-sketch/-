import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Radar from './components/Radar';
import 'leaflet/dist/leaflet.css';

export default function App() {
  const position = [33.3128, 44.3615]; 

  return (
    <div style={styles.appContainer}>
      <div style={styles.sidebar}>
        <h2 style={styles.title}>RADAR CONTROL</h2>
        <Radar />
        <div style={styles.infoBox}>
          <p>📡 الطائرات المكتشفة: 2</p>
          <p>🔒 حالة النظام: متصل نشط</p>
        </div>
      </div>

      <div style={styles.mapWrapper}>
        <MapContainer center={position} zoom={5} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[33.3128, 44.3615]}>
            <Popup>رحلة رقم: IA101 <br /> الارتفاع: 30,000 قدم</Popup>
          </Marker>
          <Marker position={[30.0444, 31.2357]}>
            <Popup>رحلة رقم: MS777 <br /> الارتفاع: 35,000 قدم</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

const styles = {
  appContainer: { display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#111', color: '#fff', overflow: 'hidden' },
  sidebar: { width: '300px', backgroundColor: '#1a1a1a', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', borderRight: '2px solid #333' },
  title: { textAlign: 'center', fontSize: '18px', color: '#00ff00', fontFamily: 'monospace', letterSpacing: '2px' },
  infoBox: { backgroundColor: '#222', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', border: '1px solid #444', fontSize: '13px', lineHeight: '1.8' },
  mapWrapper: { flex: 1, height: '100%' }
};
