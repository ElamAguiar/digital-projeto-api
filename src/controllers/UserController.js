import UserModel from "../models/UserModel.js"
import MD5 from 'crypto-js/md5.js';


class UserController {
    async findAll(request, response){
        const users = await UserModel.findAll({
            attributes: ["id", "firstname", "surname", "email"]
        })
        if(users){
            return response.status(200).send(users)
        }else{
            return response.status(404).send({
                message: "Usuários não encontrado."
            })
        }
    }


    async findById(request, response){
        const id = request.params.id

        const user = await UserModel.findByPk(id, {
            attributes: ["id", "firstname", "surname", "email"]
        })
        if(user){
            return response.status(200).send(user)
        }else{
            return response.status(404).send({
                message: "Usuário não encontrado."
            })
        }
    }


    async create(request, response){
        const {firstname,surname,email,password} = request.body
        const passwordCrypto = MD5(password).toString()

        const body = {
            firstname: firstname,
            surname: surname,
            email: email,
            password: passwordCrypto
        } 
        await UserModel.create(body)
        return response.status(201).send({
            message: "Usuário cadastrado com sucesso"
        })
    }


    async update(request, response){
        const id = request.params.id
        const body = request.body

        await UserModel.update(body, {
            where: {id}
        })
        return response.status(204).send()
    }


    async delete(request, response){
        const id = request.params.id

        await UserModel.destroy({
            where: {id}
        })
        return response.status(204).send()
    }
}

export default new UserController;
