import React, {useState, useEffect} from 'react';
import './table.css';

const Table = () => {
    const ScrollableTable = () => {
        const [data, setData] = useState([]);
        const [startIndex, setStartIndex] = useState(0);
        const rowsPerPage = 10;
      
        useEffect(() => {
          // Fetch data from your API
          // Replace 'your-api-endpoint' with your actual API endpoint
          fetch('your-api-endpoint')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
        }, []);
      
        // Function to handle scrolling to the next page
        const nextPage = () => {
          setStartIndex(startIndex + rowsPerPage);
        };
      
        // Function to handle scrolling to the previous page
        const prevPage = () => {
          setStartIndex(Math.max(0, startIndex - rowsPerPage));
        };

    return (
        <div>
          <table>
            <thead>
              {/* Table headers */}
            </thead>
            <tbody>
              {data.slice(startIndex, startIndex + rowsPerPage).map((row, index) => (
                <tr key={index}>
                  {/* Render table cells */}
                </tr>
              ))}
            </tbody>
          </table>
    
          {/* Arrow scroll controls */}
          <div>
            <button onClick={prevPage} disabled={startIndex === 0}>Previous</button>
            <button onClick={nextPage} disabled={startIndex + rowsPerPage >= data.length}>Next</button>
          </div>
        </div>
      );
    }
}

export default Table;

