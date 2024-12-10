import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DraggableItem from '../components/game/DraggableItem'
import DropZone from '../components/game/DropZone'
import baseCake from '../assets/cake.png'
import '../styles/game.css'

function Game() {
  const [toppings, setToppings] = useState([])

  const handleDrop = (toppingId, left, top) => {
    setToppings(prev => [...prev, { id: toppingId + Date.now(), toppingId, left, top }])
  }

  const removeTopping = (id) => {
    setToppings(prev => prev.filter(topping => topping.id !== id))
  }


  return (
    <div>
      <h1>Drag and Drop Cake Decorating Game</h1>
      <p>Instructions: Choose a topping from the side bar and drag it onto the cake. If you would like to remove a topping, just click on it.</p>
      <DndProvider backend={HTML5Backend}>
        <div className="game-container" >
          <div className="drag-items">
            <DraggableItem id="strawberry" type="topping" imageUrl="../assets/strawberry.png" />
            <DraggableItem id="cherry" type="topping" imageUrl="../assets/cherry.png" />
            <DraggableItem id="sprinkles" type="topping" imageUrl="../assets/sprinkles.png" />
            <DraggableItem id="candle" type="topping" imageUrl="../assets/candle.png" />
          </div>
          <DropZone onDrop={handleDrop}>
            <img className='cakeImg' src={baseCake} alt="Base cake" />
            {toppings.map(topping => (
              <img className='toppingImg' key={topping.id} src={require(`../assets/${topping.toppingId}.png`)} style={{left: `${topping.left}px`, top: `${topping.top}px`}} alt={`${topping.toppingId}`} onClick={() => removeTopping(topping.id)} />
            ))}
          </DropZone>
        </div>
      </DndProvider>
    </div>
  )
}

export default Game
