const main = require('./build/main').default

const [,...args] = process.argv
main(args)
