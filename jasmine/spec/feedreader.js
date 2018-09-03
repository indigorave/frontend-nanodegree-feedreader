/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

//Create a set of testing suites for verrify UdaciFeeds functionality
$(function() {
    /*First test suite contains specs to verify that:  1)all feeds are defined
    2)all feeds have a URL and 3)all feeds have a name.*/
    describe('RSS Feeds', function() {
      /*Spec to verify that all feeds are defined*/
      it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
      /*Spec to verify that all feeds have a URL.*/
      it('have a url and it is not empty',function() {
           for(let feed of allFeeds){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }});
      /*Spec to verify that all feeds have a name.*/
      it('have a name and it is not empty',function() {
             for(let feed of allFeeds){
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
             }});
        });

    /*Second test suite contains specs to verify that: 1)the menu
    is hidden by default 2)the menu will display if menu icon is
    clicked and then hidden if clicked again.*/
    describe ("The Menu",function(){
      /*Spec to verify that the menu is hidden by default on pages load.*/
      it('is hidden by default', function(){
        let a = document.querySelector('.menu-hidden');
          expect(a.classList).toContain("menu-hidden");
        });
      /*Spec to verify that menu is displayed or hidden on menu click.*/
      it('is displayed or hidden again on menu click', function(){
        let a = document.querySelector('.menu-hidden');
        let menuIcon = $('.menu-icon-link');
          menuIcon.click();
          expect(a.classList).not.toContain('menu-hidden');
          menuIcon.click();
          expect(a.classList).toContain('menu-hidden');
      });
    });

        // TODO: Write a test that verifies the transform selector value is equal to or
        // less than -12em.  To only test if the class contains menu-hidden, doesn't actually
        //mean the menu is hidden if the transform is greater than -12em.

    /*Third test suite is run asynchronously and contains a spec that verifies  1)the feed
    container holds at lease one entry.*/
    describe('Initial Entries', function() {
      /*Asynchronous function that runs the loadFeed function prior to beginning tests*/
      beforeEach(function(done) {
        loadFeed(0, function(){
        done();
        });
      });
      /*Spec to verify that there is at least one entry in the feed container.*/
      it('has at least one entry in the feed container', function(){
        let feed = $('.feed .entry');
        expect(feed.length).not.toBe(0);
      });
    });

    /*Fourth test suite is run asynchronously and contains a spec that verifies  1)the feed
    container holds at lease one entry.*/
    describe('New Feed Selection', function(){
      let oldfeed, newfeed; //create variables to compare feeds
      /*Asynchronous function that 1)runs the loadFeed function for index 0 and index 1
      2) populates the oldFeed and newFeeds variables respectively with the element's
      content prior to beginning tests*/
        beforeEach(function(done) {
          loadFeed(0, function(){
            oldFeed = document.querySelector('.feed').innerText;
          loadFeed(1, function() {
            newFeed = document.querySelector('.feed').innerText;
          done();
          });
        });
    });
   /*Spec to verify that there is at least one entry in the feed container.*/
    it('has changed the feed', function(){
    expect(oldFeed === newFeed).not.toBe(true);
    });
 });
}());
