/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
     /* TODO: Write a test that loops through each feed
      * in the allFeeds object and ensures it has a URL defined
      * and that the URL is not empty.
      */
    describe('RSS Feeds', function() {
      it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
      it('have a url and it is not empty',function() {
           for(let feed of allFeeds){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }});
       it('have a name and it is not empty',function() {
             for(let feed of allFeeds){
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
             }});
});
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */


    /* TODO: Write a new test suite named "The menu" */

    describe ("The Menu",function(){
      it('is hidden by default', function(){
        let a = document.querySelector('.menu-hidden');
        expect(a.classList).toContain("menu-hidden");
      });
      it('is toggled on menu click', function(){
        let a = document.querySelector('.menu-hidden');
        let menuIcon = $('.menu-icon-link');
          menuIcon.click();
          expect(a.classList).not.toContain('menu-hidden');
          menuIcon.click();
          expect(a.classList).toContain('menu-hidden');
      });
    });
        /* TODO: Write a test that ensures the menu element is truly
         * hidden by default by checking that the transform method is not less than
         -12. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

beforeEach(function(done) {
  loadFeed(0, function(){
    done();
  });
});
  it('has at least one entry in the feed container', function(){
    let feed = $('.feed');
    expect(feed.length).not.toBe(0);
  });
});

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
