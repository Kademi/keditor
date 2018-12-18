const log = (...args) => {
    if (console && typeof console.log === 'function') {
        console.log.apply(console, ['[ KEditor ] ', ...args]);
    }
};

export default log;