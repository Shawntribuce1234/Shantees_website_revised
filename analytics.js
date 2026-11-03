(() => {
  const token = window.QUEEN_ANALYTICS?.cloudflareToken;
  if (!token || !/^[a-f0-9]{32}$/i.test(token)) return;
  if (['localhost', '127.0.0.1'].includes(location.hostname) || location.pathname.startsWith('/admin')) return;
  const beacon = document.createElement('script');
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.defer = true;
  beacon.dataset.cfBeacon = JSON.stringify({ token });
  document.body.append(beacon);
})();
