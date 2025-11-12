const fs = require("fs");

fs.unlink("hy.txt", function (error) {
    if (error) console.error(error);
    else console.log("remove")
})