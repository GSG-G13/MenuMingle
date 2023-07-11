import { Request, Response, NextFunction } from 'express';
import { Cart } from '../../models';
import { CustomError, StatusCodes } from '../../utils';
import { getCartStatus } from '../../controllers';

describe('getCartStatus', () => {
  beforeEach(async () => {
    await Cart.destroy({ where: {} });
  });

  afterEach(async () => {
    await Cart.destroy({ where: {} });
  });

  test('Should return the cart status when a valid cartId is provided', async () => {
    const mockCartId = '123';

    // Create a mock Cart instance with the desired status
    const mockCart = {
      status: 'completed', // Provide the desired status value
    };

    // Mock the Cart.findByPk method to return the mock Cart instance
    Cart.findByPk = jest.fn().mockResolvedValueOnce(mockCart);

    const mockRequest = {
      query: { cartId: mockCartId },
    } as unknown as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await getCartStatus(mockRequest, mockResponse, mockNext);

    expect(Cart.findByPk).toHaveBeenCalledWith(mockCartId, {
      attributes: ['status'],
    });
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: false,
      data: mockCart.status,
    });
  });

  test('Should return a message when no orders are found for the given cartId', async () => {
    const mockCartId = '123';

    // Mock the Cart.findByPk method to return null, indicating no orders found
    Cart.findByPk = jest.fn().mockResolvedValueOnce(null);

    const mockRequest = {
      query: { cartId: mockCartId },
    } as unknown as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await getCartStatus(mockRequest, mockResponse, mockNext);

    expect(Cart.findByPk).toHaveBeenCalledWith(mockCartId, {
      attributes: ['status'],
    });
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: false,
      data: 'you do not have any orders',
    });
  });

  test('Should handle missing cartId and throw a CustomError with BadRequest status', async () => {
    const mockRequest = {
      query: {},
    } as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await getCartStatus(mockRequest, mockResponse, mockNext);

    expect(mockNext).toHaveBeenCalledWith(
      new CustomError(StatusCodes.BadRequest, 'no cart id was provided'),
    );
    expect(mockResponse.json).not.toHaveBeenCalled();
  });
  test('Should handle errors thrown by Cart.findByPk and call the error handling middleware', async () => {
    const mockCartId = '123';

    // Mock the Cart.findByPk method to throw an error
    Cart.findByPk = jest
      .fn()
      .mockRejectedValueOnce(new Error('Database error'));

    const mockRequest = {
      query: { cartId: mockCartId },
    } as unknown as Request;
    const mockResponse = {} as Response;
    const mockNext = jest.fn() as NextFunction;

    await getCartStatus(mockRequest, mockResponse, mockNext);

    expect(Cart.findByPk).toHaveBeenCalledWith(mockCartId, {
      attributes: ['status'],
    });
    expect(mockNext).toHaveBeenCalledWith(new Error('Database error'));
  });

  test('Should return an error response when an unknown error occurs', async () => {
    const mockCartId = '123';

    // Mock the Cart.findByPk method to throw an unknown error
    Cart.findByPk = jest.fn().mockRejectedValueOnce(new Error('Unknown error'));

    const mockRequest = {
      query: { cartId: mockCartId },
    } as unknown as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await getCartStatus(mockRequest, mockResponse, mockNext);

    expect(Cart.findByPk).toHaveBeenCalledWith(mockCartId, {
      attributes: ['status'],
    });
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: true,
      msg: 'An error occurred',
    });
  });

  test('Should handle a missing cartId and throw a CustomError with BadRequest status', async () => {
    const mockRequest = {
      query: {},
    } as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await getCartStatus(mockRequest, mockResponse, mockNext);

    expect(mockNext).toHaveBeenCalledWith(
      new CustomError(StatusCodes.BadRequest, 'no cart id was provided'),
    );
    expect(mockResponse.json).not.toHaveBeenCalled();
  });

  test('Should handle a null status and return a null value in the response', async () => {
    const mockCartId = '123';

    // Mock the Cart.findByPk method to return null for status
    Cart.findByPk = jest.fn().mockResolvedValueOnce(null);

    const mockRequest = {
      query: { cartId: mockCartId },
    } as unknown as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await getCartStatus(mockRequest, mockResponse, mockNext);

    expect(Cart.findByPk).toHaveBeenCalledWith(mockCartId, {
      attributes: ['status'],
    });
    expect(mockResponse.json).toHaveBeenCalledWith({
      test: 'test',
      error: false,
      data: null,
    });
  });
  // Add more tests to cover additional scenarios if required
});
