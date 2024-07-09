import path from 'path'

const ROOT_DIR = __dirname

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(ROOT_DIR, 'src/'),
    },
  },
}
