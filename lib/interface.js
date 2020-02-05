module.exports = function getUserArgument() {
  return process.argv.slice(2)

  if (user.Args.length>1){
    console.warn(`Warning: you provided more than one argument.`);
  }

  return userArgs[0]
}
