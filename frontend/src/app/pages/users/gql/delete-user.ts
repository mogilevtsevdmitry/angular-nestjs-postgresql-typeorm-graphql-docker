import { gql } from 'apollo-angular'

export interface IDELETE_USER {
  removeUser: number
}

export const DELETE_USER = gql`
  mutation deleteUser($id: Float!) {
    removeUser(id: $id)
  }
`
