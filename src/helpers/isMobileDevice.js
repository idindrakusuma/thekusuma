function isMobileDevice() {
  if (typeof window === undefined) return false;

  const userAgent = window.navigator.userAgent || '';
  const finalUserAgent = userAgent.toLocaleLowerCase();

  return finalUserAgent.includes('android') || finalUserAgent.includes('ios') || 
         finalUserAgent.includes('iphone') || finalUserAgent.includes('windows phone') ||
         finalUserAgent.includes('bb');
}

export default isMobileDevice;
