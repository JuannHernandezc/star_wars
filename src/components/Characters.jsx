import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CHARACTERS } from "../graphql/Characters";
import Character from "./Character";
import { Layout } from "antd";

const Characters = () => {
  const { Content } = Layout;
  const { loading, data } = useQuery(GET_CHARACTERS);
  const renderCharacters = () => {
    return data.allPeople.edges.map((item) => {
      return (
        <Character
          key={item.node.id}
          characterId={item.node.id}
          name={item.node.name}
          birthYear={item.node.birthYear}
          eyeColor={item.node.eyeColor}
          gender={item.node.gender}
          hairColor={item.node.hairColor}
          height={item.node.height}
          filmConnection={item.node.filmConnection}
        />
      );
    });
  };
  return (
    <>
      {loading ? (
        <p>Cargando los datos ...</p>
      ) : (
        <Layout className="layout">
          <Content style={{ padding: "50px 50px" }} align="center">
            {renderCharacters()}
          </Content>
        </Layout>
      )}
    </>
  );
};
export default Characters;
