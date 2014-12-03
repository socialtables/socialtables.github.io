setup:
	mkdir -p node_modules
	npm install markdown@0.5.0
	curl https://raw.githubusercontent.com/mcwhittemore/smudgedown/master/to-html-clean.js > ./.git/to-html-clean.js
	curl https://raw.githubusercontent.com/mcwhittemore/smudgedown/master/to-md-smudge.js > ./.git/to-md-smudge.js
	git config filter.smudgedown.clean "node ./.git/to-html-clean.js"
	git config filter.smudgedown.smudge "node ./.git/to-md-smudge.js"
	git reset --hard