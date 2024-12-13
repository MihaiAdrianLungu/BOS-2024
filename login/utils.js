import { users } from "./users.js";

export const loginUser = (loginData) => {
    const {emailValue, passwordValue} = loginData;

    const response = new Promise((resolve, reject) => {
        const foundUser = users.find((user) => user.email === emailValue);

        if(!foundUser) {
            reject("User not found");
            return;
        }

        const isPasswordCorrect = foundUser.password === passwordValue;

        if(!isPasswordCorrect) {
            reject("Password is incorrect");
            return;
        }

        resolve(foundUser);
    });

    return response;
}