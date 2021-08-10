import { gql } from '@apollo/client'

export const GET_CATS = gql`
query getCats {
    cats {
        name
        sex
        dob
        shy
        otherCats
        dogs
        childU8
        child8t13
        specialReq
    }
}
`