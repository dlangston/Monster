import React, { useState } from "react";
import { Card } from '../Card';
import { StyledLayoutContent } from '../../Layout/Layout';

function FetchAPI() {
    const [data, setData] = useState([]);

  //Get Method
  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/photos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  // <button onClick={apiGet}>Fetch API</button> 

  return (
      <StyledLayoutContent area="content" columns="repeat(auto-fill, 228px)" gap="56px" >
          {apiGet()}
          {data.slice(0, 9).map((item) => (
            <Card url={item.url} />
          ))}
      </StyledLayoutContent>
  );
}

export default FetchAPI;