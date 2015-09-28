import assert from 'power-assert';
import { search } from '../src/js/search.js';


describe("Search", () => {

  it("We should have some filters", () => {
    assert(search.active_filters.length > 0);
  });

});
