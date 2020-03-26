const fs = require('fs');
const packageJson = require('../../package');
const currentVersion = packageJson.version;
let newVersion = ((+currentVersion.replace(/\./g, '') + 1) + '').replace(/^(\d+)(\d)(\d)$/g, '$1.$2.$3');
if (newVersion.length < 2) {
    newVersion = `0.0.${newVersion}`;
} else if (newVersion.length < 3) {
    newVersion = `0.${newVersion}`;
}

const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async () => {
    try {
        console.log(`-> Current version: "${currentVersion}" - new version: "${newVersion}"`);

        console.log(`-> Update version: "${newVersion}" to "package.json"`);
        packageJson.version = newVersion;
        fs.writeFileSync('./package.json', JSON.stringify(packageJson, ' ', 4), 'utf-8');

        console.log(`-> Push to github with message "v${newVersion}"`);
        await exec(`git add .`);
        await exec(`git commit -m "v${newVersion}"`);
        await exec(`git push origin master`);

        console.log(`-> Create new release with message "Release of version ${newVersion}"`);
        await exec(`git tag -a v${newVersion} -m "Release of v${newVersion}"`);
        await exec('git push --tags');

        console.log(`-> Publish version "${newVersion}" to "https://www.npmjs.com/"`);
        await exec('npm publish');

        console.log(`-> "${newVersion}" is published!`);
    } catch (e) {
        console.log(`ERROR: ${e}`);
    }
})();
