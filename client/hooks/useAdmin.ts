import { gql, useQuery } from '@apollo/client'
import { CurrentUser } from 'types'
const ADMIN = gql`
  query Admin {
    currentUser {
      name
      googleId
      role
      email
    }
  }
`

export function useAdmin() {
  const { data } = useQuery<CurrentUser>(ADMIN, {
    fetchPolicy: 'cache-only',
  })

  return data?.currentUser?.role?.includes('admin')
}
