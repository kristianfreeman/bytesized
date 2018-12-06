const s3Image = (path) => {
  let fixedPath = path;
  if (path[0] !== '/') {
    fixedPath = `/${path}`;
  }
  return 'https://byteconf-production.s3.amazonaws.com' + fixedPath;
}

export default s3Image;
