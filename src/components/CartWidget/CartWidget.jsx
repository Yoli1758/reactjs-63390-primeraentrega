import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Iconos } from '../Iconos/Iconos'

export default function CartWidget() {
  return (
    <a className="nav-link" style={{paddingLeft:'10px',color:'orange'}}><Iconos css='icon'   icon={faCartShopping}/><span className="badge text-bg-secondary" >4</span></a>
  )
}
