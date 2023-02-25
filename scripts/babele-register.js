Hooks.on('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'lghr-ko',
            lang: 'ko',
            dir: 'compendium'
        });
    }
});
