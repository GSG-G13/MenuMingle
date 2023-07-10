import { Request, Response, NextFunction } from 'express';
import { Order, Cart } from '../../models';
import { getInProgress } from '../../controllers';

describe('getInProgress', () => {
  beforeEach(async () => {
    await Cart.destroy({ where: {} });
    await Order.destroy({ where: {} });
  });

  afterEach(async () => {
    await Cart.destroy({ where: {} });
    await Order.destroy({ where: {} });
  });

  test('Should return the carts with "in progress" status and associated orders', async () => {
    // Create mock Cart instances with "in progress" status
    const mockCart1 = {
      id: 1,
      status: 'in progress',
    };
    const mockCart2 = {
      id: 2,
      status: 'in progress',
    };

    // Mock the Cart.findAll method to return the mock Cart instances
    Cart.findAll = jest.fn().mockResolvedValueOnce([mockCart1, mockCart2]);

    const mockRequest = {} as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await getInProgress(mockRequest, mockResponse, mockNext);

    expect(Cart.findAll).toHaveBeenCalledWith({
      include: [
        {
          model: Order,
        },
      ],
      where: {
        status: 'in progress',
      },
    });
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: false,
      data: [mockCart1, mockCart2],
    });
  });

  test('Should handle errors and call the error handling middleware', async () => {
    const mockError = new Error('Database error');

    // Mock the Cart.findAll method to throw an error
    Cart.findAll = jest.fn().mockRejectedValueOnce(mockError);

    const mockRequest = {} as Request;
    const mockResponse = {} as Response;
    const mockNext = jest.fn() as NextFunction;

    await getInProgress(mockRequest, mockResponse, mockNext);

    expect(Cart.findAll).toHaveBeenCalledWith({
      include: [
        {
          model: Order,
        },
      ],
      where: {
        status: 'in progress',
      },
    });
    expect(mockNext).toHaveBeenCalledWith(mockError);
    expect(mockResponse.json).not.toHaveBeenCalled();
  });
});
