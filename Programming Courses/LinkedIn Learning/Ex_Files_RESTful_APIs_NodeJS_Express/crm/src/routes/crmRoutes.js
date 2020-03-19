const routes = (app) => {
    app.route('/contact')
    .get((req, res) => 
        res.send('GET request success!'))

    .post((req, res) => 
    res.send('POST request success!'));

    app.route('/contact/:contactId')
    .put((req, res) => 
        res.send('PUT request success!'))

    .delete((req, res) => 
    res.send('DELETE request success!'));
}

export default routes;