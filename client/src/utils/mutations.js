import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
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

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`
export const UPDATE_DOB = gql`
mutation updateDob( $catId: ID!, $dob: String ) {
  updateDob(catId: $catId, dob: $dob) {
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
`
export const UPDATE_SEX = gql`
mutation updateSex( $catId: ID!, $sex: String ) {
  updateSex(catId: $catId, sex: $sex) {
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
`
export const UPDATE_SHY = gql`
mutation updateShy( $catId: ID!, $shy: String ) {
  updateShy(catId: $catId, shy: $shy) {
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
`
export const UPDATE_OTHER_CATS = gql`
mutation updateOtherCats( $catId: ID!, $otherCats: String ) {
  updateOtherCats(catId: $catId, otherCats: $otherCats) {
    _id
    name
    dob
    sex
    shy6T
    otherCats
    dogs
    childU8
    child8to13
    specialReq
  }
}
`
export const UPDATE_DOGS = gql`
mutation updateDogs( $catId: ID!, $dogs: String ) {
  updateDogs(catId: $catId, dogs: $dogs) {
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
`
export const UPDATE_CHILDU8 = gql`
mutation updateChildU8( $catId: ID!, $childU8: String ) {
  updateChildU8(catId: $catId, childU8: $childU8) {
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
`
export const UPDATE_CHILDO8 = gql`
mutation updateChild8to13( $catId: ID!, $child8to13: String ) {
  updateChild8to13(catId: $catId, child8to13: $child8to13) {
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
`
export const UPDATE_SPEC_REQ = gql`
mutation updateSpecialReq( $catId: ID!, $specialReq: String ) {
  updateSpecialReq(catId: $catId, specialReq: $specialReq) {
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
`

export const REMOVE_CAT = gql`
mutation removeCat($catId: ID!) {
  removeCat(catId: $catId) {
    _id
    }
}
`;