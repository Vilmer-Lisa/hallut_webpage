import React, { useContext } from 'react';
import { DataContext } from '../strapi-data/CaseProvider'; 

const Case: React.FC = () => {
  const { cases } = useContext(DataContext);
  if (cases.length === 0) {
    return <div className="p-4">Loading cases...</div>;
  }
  console.log("In Case", cases)

  return (
    <div className="p-4">
        <div className="list-disc pl-6">
          {cases.map((singleCase) => (
            <div key={singleCase.id}>
                <h2 >{singleCase.title}</h2><br/>
                <h4 >{singleCase.subheading}</h4><br/>
                <p >{singleCase.text}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Case;
