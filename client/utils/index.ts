import { useAdmin } from 'hooks'

export const serverUrl = 'http://localhost:5000/'

export const isEditable = (setState: (e: string) => void) => {
  const isAdmin = useAdmin()

  return isAdmin ? { onChange: (e: string) => setState(e) } : false
}
