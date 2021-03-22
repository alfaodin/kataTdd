export default (req, res, next) => {
    req.logged_user = 'user_data';
    next();
};
