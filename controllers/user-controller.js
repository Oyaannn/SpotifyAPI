const userModel = require('../model/user-model')

const userReg = async (req,res) => {
    const data = req.body 
    try {
        const addUser = await userModel.userRegistration(data)
        if(addUser){
            return res.status(200).json(
                {id:addUser.id, hash:addUser.hash}
            )
        }
        return res.status(400).json({msg:"Registration failed."})
    }catch(error){
        console.log(error)       
    }
}

const userLogin = async (req,res) => {
    const data = req.body
    try {
        const response = await userModel.userLogin(data)
        if(response){
            res.json(response)
        }
    } catch(error) {
        console.log(error)  
    } 
}

const getAllUser = async (req,res) => {
    try {
        const response = await userModel.getAllUser()
        res.json(response)
    } catch(error){
        console.log(error);
        
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, phone } = req.body
        const rowsUpdated = await userModel.updateUser(id, { name, email, phone });

        if (rowsUpdated > 0) {
            res.status(200).json({ message: `Artist with ID ${id} updated successfully`, data: { id, name, email, phone } });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error update user', error });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const rowsDeleted = await userModel.deleteUser(id);

        if (rowsDeleted > 0) {
            res.status(200).json({ message: `User with ID ${id} deleted successfully` });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting User', error });
    }
}

module.exports = {userReg,userLogin,getAllUser,updateUser,deleteUser}