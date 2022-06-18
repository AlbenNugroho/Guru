import User from "../models/nama.js";

const UserController = {
    getAll : async (req, res) => {

        try {
           const data = await User.findAll({
            attributes  : ['id','nama','sekolah','jurusan','jumlah','tgl_mulai','tgl_selesai']
           })
           res.json(data)

        } catch (error) {
            res.status(404).json({msg : error})
        }
    },
    getId : async (req, res) => {

        try {
            const data = await User.findAll({
                attributes  : ['id','nama','sekolah','jurusan','jumlah','tgl_mulai','tgl_selesai'],
                where : { id : req.params.id}
               })
               res.json(data)  
        } catch (error) {
            
        }
    },
    input : async (req, res) => {

        try {
            const data = await User.create(req.body)
            res.status(201).json({ msg : "sukses"})
        } catch (error) {
            res.status(404).json({msg : error})
        }
    },
    update : async (req, res) => {

        try {
            const data = await User.update(req.body, {
                where : { id : req.params.id}
            })
            res.status(201).json({ msg : "sukses"})
        } catch (error) {
            res.status(404).json({msg : error})
        }
    },
    delete : async (req, res) => {

        try {
            const data = await User.destroy({
                where : { id : req.params.id}
            })
            res.status(201).json({ msg : "sukses"})
        } catch (error) {
            res.status(404).json({msg : error})
        }
    }

}

export default UserController