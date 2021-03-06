import { isValidImageUrl, getImageDetails } from '../../utilities/utility';
import { Request } from 'express';

describe('test valid url', () => {
  it('Valid url', () => {
    const mockRequest = {
      query: {
        filename: 'abc',
        width: '200',
        height: '200',
      },
    } as unknown as Request;

    expect(isValidImageUrl(mockRequest)[0]).toBeTrue();
  });

  it('Invalid url - filename not passed', () => {
    const mockRequest = {
      query: {
        width: '200',
        height: '200',
      },
    } as unknown as Request;

    expect(isValidImageUrl(mockRequest)[0]).toBeFalse();
  });

  it('Invalid url - width not passed', () => {
    const mockRequest = {
      query: {
        filename: 'abc',
        height: '200',
      },
    } as unknown as Request;

    expect(isValidImageUrl(mockRequest)[0]).toBeFalse();
  });

  it('Invalid url - height not passed', () => {
    const mockRequest = {
      query: {
        filename: 'abc',
        width: '200',
      },
    } as unknown as Request;

    expect(isValidImageUrl(mockRequest)[0]).toBeFalse();
  });
});

describe('test image details', () => {
  it('Validate image filename', () => {
    const mockRequest = {
      query: {
        filename: 'abc',
        width: '200',
        height: '200',
      },
    } as unknown as Request;

    const response = getImageDetails(mockRequest);

    expect(response[0]).toEqual('abc');
  });

  it('Validate image width', () => {
    const mockRequest = {
      query: {
        filename: 'abc',
        width: '200',
        height: '300',
      },
    } as unknown as Request;

    const response = getImageDetails(mockRequest);

    expect(response[1]).toEqual('200');
  });

  it('Validate image height', () => {
    const mockRequest = {
      query: {
        filename: 'abc',
        width: '100',
        height: '200',
      },
    } as unknown as Request;

    const response = getImageDetails(mockRequest);

    expect(response[2]).toEqual('200');
  });
});
