import Aux from "../hoc/Aux"
import   './layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import { Sidedrawer } from "../Navigation/SideDrawer/Sidedrawer";

 const Layout=(props)=>(
     <Aux>
     <div style={{textAlign:'left'}}>
       toolbar, <Toolbar/> sidebar,backdrop
       {/* <Sidedrawer/> */}
     </div>

<main className='content'>
{props.children}
</main>
</Aux>
 )
 export default Layout;