import { gql, useQuery } from '@apollo/client'
const ADMIN = gql`
  query Admin {
    admin: currentUser {
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

  return data?.admin?.role?.includes('admin')
}
