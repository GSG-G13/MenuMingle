// keep this file for later I am gonna  try working on it if we had more time later

// import React, { useState } from 'react';
// import CartItem from './cartItem';

// const SwipeItem = ({ item, onDelete, onIncrement, onDecrement }) => {
//   const [swipeStart, setSwipeStart] = useState(0);
//   const [swipeEnd, setSwipeEnd] = useState(0);

//   const handleSwipeStart = event => {
//     setSwipeStart(event.touches ? event.touches[0].clientX : event.clientX);
//   };

//   const handleSwipeMove = event => {
//     setSwipeEnd(event.touches ? event.touches[0].clientX : event.clientX);
//   };

//   const handleSwipeEnd = () => {
//     const swipeDistance = swipeEnd - swipeStart;
//     const swipeThreshold = 100;

//     if (swipeDistance < -swipeThreshold) {
//       onDelete();
//     }

//     setSwipeStart(0);
//     setSwipeEnd(0);
//   };

//   return (
//     <div
//       className="SwipeItem"
//       onTouchStart={handleSwipeStart}
//       onTouchMove={handleSwipeMove}
//       onTouchEnd={handleSwipeEnd}
//       onMouseDown={handleSwipeStart}
//       onMouseMove={handleSwipeMove}
//       onMouseUp={handleSwipeEnd}
//     >
//       <CartItem
//         key={item.id}
//         item={item}
//         onIncrement={onIncrement}
//         onDecrement={onDecrement}
//       />
//     </div>
//   );
// };

// export default SwipeItem;
