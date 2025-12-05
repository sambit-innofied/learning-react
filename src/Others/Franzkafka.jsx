import React from "react";

const user = {
  name: "Franz Kafka",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/960px-Franz_Kafka%2C_1923.jpg",
  imageSize: 90,
};

function franzkafka() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"photo of" + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}

export default franzkafka;
