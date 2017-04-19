'use strict';

describe('conFusion App End 2 End Testing', function() {

    it('should automatically redirect to / when location hash/fragment is is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch('/');
    });
});

describe('index', function() {
    beforeEach(function() {
        browser.get('index.html#/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Ristorante Con Fusion');
    });
});

describe('Menu 0 item', function() {
    
    beforeEach(function() {
        browser.get('index.html#!/menu/0');
    });

    it('should have a name', function() {
        var name = element(by.binding('dish.name'));
        expect(name.getText()).
        toEqual('Uthapizza Hot $4.99');
    });

    it('should show the number of comments as', function() {
        expect(element.all(by.repeater('cmnt in dish.comments')).count()).toEqual(6);
    });
    
    it('should show first comment author as', function(){
        element(by.model('sort')).sendKeys('author');
        expect(element.all(by.repeater('cmnt in dish.comments')).count()).toEqual(6);
        var author = element.all(by.repeater('cmnt in dish.comments')).first().element(by.binding('cmnt.author'));
        expect(author.getText()).toContain('25 Cent');
    });
});