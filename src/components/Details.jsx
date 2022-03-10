import React from "react";
import { Descriptions, Tag, Divider } from "antd";
const Details = ({
  characterId,
  name,
  birthYear,
  eyeColor,
  gender,
  hairColor,
  height,
  filmConnection,
}) => {
  const colors = [
    "volcano",
    "orange",
    "gold",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ];
  const getColor = () => {
    const rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
  };
  return (
    <div>
      <h1>Name: {name}</h1>
      <Descriptions bordered title="Features" size="small">
        <Descriptions.Item label="Birth Year:">{birthYear}</Descriptions.Item>
        <Descriptions.Item label="Eye Color:">{eyeColor}</Descriptions.Item>
        <Descriptions.Item label="Gender:">{gender}</Descriptions.Item>
        <Descriptions.Item label="Hair Color:">{hairColor}</Descriptions.Item>
        <Descriptions.Item label="Height:">{height} cm</Descriptions.Item>
      </Descriptions>
      <div>
        {
          console.log(filmConnection.films)
        }
        <Divider orientation="left">Films</Divider>
        {filmConnection.films.map((item, index) => (
          <Tag key={item.id} color={getColor()}>{item.title} - {item.director}</Tag>
        ))}
      </div>
      <div>
        <Divider orientation="left">Planets</Divider>
        {filmConnection.films.map((item) => (
          item.planetConnection.planets.map(i => {
            return <Tag color={getColor()}>{i.name}</Tag>
          })
        ))}
      </div>
    </div>
  );
};
export default Details;
