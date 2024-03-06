import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promise1 = signUpUser(firstName, lastName);
    const promise2 = uploadPhoto(fileName);

    return Promise.allSettled([promise1, promise2])
        .then(results => {
            return results.map(result => {
                return {
                    status: result.status,
                    value: result.status === 'fulfilled' ? result.value : result.reason
                };
            });
        });
}