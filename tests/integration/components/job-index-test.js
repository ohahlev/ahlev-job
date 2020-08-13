import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | job-index', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<JobIndex />`);

    assert.equal(this.element.textContent.trim(), '');

    var myText = "This should be the text located in the middle of screen.";

    // Template block usage:
    await render(hbs`
    <JobIndex>
      This should be the text located in the middle of screen.
    </JobIndex>`
    );

    assert.equal(this.element.textContent.trim(), "This should be the text located in the middle of screen.");
  });
});
