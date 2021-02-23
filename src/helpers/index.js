import { useMediaQuery } from '@material-ui/core';

function BP() {
    const bp = [
        useMediaQuery(('(min-width: 0px)')),
        useMediaQuery(('(min-width: 600px)')),
        useMediaQuery(('(min-width: 960px)')),
        useMediaQuery(('(min-width: 1280px)')),
        useMediaQuery(('(min-width: 1920px)'))
    ];

    return bp;
}

export { BP };