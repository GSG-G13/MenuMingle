import { Socket } from 'socket.io';

export const sendOrderToKitchen = async (
  socket: Socket,
  cartId: number,
  orders: {
    id: number;
    ingredients: string;
  },
) => {
  try {
    // socket.join(`${cartId}`);

    console.log(socket.id);

    socket.emit('newOrders', JSON.stringify({ cartId, orders }));
  } catch (error) {
    console.log(error);
  }
};
