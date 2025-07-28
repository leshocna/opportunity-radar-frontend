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
        <ul>
          <li><Link to="/">Opportunity Radar</Link></li>
          <li><Link to="/bridge-intel">Bridge Intel Tracker</Link></li>
          <li><Link to="/stip-signal">STIP Signal Scanner</Link></li>
          <li><Link to="/profit-engine">Profit Engine</Link></li>
          <li><Link to="/mentorship">LinkedIn Mentorship</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<OpportunityRadar />} />
        <Route path="/bridge-intel" element={<BridgeIntelTracker />} />
        <Route path="/stip-signal" element={<STIPSignalScanner />} />
        <Route path="/profit-engine" element={<ProfitEngineDashboard />} />
        <Route path="/mentorship" element={<LinkedInMentorship />} />
      </Routes>
    </div>
  );
}

export default App;
