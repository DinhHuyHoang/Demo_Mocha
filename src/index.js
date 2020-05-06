var should = require('chai').should()

import { getIndexByValue } from '../functions/Array';


let a = [{ name: 1 }, { name: 2 }]
describe('Array', function() {
  const data = getIndexByValue({array: [1, 2, 3], item: 2})

  describe('#indexOf()', function(done) {
    it('should return -1 when the value is not present', function() {
      data.should.equal(-1)
      done
    })

    it(`should return ${data} when the value is present`, function() {
      data.should.equal(1)
      done
    })
  })
})
