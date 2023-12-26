require ( './helpers.js' );

describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(43)).to.equal(15);
    });

    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(50)).to.equal(8);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInBlocks(34)).to.equal(24);
    });
  });

  describe('distanceFromHqInFeet()', function() {
    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(43)).to.equal(15);
    });

    it('returns a distance in feet', function() {
      expect(distanceFromHqInFeet(50)).to.equal(8);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInFeet(34)).to.equal(24);
    });
  });

  describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(43, 48)).to.equal(15);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(8);
    });

    it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(24);
    });
  });

  describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(43, 48)).to.equal(15);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(8);
    });

    it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(24);
    });
  });
});
