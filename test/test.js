'use strict';

const expect = require('chai').expect;
const convertToCoins = require('../coin');

describe('Coin Converter', () => {
  it('should return the correct amount', () => {
    expect(
      convertToCoins(123)
    ).to.be.equal("1 x £1, 1 x 20p, 1 x 2p, 1 x 1p");
  });
});
