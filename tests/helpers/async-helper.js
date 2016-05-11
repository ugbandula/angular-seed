
var getPromise = function ($q) {
  return $q.when(getJSONFixture('sample.json'))
}
