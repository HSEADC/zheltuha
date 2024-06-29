import Airtable from 'airtable'

const token =
  'patbP1eWzjFM6gS7p.d7584839fbca541c5df569feb033408483968ffda849bd24ebb62c618e3a3cb3'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('appNiUySinRMOUjzR')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('zheltuha')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            tags: record.fields['tags'],
            image: record.fields['images'],
            title: record.fields['Names_of_news'],
            description: record.fields['Content_of_news'],
            url: record.fields['url']
          })
        })

        resolve(content)
      })
      .catch((error) => reject(error))
  })
}

export { getPostTeasers }
