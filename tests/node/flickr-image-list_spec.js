/***************
 * NAGINATA.fi *
 ***************
 * Juga Paazmaya <olavic@gmail.com>
 * License: Attribution-ShareAlike 3.0 Unported
 *          http://creativecommons.org/licenses/by-sa/3.0/
 */

'use strict';

describe('List of Flickr images for prefetch meta elements', function() {
  var flickrImageList = require('../../libs/flickr-image-list');

  it('at least few Flickr images are found', function() {
    var output = flickrImageList();
    expect(output.length).toBeGreaterThan(2);
  });

});
