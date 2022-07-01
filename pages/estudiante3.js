import EnlaceNext from 'next/link'

const Estudiante3 = () => {
    return (
        <div>
            <li>
                <EnlaceNext href="/estudiante3">
                    <a>Estudiante</a>
                </EnlaceNext>
            </li>
            <li>
                <EnlaceNext href="/profesor3">
                    <a>Profesor</a>
                </EnlaceNext>
            </li>
            <li>
                <EnlaceNext href="/universidad3">
                    <a>Universidad</a>
                </EnlaceNext>
            </li>
        </div>
    )
}

export default Estudiante3