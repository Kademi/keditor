export default (...args) => {
    if (console && typeof console.log === 'function' && window.KEDITOR_DEBUG) {
        console.log.apply(console, ['[ KEditor ] ', ...args]);
    }
};
