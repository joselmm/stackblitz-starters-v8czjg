import React from 'react';
const SuggestionsComponent = ({ suggestionList }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item disabled">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
};

export default SuggestionsComponent;
