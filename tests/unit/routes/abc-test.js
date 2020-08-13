import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | abc', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:abc');
    assert.ok(route);
  });
});
