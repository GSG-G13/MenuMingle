import request from 'supertest';
import app from '../../app';
import { Cart, Dish, Order } from '../../models';
import { CartStatus } from '../../utils';

describe('addToCart', () => {
  let cartId;

  beforeEach(async () => {
    await Cart.destroy({ where: {} });
    await Order.destroy({ where: {} });
    await Dish.destroy({ where: {} });
  });

  afterEach(async () => {
    await Cart.destroy({ where: {} });
    await Order.destroy({ where: {} });
    await Dish.destroy({ where: {} });
  });

  test('Should add items to cart and return the correct response', async () => {
    const mockRequestBody = {
      orders: [
        {
          dishId: 1,
          quantity: 2,
        },
        {
          dishId: 2,
          quantity: 3,
        },
      ],
      customerId: 1,
      note: 'Test note',
    };

    const response = await request(app)
      .post('/addToCart')
      .send(mockRequestBody)
      .expect(200);

    expect(response.body.error).toBe(false);
    expect(response.body.msg).toBe('the order has been saved successfully');
    expect(response.body.price).toBe(0);
    expect(response.body.cartId).toBeDefined();

    const cart = await Cart.findOne({ where: { id: response.body.cartId } });
    expect(cart).toBeTruthy();
    expect(cart?.note).toBe(mockRequestBody.note);
    expect(cart?.status).toBe(CartStatus.Value1);
    expect(cart?.customerId).toBe(mockRequestBody.customerId);

    const orders = await Order.findAll({
      where: { cart_id: response.body.cartId },
    });
    expect(orders).toHaveLength(mockRequestBody.orders.length);
  });

  test('Should handle Cart.create error and return the correct error response', async () => {
    jest
      .spyOn(Cart, 'create')
      .mockRejectedValueOnce(new Error('Database error'));

    const mockRequestBody = {
      orders: [
        {
          dishId: 1,
          quantity: 2,
        },
      ],
      customerId: 1,
      note: 'Test note',
    };

    const response = await request(app)
      .post('/addToCart')
      .send(mockRequestBody)
      .expect(500);

    expect(response.body.error).toBe(true);
    expect(response.body.msg).toBe('Internal server error');
  });

  test('Should handle Order.bulkCreate error and return the correct error response', async () => {
    jest
      .spyOn(Order, 'bulkCreate')
      .mockRejectedValueOnce(new Error('Database error'));

    const mockRequestBody = {
      orders: [
        {
          dishId: 1,
          quantity: 2,
        },
      ],
      customerId: 1,
      note: 'Test note',
    };

    const response = await request(app)
      .post('/addToCart')
      .send(mockRequestBody)
      .expect(500);

    expect(response.body.error).toBe(true);
    expect(response.body.msg).toBe('Internal server error');
    // Add assertions for any specific error messages or fields if needed
  });
  test('Should handle invalid dishId in the order and return the correct error response', async () => {
    const mockRequestBody = {
      orders: [
        {
          dishId: 999, // Invalid dishId that doesn't exist
          quantity: 2,
        },
      ],
      customerId: 1,
      note: 'Test note',
    };

    const response = await request(app)
      .post('/addToCart')
      .send(mockRequestBody)
      .expect(404);

    expect(response.body.error).toBe(true);
    expect(response.body.msg).toBe('Dish not found');
    // Add assertions for any specific error messages or fields if needed
  });
});
