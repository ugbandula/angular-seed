
var getPromise = function ($q) {
  return $q.when(getJSON('sample.json'))
}
