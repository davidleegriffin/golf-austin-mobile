import { gql } from "graphql-tag"

export const GET_GOLF = gql`
    query golf {
        golf {
            Name__A 
            Latitude__B 
            Longitude__C 
            ImageUrl__D 
            Description__E 
            Price__F 
            TeeTimes__G 
            DressCode__H 
            Contact__I 
            Address__J 
            Type__K 
            Holes__L 
            Website__M 
        }
    }
`