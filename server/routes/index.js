'use strict'

import Users from '../controllers/user';
import Books from '../controllers/book';
import Housekeeping from '../controllers/housekeeping';
module.exports = function(app) {
    // User API
    app.route('/api/users')
        .post(Users.signUp);

    // Book API
    app.route('/api/books')
        .get(Books.show)
        .post(Books.store)
        .put(Books.update)
        .delete(Books.destroy);
    // Housekeeping API
    app.route('/api/housekeeping')
        .get(Housekeeping.show)
        .post(Housekeeping.store);
}