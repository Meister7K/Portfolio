import './Home.scss'
import Icon from '../../pieces/icon/Icon'
import {Canvas} from '@react-three/fiber'

function Home() {
  return (
    <>
    <div className='home'>
      <div className='mask'>
        <h1>Hello</h1>
      </div>
      <div className='mask'>
        <h1 className='port'>Welcome to my portfolio</h1>
        <br/>
      </div>
      <Canvas>
        <pointLight position={[10,10,10]}/>
        <Icon/>
      </Canvas>
      
    </div>
    
    </>
  )
}

export default Home