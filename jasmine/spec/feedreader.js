/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */


$(function () {

    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL', function () {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);

            }
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has Name', function () {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name.length).not.toBe(0);

            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function () {


        /* Test that ensures the menu element is
         * hidden by default. 
         */

        it('is hidden', function () {
            //  expect(document.getElementsByClassName('menu-hidden').length).not.toBe(0);
            //  expect($(body).hasClass('menu-hidden'))
            expect($("body").hasClass('menu-hidden')).toBe(true);

        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. 
         */
        this.beforeEach(function () {
            $('.menu-icon-link').trigger('click');

        })
        it('shows when the icon is clicked', function () {
            expect(this.$('.menu').is(':visible')).toBe(true);
        });

        it('hides when the icon is clicked', function () {
            this.expect($('.menu').is(':visible')).toBe(false);
        });

    });

        /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('has entry', function () {
            expect($("article").hasClass('entry')).toBe(true);
        });
    })



    //New test suite named "New Feed Selection"
    describe('New Feed Selection', function () {
        
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
        
        beforeEach(function (done) {
            $('.feed').empty()
            loadFeed(0, function(){
                       first = $('.feed').find('h2').text();

            });
                        loadFeed(1, function(){
                       second = $('.feed').find('h2').text();
            done();

            });
        });

        it('changes the content',function(done){
 

                    expect(first).not.toEqual(second);
            done();

           
           })
    })

}());