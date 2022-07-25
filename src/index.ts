const Mustache = require('mustache');
const fs = require('fs');


import { MustacheTemplateConstants } from './constants';

(async () => {

  const readmeContents = await fs.promises.readFile(MustacheTemplateConstants.mainPath);
  const content = Mustache.render(readmeContents.toString(), {

    datetime: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
        timeZone: 'America/Toronto',        
      }),
  });
  console.log('[INFO] Writing updated content to mustache to README.md ...');
  fs.writeFileSync('README.md', content);
})();