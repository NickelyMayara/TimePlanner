import bcrypt from "bcrypt"
import Funcionarios from'../models/funcionariosModels.js'

export const login = async (req, res) => {
    const { identificador, senha } = req.body;
    console.log(identificador, senha)

    try {
        const funcionario = await Funcionarios.findOne({ where: { identificador } });
        if (!funcionario) {
            console.log('funcionario não encontrado')
            return res.status(400).json({ message: 'Funcionário não encontrado' });
        }

        const validaSenha = await bcrypt.compare(senha, funcionario.senha);
        console.log("senha", senha, "compara:", funcionario.senha)
        if (!validaSenha) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        res.status(200).json({ message: 'Acessado!' });
    } catch (error) {
        res.status(500).json({error});
        console.log(error)
    }
};
