install:
	npm ci

brain-games:
	node --experimental-modules --es-module-specifier-resolution=node bin/brain-games.js

brain-even:
	node --experimental-modules --es-module-specifier-resolution=node bin/brain-even.js

brain-calc:
	node --experimental-modules --es-module-specifier-resolution=node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
