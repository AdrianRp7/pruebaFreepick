export default {
    install: (app) => {
        app.provide ('$isUndefinedOrNull', (value) => {
            return value === undefined || value === null;
        });

        app.provide('$debounce', (fn, delay) => {
            let timeoutID = "";
            return function() {
                clearTimeout(timeoutID)
                let args = arguments
                let that = this
                timeoutID = setTimeout(function() {
                    fn.apply(that, args)
                }, delay)
            }
        });
    }
}
