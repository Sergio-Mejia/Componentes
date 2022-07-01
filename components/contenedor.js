import Menu_navegacion from './menu_navegacion2'
const Contenedor = (props) => (
    <div>
        <Menu_navegacion />
        <div>
            {props.children}
        </div>
    </div>
)
export default Contenedor;