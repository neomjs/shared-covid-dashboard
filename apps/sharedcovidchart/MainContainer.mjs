import Viewport from '../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class SharedCovidChart.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'SharedCovidChart.MainContainer',

        autoMount: true,
        layout   : {ntype: 'fit'}
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};