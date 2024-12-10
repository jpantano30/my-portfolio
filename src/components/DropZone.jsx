import { useRef } from 'react'
import { useDrop } from 'react-dnd'

function DropZone({ onDrop, children }) {
  const ref = useRef(null) 

  const [, dropRef] = useDrop({
    accept: "topping",
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset()
      if (clientOffset && ref.current) {
        const dropZoneRect = ref.current.getBoundingClientRect()
        const left = clientOffset.x - dropZoneRect.left
        const top = clientOffset.y - dropZoneRect.top
        onDrop(item.id, left, top)
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })

  dropRef(ref)

  return (
    <div ref={ref} style={{ width: '300px', height: '300px', position: 'relative' }}>
      {children}
    </div>
  )
}

export default DropZone