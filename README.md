------------------------------------
Before you try to run tests -> make sure that you have:
- playwright
- allure (test run will work without it, allure reporter won't)
------------------------------------
Test run scripts:
- `npm run e2e` (will start tests in background)
- `npm run e2e-head` (will start tests with visual flow)
- `npm run all` (would start all tests from all folders within /tests)
- `npm run report` (will regenerate and launch allure test run report)
------------------------------------
Folders and oop explanation / uses:
- `configs` -> a place where different playwright configs might be stored if needed
- `helpers` -> a place where helper methods / functions / data can be stored. For reusability reasons
- `pages` -> page object classes are being stored here
- `tests` -> all the specs are being stored here
- `package.json` -> project name, packages, scripts
- `tsconfig.json` -> typescript config, used here for shortening path to files
------------------------------------
Additional packages used:
- `lodash` -> using this package as it simplifies many oftenly used functions / higher level code readibility
------------------------------------

First time startup guide:

- clone repo
- `npm i`
- `npm run e2e-head` (or any other script)

Second and further runs:

- `npm run e2e-head` (or any other script)

After run you can check report by running `npm run report`

------------------------------------

If you're facing some issues during the launch - make sure that you meet the requirements (playwright / allure are installed localy).
Also feel free to pm / email me if you'll have any questions.