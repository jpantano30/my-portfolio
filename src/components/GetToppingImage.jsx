async function getToppingImage(toppingId) {
  switch (toppingId) {
    case 'strawberry':
      return (await import('../assets/strawberry.png')).default
    case 'cherry':
      return (await import('../assets/cherry.png')).default
    case 'sprinkles':
      return (await import('../assets/sprinkles.png')).default
    case 'candle':
      return (await import('../assets/candle.png')).default
    default:
      throw new Error('Unknown topping')
  }
}

export default getToppingImage
