// Imports for Flow component specific JS modules
// These need to be imported manually, as the
// webpack setup in this project ignores @JsModule
// annotations on the Flow components.
// Rather than adding the relevant imports to each
// specific example, which is error prone and hard
// to maintain, we import these modules once
// globally for all examples.

// General Flow modules
import '@vaadin/flow-frontend/dndConnector.js';
import '@vaadin/flow-frontend/flow-component-renderer.js';
// Flow component specific modules
import '@vaadin/flow-frontend/cookieConsentConnector.js';
import '@vaadin/flow-frontend/comboBoxConnector.js';
import '@vaadin/flow-frontend/contextMenuConnector.js';
import '@vaadin/flow-frontend/contextMenuTargetConnector.js';
import '@vaadin/flow-frontend/datepickerConnector.js';
import '@vaadin/flow-frontend/gridConnector.js';
import '@vaadin/flow-frontend/vaadin-grid-flow-selection-column.js';
import '@vaadin/flow-frontend/gridProConnector.js';
import '@vaadin/flow-frontend/vaadin-map/mapConnector.js';
import '@vaadin/flow-frontend/menubarConnector.js';
import '@vaadin/flow-frontend/messageListConnector.js';
import '@vaadin/flow-frontend/selectConnector.js';
import '@vaadin/flow-frontend/vaadin-time-picker/timepickerConnector.js';
import '@vaadin/flow-frontend/virtualListConnector.js';
import '@vaadin/flow-frontend/tooltip.js';
// Lit renderer
import '@vaadin/flow-frontend/lit-renderer.js';
// Legacy template renderer
import '@vaadin/polymer-legacy-adapter/template-renderer.js';
