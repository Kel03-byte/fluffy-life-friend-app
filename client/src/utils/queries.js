import { gql } from '@apollo/client'

export const GET_CATS = gql`
query cats {
    cats {
        _id
        name
        sex
        dob
        shy
        otherCats
        dogs
        childU8
        child8to13
        specialReq
        image
    }
}
`;

export const QUERY_SINGLE_CAT = gql`
  query cat($catId: ID!) {
    cat(catId: $catId) {
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
      image
      }
    }
`;