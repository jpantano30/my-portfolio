import { useState, useEffect } from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import getToppingImage from './GetToppingImage'
import '/Users/jenapantano/BU Masters/cs601fall24/Project/my-portfolio/src/styles/game.css'

function DraggableItem({ id, type }) {
  const [imageUrl, setImageUrl] = useState('')
  const [{ isDragging }, dragRef, preview] = useDrag(() => ({
    type,
    item: { id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  useEffect(() => {
    getToppingImage(id).then(setImageUrl).catch(console.error)
  }, [id])

  if (!imageUrl) return null 

  return (
    <>
      <DragPreviewImage connect={preview} src={imageUrl} />
      <img className={`draggable-image ${isDragging ? 'dragging' : ''}`} ref={dragRef} src={imageUrl} alt={`Topping ${id}`} />
    </>
  )
}

export default DraggableItem
