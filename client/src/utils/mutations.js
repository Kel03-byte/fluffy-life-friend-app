import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        _id
        username
        email
        password
    }
  }
`;

export const ADD_CAT = gql`
mutation addCat(
  $name: String!
  $dob: String!
  $sex: String!
  $shy: String!
  $otherCats: String!
  $dogs: String!
  $childU8: String!
  $child8to13: String!
  $specialReq: String!
  ) {
    addCat(
      name: $name,
      dob: $dob,
      sex: $sex,
      shy: $shy,
      otherCats: $otherCats,
      dogs: $dogs,
      childU8: $childU8,
      child8to13: $child8to13,
      specialReq: $specialReq,
      ) {
        _id
        name
        dob
        sex
        shy
        otherCats
        dogs
        childU8
        child8to13
        specialReq
    }
  }
`;