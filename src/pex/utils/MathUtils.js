define(['lib/seedrandom.js', 'pex/geom/Vec2', 'pex/geom/Vec3'], function(seedrandom, Vec2, Vec3) {
  function MathUtils() {
  }

  MathUtils.seed = function(s) {
    Math.seedrandom(s);
  }

  MathUtils.randomFloat = function(min, max) {
    if (typeof(max) == 'undefined') {
      min = 1;
    }
    if (typeof(max) == 'undefined') {
      max = min;
      min = 0;
    }
    return min + (max - min) * Math.random();
  }

  MathUtils.randomInt = function(min, max) {
    return Math.floor(MathUtils.randomInt(min, max));
  }

  MathUtils.randomVec3 = function(r) {
    r = r || 0.5;
    var x = Math.random() - 0.5;
    var y = Math.random() - 0.5;
    var z = Math.random() - 0.5;
    var len = x * x + y * y + z * z;
    if (len > 0) {
      len = Math.sqrt(len);
      x /= len;
      y /= len;
      z /= len;
    }
    return Vec3.fromValues(x * r, y * r, z * r);
  }

  MathUtils.randomVec3InBoundingBox = function(bbox) {
    var x = bbox.min[0] + Math.random() * (bbox.max[0] - bbox.min[0]);
    var y = bbox.min[1] + Math.random() * (bbox.max[1] - bbox.min[1]);
    var z = bbox.min[2] + Math.random() * (bbox.max[2] - bbox.min[2]);
    return Vec3.fromValues(x, y, z);
  }

  MathUtils.randomVec2InRect = function(rect) {
    return Vec2.fromValues(rect.x + Math.random() * rect.width, rect.y + Math.random() * rect.height);
  }

  MathUtils.mix = function(a, b, t) {
    return a + (b - a) * t;
  }

  MathUtils.map = function(value, oldMin, oldMax, newMin, newMax) {
    return newMin + (value - oldMin)/(oldMax - oldMin) * (newMax - newMin);
  }

  return MathUtils;
});