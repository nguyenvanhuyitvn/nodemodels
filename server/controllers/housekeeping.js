import model from '../models'
const { ad_housekeeping } = model;
module.exports = {
    show: (req, res) => {
        return ad_housekeeping.findAll()
            .then(housekeeping => res.status(200).send({
                success: true,
                message: "Housekeeping list",
                housekeeping
            }))
            .catch(err => res.json({ 'message': 'Can not fetched data' }))

    },
    store: (req, res) => {
        const { ad_client_id, ad_org_id, ad_table_id, backupfolder, created, description, help, isactive, name, isexportxmlbackup, issaveinhistoric } = req.body;
        return ad_housekeeping.create({
                ad_client_id,
                ad_org_id,
                ad_table_id,
                backupfolder,
                created,
                description,
                help,
                isactive,
                name,
                isexportxmlbackup,
                issaveinhistoric
            })
            .then(Housekeeping => res.status(200).send({
                success: true,
                message: "Housekeeping successfully created",
                Housekeeping
            }))
    },
    update: (req, res) => {
        const { id, title, author, description, quantity, userId } = req.body;
        return Housekeeping.update({
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
        return Housekeeping.destroy({
                where: { id: id }
            })
            .then(row => res.json({ 'message': 'Deleted', 'row': row }))
            .catch(err => res.json({ 'message': 'Cannot to delete book' }))
    }

}

// export default Books;