/**
 * @author Paul Kalnitski
 * @contact kalnitski@polydev.io
 * @copyright 2019-2020 All rights reserved
 */

/**
 * D = A + AB * (AC ** AB) / (AB ** AB)
 * ** - Scalar product of vectors;
 * D - projection;
 * A - segment start;
 * B - segment end point;
 * C - point;
 */
const getClosestPointToRouteSegment = (point, [ start, end ]) => {
  let segmentVector = {
    latitude: end.latitude - start.latitude,
    longitude: end.longitude - start.longitude
  };

  let scalarToPointAndSegment = (point.latitude - start.latitude) * segmentVector.latitude + (point.longitude - start.longitude) * segmentVector.longitude;
  let scalarSegment = segmentVector.latitude * segmentVector.latitude + segmentVector.longitude * segmentVector.longitude;
  let u = scalarToPointAndSegment / scalarSegment;

  if (u < 0) {
    return start;
  } else if (u > 1) {
    return end;
  } else {
    return {
      latitude: start.latitude + segmentVector.latitude * u,
      longitude: start.longitude + segmentVector.longitude * u
    };
  }
}

module.exports = getClosestPointToRouteSegment;
