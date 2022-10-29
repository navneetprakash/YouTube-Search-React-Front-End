const formatDate = (d) => {
  // convert UTC to NZDT
  return new Date(d).toLocaleString('en-NZ', {
    timeZone: 'Pacific/Auckland',
  });
};

export default formatDate;
