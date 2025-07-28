
import React, { useEffect, useState } from 'react';

const OpportunityRadar = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await fetch('https://sam-aggregator-backend.onrender.com/opportunities?limit=200');
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setOpportunities(data.opportunitiesData || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  if (loading) return <p>Loading opportunities...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Live Federal Opportunities</h2>
      <ul>
        {opportunities.map((opp, index) => (
          <li key={index}>
            <strong>{opp.title}</strong><br />
            Agency: {opp.agency || 'N/A'}<br />
            Due: {opp.responseDeadLine || 'N/A'}<br />
            Category: {opp.category || 'General'}<br />
            NAICS Code: {opp.naicsCode || 'N/A'}<br />
            Set-Aside: {opp.typeOfSetAsideDescription || 'N/A'}<br />
            Notice ID: {opp.noticeId || 'N/A'}<br />
            <a href={opp.uiLink} target="_blank" rel="noopener noreferrer">View on SAM.gov</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpportunityRadar;
