import './Icon.scss'
import {useRef, useState} from 'react'
import {useFrame} from '@react-three/fiber'

function Icon(props:any){

    const ref:any = useRef();

    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    useFrame((state, delta) => (ref.current.rotation.x += 0.02));

    return(
        <>
                <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.3 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        >
        <cylinderGeometry args={[2,2,.5]} />
        <meshStandardMaterial
            wireframe={props.wireframe}
            color={hovered ? "darkRed" : "white"}
        />
        </mesh>
    </>
        
        
    )
}

export default Icon