const multer = require('multer');
const path = require('path');

module.exports = {
    dest: path.resolve(__dirname, '..', 'app', 'files'),
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, path.resolve(__dirname, '..', 'app', 'files'));
        },
        filename: (req, file, cb) => {

            const nome = 'alunos.csv';
    
            cb(null, nome);
        }
    })
}
