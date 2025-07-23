import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import OpportunityRadar from './components/OpportunityRadar';
import BridgeIntelTracker from './components/BridgeIntelTracker';
import STIPSignalScanner from './components/STIPSignalScanner';
import ProfitEngineDashboard from './components/ProfitEngineDashboard';
import LinkedInMentorship from './components/LinkedInMentorship';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Opportunity Radar</Link>
        <Link to="/bridge">Bridge Intel Tracker</Link>
        <Link to="/stip">STIP Signal Scanner</Link>
        <Link to="/profit">Profit Engine</Link>
        <Link to="/linkedin">LinkedIn Mentorship</Link>
      </nav>
      <Routes>
        <Route path="/" element={<OpportunityRadar />} />
        <Route path="/bridge" element={<BridgeIntelTracker />} />
        <Route path="/stip" element={<STIPSignalScanner />} />
        <Route path="/profit" element={<ProfitEngineDashboard />} />
        <Route path="/linkedin" element={<LinkedInMentorship />} />
      </Routes>
    </div>
  );
}

export default App;