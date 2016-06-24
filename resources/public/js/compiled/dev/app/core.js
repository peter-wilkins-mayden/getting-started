// Compiled by ClojureScript 1.8.51 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('app.mutations');
goog.require('untangled.client.core');
if(typeof app.core.app !== 'undefined'){
} else {
app.core.app = cljs.core.atom.call(null,untangled.client.core.new_untangled_client.call(null));
}

//# sourceMappingURL=core.js.map?rel=1466801246087