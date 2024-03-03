import Car from './models/car.js';
import User from './models/user.js';
import Image from './models/image.js';
import Post from './models/formpost.js';
import Rental from './models/rental.js';
import Chat from './models/chat.js'; //imported the DB models here, will use the models to interact with the database
import bcrypt from 'bcrypt'; // for hashing the passwords
import verifyData from './helperFunctions.js';





const eventHanlder = (socket, io) => {


    socket.on("myEvent", (myData) => {
        console.log('Received myMessage:', myData);
        io.to(socket.id).emit("myEvent", myData);
    });

    socket.on("signup",async (data)=>{
        verifyData(data)
        //signup logic here(will be using the database here)

        //Following is an example of how database will be accessed and used to store the data
        try {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            const newUser = new User({
                email : data.email,
                password: hashedPassword, 
                phoneNumber: data.phone_number,
                city: data.city,
                postalCode: data.postal_code,
                address: data.address,
                role: "customer",
                displayName: data.full_name,
                //other data
            }); 
            const savedUser = await newUser.save(); 
            console.log('User signed up:', savedUser);
            io.to(socket.id).emit("signup", "successfull")
        }
        catch(error) {
            console.log("error signing up",error)
            io.to(socket.id).emit("signup", "failed")
        }
    })

    socket.on("login",async (data)=>{
        console.log("login data",data)
        //Login logic here(will be using the database here)

        try {
            const { username, password } = data;
            console.log("login data recieved : ", username, password)
            const existingUser = await User.findOne({ email: username });

            if (!existingUser) {
                console.log('User does not exist. Login failed.');
                io.to(socket.id).emit("login", "failed")
                
              } else {
                const passwordMatch = await bcrypt.compare(password, existingUser.password);
        
                if (passwordMatch) {
                    console.log('Store Login successful.');
                    io.to(socket.id).emit("login", "successfull")

                } else {
                  console.log('Incorrect password. Login failed.');
                  io.to(socket.id).emit("login", "failed")
                }
              }
        }
        catch(error) {
            console.log("error logging in",error)
        }

              


    })

    //more even hanlders here which will receive data from the client and respond depending upon the situation


};
export default eventHanlder;