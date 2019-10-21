import model from '../models'
const { Book } = model;
const { User } = model;
module.exports = {
    show: (req, res) => {
        return Book.findAll()
            .then(books => res.status(200).send({
                success: true,
                message: "Book list",
                books
            }))
            .catch(err => res.json({ 'message': 'Can not fetched data' }))

    },
    store: (req, res) => {
        const { title, author, description, quantity, userId } = req.body;
        return Book.create({
                title,
                author,
                description,
                quantity,
                userId
            })
            .then(bookData => res.status(200).send({
                success: true,
                message: "Book successfully created",
                bookData
            }))
    },
    update: (req, res) => {
        const { id, title, author, description, quantity, userId } = req.body;
        return Book.update({
                title: title,
                author: author,
                description: description,
                quantity: quantity,
                userId: userId
            }, {
                where: { id: id }
            })
            .then(row => res.json({ 'message': 'Successfull', 'row': row[0] }))
            .catch(err => res.json({ 'message': 'Cannot to update book', err }))
    },
    destroy: (req, res) => {
        const { id } = req.body;
        return Book.destroy({
                where: { id: id }
            })
            .then(row => res.json({ 'message': 'Deleted', 'row': row }))
            .catch(err => res.json({ 'message': 'Cannot to delete book' }))
    }

}

// export default Books;