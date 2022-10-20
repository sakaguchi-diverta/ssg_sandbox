const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

const kurocoFrontJson = {
  rewrites: [
    {
      source: '.*',
      destination: '/index.html',
    },
  ],
  redirects: [],
  redirects_by_ie: [],
  proxies: [],
  basic: [],
  ip_restrictions: [],
  stale_while_revalidate: '86400',
  error_page: {},
  inject_data: {},
}

;(async () => {
  const redirectsTable = await fetch(
    'https://sakaguchi-kuroco.a.kuroco.app/rcms-api/5/redirects'
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
  kurocoFrontJson.redirects = redirectsTable.list
  process.stdout.write(JSON.stringify(kurocoFrontJson, null, 4))
})()