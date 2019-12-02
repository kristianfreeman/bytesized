// Repo is in format 'user/repo'
const fetchGhRelease = async repo => {
  const headers = {
    'User-agent': 'Bytesized',
  }
  const resp = await fetch(`https://api.github.com/repos/${repo}/releases`, {
    headers,
  })
  const body = await resp.json()

  const release = body[0]

  if (!release) {
    return null
  }

  const asset = release.assets[0]

  if (!asset) {
    return null
  }

  return asset.browser_download_url
}

export default fetchGhRelease
