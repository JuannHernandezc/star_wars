import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../graphql/Characters";
import "antd/dist/antd.css";
import { Button, Space, Card, Drawer } from "antd";
import Details from "./Details";


const Character = ({characterId,name,birthYear,eyeColor,gender,hairColor,height,filmConnection}) => {
  const [visible, setVisible] = useState(false);

  const getDrawer = () =>{
    setVisible(true);
  }
  const onClose = () => {
      setVisible(false);
  }
  return (
    <>
      <Space>
        <Card key={characterId} title={name} style={{ width: 300 }}>
          <Button type="primary" size="small" onClick={getDrawer}>
            Details
          </Button>
        </Card>
      </Space>
      <Drawer
        title="Details about Character"
        align="center"
        placement= "right"
        width={1000}
        onClose={onClose}
        visible={visible}
      >
          <Details 
            characterId={characterId}
            name={name}
            birthYear={birthYear}
            eyeColor={eyeColor}
            gender={gender}
            hairColor={hairColor}
            height={height}
            filmConnection={filmConnection} 
          />
      </Drawer>
    </>
  );
};
export default Character;
