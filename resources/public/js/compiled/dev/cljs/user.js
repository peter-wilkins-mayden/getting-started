// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.user');
goog.require('cljs.core');
goog.require('untangled.client.impl.util');
goog.require('untangled.client.core');
goog.require('devtools.core');
goog.require('cljs.pprint');
goog.require('app.ui');
goog.require('app.core');
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.enable_feature_BANG_.call(null,new cljs.core.Keyword(null,"sanity-hints","sanity-hints",1201436858));
devtools.core.install_BANG_.call(null);
cljs.user.log_app_state = cljs.core.partial.call(null,untangled.client.impl.util.log_app_state,app.core.app);
cljs.core.reset_BANG_.call(null,app.core.app,untangled.client.core.mount.call(null,cljs.core.deref.call(null,app.core.app),app.ui.Root,"app"));

//# sourceMappingURL=user.js.map?rel=1466803357235