/* global QUnit */

sap.ui.require(["stk/starterkit/test/integration/AllJourneys"
], function () {
	QUnit.config.autostart = false;
	QUnit.config.testTimeout = 30000; // 30 sekund
	QUnit.start();
});
