import { gql } from 'apollo-angular';
const GETALLFILMS = gql`
query AllFilms {
  allFilms {
    films {
      title
      director
      releaseDate
      speciesConnection {
        species {
          name
          classification
          homeworld {
            name
          }
        }
      }
    }
  }
}
`
export {GETALLFILMS}