/* Import Polymer modules so they're bundled by webpack. */
import '@polymer/polymer/lib/elements/custom-style.js';

import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/image-icons.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/iron-pages/iron-pages.js';

import '@polymer/neon-animation/animations/fade-in-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';

import '@polymer/paper-item/paper-item-shared-styles.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-material/paper-material.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-toggle-button/paper-toggle-button.js';
import '@polymer/paper-tooltip/paper-tooltip.js';

import 'web-animations-js/web-animations-next.min.js';

/* Also import the custom elements here so they're bundled by webpack */
import '../elements/editable-table.js';
import '../elements/loot-dropdown-menu.js';
import '../elements/loot-groups-editor.js';
import '../elements/loot-menu.js';
import '../elements/loot-message-dialog.js';
import '../elements/loot-plugin-card.js';
import '../elements/loot-plugin-editor.js';
import '../elements/loot-plugin-item.js';
import '../elements/loot-search-toolbar.js';

/* Import the modules actually used in this script. */
import initialise from './initialise.js';
import { showProgress } from './dialog';
import { onQuit } from './events.js';

window.loot = window.loot || {};
// These are assumed to exist by C++ callbacks.
window.loot.showProgress = showProgress;
window.loot.onQuit = onQuit;

window.addEventListener('load', () => initialise(window.loot));
