// Ignite CLI plugin for MobxBoilerplate
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-MODULENAME'
const NPM_MODULE_VERSION = '0.0.1'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'MobxBoilerplateExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'MobxBoilerplate Example' })

  // Example of copying templates/MobxBoilerplate to App/MobxBoilerplate
  // if (!filesystem.exists(`${APP_PATH}/App/MobxBoilerplate`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/MobxBoilerplate`, `${APP_PATH}/App/MobxBoilerplate`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../MobxBoilerplate/MobxBoilerplate'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/MobxBoilerplate folder
  // const removeMobxBoilerplate = await context.prompt.confirm(
  //   'Do you want to remove App/MobxBoilerplate?'
  // )
  // if (removeMobxBoilerplate) { filesystem.remove(`${APP_PATH}/App/MobxBoilerplate`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../MobxBoilerplate/MobxBoilerplate'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

