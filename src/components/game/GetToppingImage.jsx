async function getToppingImage(toppingId) {
  switch (toppingId) {
    case 'strawberry':
      return (await import('/Users/jenapantano/BU Masters/cs601fall24/Project/my-portfolio/src/assets/strawberry.png')).default
    case 'cherry':
      return (await import('/Users/jenapantano/BU Masters/cs601fall24/Project/my-portfolio/src/assets/cherry.png')).default
    case 'sprinkles':
      return (await import('/Users/jenapantano/BU Masters/cs601fall24/Project/my-portfolio/src/assets/sprinkles.png')).default
    case 'candle':
      return (await import('/Users/jenapantano/BU Masters/cs601fall24/Project/my-portfolio/src/assets/candle.png')).default
    default:
      throw new Error('Unknown topping')
  }
}

export default getToppingImage
