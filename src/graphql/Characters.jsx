import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
{
	allPeople{
    edges{
      node{
        id
        name
      }
    }
  }
}
`;

