import test from "tape";

test('first', function (t) {

  setTimeout(function () {
    t.ok(1, 'first test');
    t.end();
  }, 200);

  t.test('second', function (t) {
    t.ok(1, 'second test');
    t.end();
  });
});

test('third', function (t) {
  setTimeout(function () {
    t.ok(1, 'third test');
    t.end();
  }, 100);
});