import auth from 'azure-mobile-apps/src/auth';
import bcrypt from 'bcrypt';

// validates a username and password and returns a JWT token if successful
function validateCredentials(req, res, next) {
    let context = req.azureMobile,
        // the sign function creates a signed JWT token from provided claims
        sign = auth(context.configuration.auth).sign;

    context.tables('users')
        .where({ email: req.body.email })
        .read()
        .then(users => {
            if(users.length === 1 && validatePassword(req.body.password, users[0].password))
                res.json(createResponse(sign, users[0]));
            else
                res.status(401).send("Incorrect username or password");
        })
        .catch(next);
}

// create a new user with the specified username and password and return a JWT token
function createUser(req, res, next) {
    let context = req.azureMobile,
        sign = auth(context.configuration.auth).sign;

    context.tables('users')
        .insert({
            email: req.body.email,
            password: hashPassword(req.body.password)
        })
        .then(user => res.json(createResponse(sign, user)))
        .catch(next);
}

function createResponse(sign, user) {
    return {
        // this JWT token must be applied on the Mobile Apps client using the appropriate client APIs
        token: sign({
            // sub is the only required property. this becomes context.user.id
            // you can add other claims here. they become available as context.user.claims
            sub: user.id
        })
    };
}

function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

function validatePassword(password, hashed) {
    return bcrypt.compareSync(password, hashed)
}

let api = {
    post: validateCredentials,
    put: createUser
}

api.post.access = 'anonymous';
api.put.access = 'anonymous';

// Export the API
export default api;