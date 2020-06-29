const publishNewVersion = require('publish-new-version');
const { execSync } = require('child_process');

publishNewVersion(async (logger) => {
    logger.info(`Build source-code`);
    execSync(`npm run build`);
});
