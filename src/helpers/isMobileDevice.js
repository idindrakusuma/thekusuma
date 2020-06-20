function isMobileDevice() {
  if (typeof window === undefined) return false;

  const userAgent = window.navigator.userAgent || '';
  const finalUserAgent = userAgent.toLocaleLowerCase();

  if (finalUserAgent.includes('android')) return true;
  if (finalUserAgent.includes('ios')) return true;
  if (finalUserAgent.includes('iphone')) return true;
  if (finalUserAgent.includes('windows phone')) return true;
  if (finalUserAgent.includes('bb')) return true;

  return false;
}

export default isMobileDevice;
