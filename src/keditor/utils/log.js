import $ from 'jquery';

export default (...args) => {
    if (console && typeof console.log === 'function' && $.keditor.debug) {
        console.log.apply(console, ['[ KEditor ] ', ...args]);
    }
};
