const fileSystem = require("fs");

function DeleteFile (fileSystemModule) {
    const fileSystem = fileSystemModule;

    this.delete = (fileName) => {
        fileSystem.unlink(fileName, (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log(`${fileName} deleted successfully`);
            }
        });
    }
}

module.exports.DeleteFile = DeleteFile;