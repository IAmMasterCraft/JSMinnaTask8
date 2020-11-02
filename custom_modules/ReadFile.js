function ReadFile (fileSystemModule) {
    const fileSystem = fileSystemModule;

    this.read = (fileName, textEncoding = "utf-8") => {
        fileSystem.readFile(fileName, textEncoding, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log(`Content of ${fileName}: \n${data}`);
            }
        });
    }
}

module.exports.ReadFile = ReadFile;