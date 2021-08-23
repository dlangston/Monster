import React, { useState } from "react";
import { Card } from '../Card';
import { StyledLayoutContent } from '../../Layout/Layout';

function FetchAPI() {
  const [data, setData] = useState([]);

  // const apiGet = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1/photos?_start=0&_limit=9")
    .then((response) => response.json())
    .then((photos) => {
          setData(photos);
        });
      
  // };
  // <button onClick={apiGet}>Fetch API</button> 

  return (
      <StyledLayoutContent area="content" columns="repeat(auto-fill, 228px)" gap="56px" >
          {data.slice(0, 9).map((data) => (
            <Card url={data.url} />
          ))}
      </StyledLayoutContent>
  );
}

export default FetchAPI;