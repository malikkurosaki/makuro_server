const {Op, DataTypes, Model } = require('sequelize')

// jwt
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

class DbModel extends Model {

    static async lihatSemua(){
        return this.findAll();
    }

    static async lihatSatu(id){
        return this.findOne({
            where: {
                id: id
            }
        })
    }

    static lihatByEmailPassword(email, password){
        return this.findOne({
            where: {
                email: email,
                password: password
            }
        })
    }

    static async temukan(id){
        return this.findAll({
            where: {
                id: id
            }
        })
    }

    static async cari(val){
        return this.findAll({
            where: {
                name: {
                    [Op.substring]: val
                }
            }
        })
    }

    static async simpan(val){
        return this.create(val);
    }

    static async update(val, id){
        return this.update(val,{
            where: {
                id: id
            }
        })
    }

    static async updateAtauSimpan(val){
       return this.upsert(val);
    }

    static async hapus(id){
        return this.destroy({
            where: {
                id: id
            }
        })
    }

    static async bersihkan(){
        return this.destroy({
            truncate: true
        })
    }

    static async terangkan(){
        return this.describe();
    }

    
    static async aktifkan(){
        return this.sync();
    }

    static async aktifkanForce(){
        return this.sync({force: true});
    }

    static async lihatGambar(user_id, name){
        return await this.findOne({
            where: {
                user_id: user_id,
                name: name
            }
        })
    }

    static async lihatSemuaGambar(){
        return await this.findAll({
            attributes: ['user_id', 'name']
        })
    }

    static generateAccessToken(email) {
        // 86400 (24 jam)
        // generate secret token : require('crypto').randomBytes(64).toString('hex')
        return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '86400s' });
    }
    
}

module.exports = { DbModel }