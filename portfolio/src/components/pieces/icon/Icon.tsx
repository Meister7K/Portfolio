import './Icon.scss'
import {useRef, useState} from 'react'
import {useFrame} from '@react-three/fiber'

function Icon(props:any){

    const ref:any = useRef();

    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    useFrame((_state, _delta) => (ref.current.rotation.x += 0.02));

    return(
        <>
                <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.3 : 1}
        onClick={(_event) => click(!clicked)}
        onPointerOver={(_event) => hover(true)}
        onPointerOut={(_event) => hover(false)}
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