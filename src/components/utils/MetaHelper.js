const baseTitle = `NEO-CRA`;

const processMeta = (props) => {
  var meta = {};
  if (props && props.title) {
    meta.title = `${baseTitle} | ${props.title}`;
  } else {
    meta.title = baseTitle;
  }
  return meta;
}

export {baseTitle, processMeta}
