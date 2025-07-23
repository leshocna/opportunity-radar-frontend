
import React, { useEffect, useState } from 'react';

const OpportunityRadar = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await fetch('https://sam-aggregator-backend.onrender.com/opportunities?limit=10');
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
          <li key={opp.noticeId || index} className="opportunity-card">
            <h3>{opp.title}</h3>
            <p><strong>Description:</strong> {opp.description || 'N/A'}</p>
            <p><strong>Notice ID:</strong> {opp.noticeId || 'N/A'}</p>
            <p><strong>NAICS Code:</strong> {opp.naicsCode || 'N/A'}</p>
            <p><strong>Set-Aside:</strong> {opp.typeOfSetAsideDescription || 'N/A'}</p>
            <p><strong>Agency:</strong> {opp.agency || 'N/A'}</p>
            <p><strong>Due:</strong> {opp.responseDeadLine || 'N/A'}</p>
            <p><strong>Category:</strong> {opp.category || 'General'}</p>
            <a href={opp.uiLink} target="_blank" rel="noopener noreferrer">View on SAM.gov</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpportunityRadar;
