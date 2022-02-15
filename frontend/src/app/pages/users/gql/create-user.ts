import { gql } from 'apollo-angular'
import { IUser } from '../../../interfaces'

export interface ICREATE_USER {
  createUser: IUser
}

export const CREATE_USER = gql`
  mutation createUser($createUser: CreateUserInput!) {
    createUser(createUser: $createUser) {
      id
    }
  }
`
