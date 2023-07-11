import { Request, Response, NextFunction } from 'express';
import { Cart } from '../../models';
import { CartStatus, CustomError, StatusCodes } from '../../utils';
import { updateCartStatus } from '../../controllers';

describe('updateCartStatus', () => {
  beforeEach(async () => {
    await Cart.destroy({ where: {} });
  });

  afterEach(async () => {
    await Cart.destroy({ where: {} });
  });

  test('Should update the cart status to Value3 (done) and return the updated cart', async () => {
    const mockCartId = '123';
    const mockCartStatus = 'done';

    const mockCart = {
      id: mockCartId,
      status: CartStatus.Value2,
      save: jest.fn(),
    };

    Cart.findByPk = jest.fn().mockResolvedValueOnce(mockCart);

    const mockRequest = {
      query: { cartId: mockCartId, cartStatus: mockCartStatus },
    } as unknown as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await updateCartStatus(mockRequest, mockResponse, mockNext);

    expect(Cart.findByPk).toHaveBeenCalledWith(mockCartId);
    expect(mockCart.status).toBe(CartStatus.Value3);
    expect(mockCart.save).toHaveBeenCalled();
    expect(mockResponse.json).toHaveBeenCalledWith(mockCart);
  });

  test('Should update the cart status to Value2 and return the updated cart', async () => {
    const mockCartId = '123';
    const mockCartStatus = 'in_progress';

    const mockCart = {
      id: mockCartId,
      status: CartStatus.Value3,
      save: jest.fn(),
    };

    Cart.findByPk = jest.fn().mockResolvedValueOnce(mockCart);

    const mockRequest = {
      query: { cartId: mockCartId, cartStatus: mockCartStatus },
    } as unknown as Request;
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;
    const mockNext = jest.fn() as NextFunction;

    await updateCartStatus(mockRequest, mockResponse, mockNext);

    expect(Cart.findByPk).toHaveBeenCalledWith(mockCartId);
    expect(mockCart.status).toBe(CartStatus.Value2);
    expect(mockCart.save).toHaveBeenCalled();
    expect(mockResponse.json).toHaveBeenCalledWith(mockCart);
  });

  test('Should handle cart not found and throw a CustomError with BadRequest status', async () => {
    const mockCartId = '123';
    const mockCartStatus = 'done';

    Cart.findByPk = jest.fn().mockResolvedValueOnce(null);

    const mockRequest = {
      query: { cartId: mockCartId, cartStatus: mockCartStatus },
    } as unknown as Request;
    const mockResponse = {} as Response;
    const mockNext = jest.fn() as NextFunction;

    await updateCartStatus(mockRequest, mockResponse, mockNext);

    expect(Cart.findByPk).toHaveBeenCalledWith(mockCartId);
    expect(mockNext).toHaveBeenCalledWith(
      new CustomError(StatusCodes.BadRequest, 'cart not found'),
    );
    expect(mockResponse.json).not.toHaveBeenCalled();
  });
});
