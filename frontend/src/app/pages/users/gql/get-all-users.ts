import { gql } from 'apollo-angular'
import { IUser } from '../../../interfaces'

export interface IGET_ALL_USERS {
  getAllUsers: IUser[]
}

export const GET_ALL_USERS = gql`
    query getAllUsers {
      getAllUsers {
        id
        name
      }
    }
`
