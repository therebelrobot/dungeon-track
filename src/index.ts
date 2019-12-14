const s3 = require('s3')

const client = s3.createClient({
  s3Options: {
    accessKeyId: 'your s3 key',
    secretAccessKey: 'your s3 secret'
  }
})

export const createClient = ({ accessKeyId, secretAccessKey }) => {
  return s3.createClient({
    s3Options: {
      accessKeyId,
      secretAccessKey
    }
  })
}
