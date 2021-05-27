const mongooose = require('mongoose');

mongooose.connect("mongodb://localhost/beltdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})

.then(() => console.log(`Established a connection`))
.catch(err => console.log("Something went wrong when connecing to the database", err));