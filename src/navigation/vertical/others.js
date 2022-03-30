// ** Icons Import
import { Menu, Circle, EyeOff, Folder, LifeBuoy, Shield } from 'react-feather'

export default [
  {
    header: 'Misc'
  },
  {
    id: 'access-control',
    title: 'Access Control',
    icon: <Shield size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/access-control'
  }
  
]
