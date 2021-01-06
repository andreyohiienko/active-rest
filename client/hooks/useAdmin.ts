import { gql, useQuery } from '@apollo/client'
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
  const { data } = useQuery(ADMIN, {
    fetchPolicy: 'cache-only',
  })

  return data?.currentUser?.role?.includes('admin')
}
