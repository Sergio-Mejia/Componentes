import MiNuevoM from 'next/link'
const Ejemplo5B = () => {
    return (
        <div>
            <MiNuevoM href="/ejemplo5a">
                <a>Ir a Ejemplo 5A</a>
            </MiNuevoM>
            <MiNuevoM href="/ejemplo5b">
                <a>Ir a Ejemplo 5B</a>
            </MiNuevoM>
        </div>
    )
}
export default Ejemplo5B;