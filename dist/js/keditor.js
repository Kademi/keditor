/*! KEditor v2.0.0 | Copyright (c) 2016-present Kademi (http://kademi.co) */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.classNames = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var PREFIX_CLASS = 'keditor-';
  var _default = {
    UI: "".concat(PREFIX_CLASS, "ui"),
    HIDDEN_ELEMENT: "".concat(PREFIX_CLASS, "hidden-element"),
    CLICKS_INITIALIZED: "".concat(PREFIX_CLASS, "clicks-initialized"),
    CONTENT_AREAS_WRAPPER: "".concat(PREFIX_CLASS, "content-areas-wrapper")
  };
  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./classNames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./classNames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classNames);
    global.defaults = mod.exports;
  }
})(this, function (_exports, _classNames) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classNames = _interopRequireDefault(_classNames);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = {
    nestedContainerEnabled: true,
    explicitSnippetEnabled: false,
    containerForQuickAddComponent: "<div class=\"row\"><div class=\"col-sm-12\" data-type=\"container-content\"></div></div>",
    btnAddContentText: '<i class="fa fa-plus"></i>',
    btnAddContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',
    btnAddSubContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',
    btnAddComponentText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-list-ul"></i>',
    btnMoveContainerText: '<i class="fa fa-sort"></i>',
    btnMoveComponentText: '<i class="fa fa-arrows"></i>',
    btnSettingContainerText: '<i class="fa fa-cog"></i>',
    btnSettingComponentText: '<i class="fa fa-cog"></i>',
    btnDuplicateContainerText: '<i class="fa fa-files-o"></i>',
    btnDuplicateComponentText: '<i class="fa fa-files-o"></i>',
    btnDeleteContainerText: '<i class="fa fa-times"></i>',
    btnDeleteComponentText: '<i class="fa fa-times"></i>',
    confirmDeleteContainerText: 'Are you sure that you want to delete this container? This action can not be undone!',
    confirmDeleteComponentText: 'Are you sure that you want to delete this component? This action can not be undone!',
    defaultComponentType: 'blank',
    snippetsUrl: 'snippets/snippets.html',
    snippetsFilterEnabled: true,
    snippetsCategoriesSeparator: ';',
    iframeMode: false,
    contentStyles: [],
    contentAreasSelector: null,
    contentAreasWrapper: "<div class=\"".concat(_classNames.default.UI, " ").concat(_classNames.default.CONTENT_AREAS_WRAPPER, "\"></div>"),
    containerSettingEnabled: false,
    containerSettingInitFunction: null,
    containerSettingShowFunction: null,
    containerSettingHideFunction: null,
    onReady: function onReady() {},
    onSnippetsLoaded: function onSnippetsLoaded(modal) {},
    onSnippetsError: function onSnippetsError(modal, error) {},
    onInitIframe: function onInitIframe(iframe, iframeHead, iframeBody) {},
    onContentChanged: function onContentChanged(event, contentArea) {},
    onBeforeInitContentArea: function onBeforeInitContentArea(contentArea) {},
    onInitContentArea: function onInitContentArea(contentArea) {},
    onBeforeInitContainer: function onBeforeInitContainer(container, contentArea) {},
    onInitContainer: function onInitContainer(container, contentArea) {},
    onBeforeContainerDeleted: function onBeforeContainerDeleted(event, selectedContainer, contentArea) {},
    onContainerDeleted: function onContainerDeleted(event, selectedContainer, contentArea) {},
    onContainerChanged: function onContainerChanged(event, changedContainer, contentArea) {},
    onContainerDuplicated: function onContainerDuplicated(event, originalContainer, newContainer, contentArea) {},
    onContainerSelected: function onContainerSelected(event, selectedContainer, contentArea) {},
    onContainerSnippetAdded: function onContainerSnippetAdded(event, newContainer, selectedSnippet, contentArea) {},
    onComponentReady: function onComponentReady(component) {},
    onBeforeInitComponent: function onBeforeInitComponent(component, contentArea) {},
    onInitComponent: function onInitComponent(component, contentArea) {},
    onBeforeComponentDeleted: function onBeforeComponentDeleted(event, selectedComponent, contentArea) {},
    onComponentDeleted: function onComponentDeleted(event, selectedComponent, contentArea) {},
    onComponentChanged: function onComponentChanged(event, changedComponent, contentArea) {},
    onComponentDuplicated: function onComponentDuplicated(event, originalComponent, newComponent, contentArea) {},
    onComponentSelected: function onComponentSelected(event, selectedComponent, contentArea) {},
    onComponentSnippetAdded: function onComponentSnippetAdded(event, newComponent, selectedSnippet, contentArea) {},
    onBeforeDynamicContentLoad: function onBeforeDynamicContentLoad(dynamicElement, component, contentArea) {},
    onDynamicContentLoaded: function onDynamicContentLoaded(dynamicElement, response, status, xhr, contentArea) {},
    onDynamicContentError: function onDynamicContentError(dynamicElement, response, status, xhr, contentArea) {}
  };
  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.snippetType = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    ALL: 0,
    CONTAINER: 1,
    COMPONENT: 2
  };
  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.toolbarType = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    CONTENT_AREA: 0,
    CONTAINER: 1,
    SUB_CONTAINER: 2,
    CONTAINER_CONTENT: 3,
    SUB_CONTAINER_CONTENT: 4,
    COMPONENT: 5
  };
  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "jquery"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery);
    global.log = mod.exports;
  }
})(this, function (_exports, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jquery = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default() {
    if (console && typeof console.log === 'function' && _jquery.default.keditor.debug) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log.apply(console, ['[ KEditor ] '].concat(args));
    }
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.convertToComponent = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(contentArea, container, target, isExisting) {
    (0, _log.default)('convertToComponent', contentArea, container, target, isExisting);

    if (target.is('.keditor-container-content-toolbar')) {
      return;
    }

    var self = this;
    var isSection = target.is('section');
    var component;

    if (isSection) {
      target.addClass('keditor-ui keditor-component');
      target.wrapInner('<section class="keditor-ui keditor-component-content"></section>');
      component = target;
    } else {
      target.wrap('<section class="keditor-ui keditor-component"><section class="keditor-ui keditor-component-content"></section></section>');
      component = target.parent().parent();
    }

    if (isExisting) {
      component.addClass('existing-component');
    }

    self.initComponent(contentArea, container, component);
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.deleteComponent = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(component) {
    (0, _log.default)('deleteComponent', component);
    var self = this;
    var componentType = self.getComponentType(component);
    var componentData = KEditor.components[componentType];

    if (typeof componentData.destroy === 'function') {
      componentData.destroy.call(componentData, component, self);
    }

    component.remove();
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.getComponentContent = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(component) {
    (0, _log.default)('getComponentContent');
    var self = this;
    var clonedComponent = component.clone();
    var componentType = self.getComponentType(clonedComponent);
    var componentData = KEditor.components[componentType];
    var dataAttributes = self.getDataAttributes(clonedComponent, null, true);
    var content; // Handle iframe-wrapper

    var iframeWrapper = component.find('.keditor-iframe-wrapper');

    if (iframeWrapper.length > 0) {
      iframeWrapper.find('.keditor-iframe-cover').remove();
      var iframe = iframeWrapper.children('iframe');

      if (iframeWrapper.hasClass('keditor-iframe-wrapper-fake')) {
        iframe.unwrap();
      } else {
        iframeWrapper.removeClass('keditor-iframe-wrapper');
      }
    }

    if (typeof componentData.getContent === 'function') {
      content = componentData.getContent.call(componentData, clonedComponent, self);
    } else {
      var componentContent = clonedComponent.children('.keditor-component-content');
      content = componentContent.html();
    }

    clonedComponent.html(content).find('[data-dynamic-href]').each(function () {
      $(this).html('');
    });
    return "<section ".concat(dataAttributes.join(' '), ">").concat(clonedComponent.html(), "</section>");
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/error", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/error"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.error, global.log);
    global.getComponentType = mod.exports;
  }
})(this, function (_exports, _error, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _error = _interopRequireDefault(_error);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(component) {
    var self = this;
    var options = self.options;
    var componentType = (component.attr('data-type') || '').replace('component-', '');

    if (componentType && componentType in KEditor.components) {
      return componentType;
    } else {
      if (typeof options.defaultComponentType === 'string') {
        componentType = options.defaultComponentType;
      } else if (typeof options.defaultComponentType === 'function') {
        componentType = options.defaultComponentType.call(self, component);
      }

      if (!componentType) {
        (0, _error.default)('Component type is undefined!');
      }

      (0, _log.default)("Fallback to defaultComponentType: ".concat(componentType));
      return componentType;
    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../constants/toolbarType", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../constants/toolbarType"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.toolbarType, global.log);
    global.initComponent = mod.exports;
  }
})(this, function (_exports, _toolbarType, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _toolbarType = _interopRequireDefault(_toolbarType);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(contentArea, container, component) {
    (0, _log.default)('initComponent', contentArea, container, component);
    var self = this;
    var options = self.options;
    var body = self.body;

    if (!component.hasClass('keditor-initialized-component') || !component.hasClass('keditor-initializing-component')) {
      component.addClass('keditor-initializing-component');
      component.attr('id', self.generateId('component'));

      if (typeof options.onBeforeInitComponent === 'function') {
        options.onBeforeInitComponent.call(self, component, contentArea);
      }

      var componentContent = component.children('.keditor-component-content');
      componentContent.attr('id', self.generateId('component-content'));
      var componentType = self.getComponentType(component);
      (0, _log.default)("Component type: ".concat(componentType));
      var componentData = KEditor.components[componentType];
      (0, _log.default)('Render KEditor toolbar for component', component);
      component.append(self.generateToolbar(_toolbarType.default.COMPONENT, componentData.settingEnabled));
      component.find('[data-dynamic-href]').each(function () {
        var dynamicElement = $(this);
        self.initDynamicContent(dynamicElement);
      });

      if (typeof componentData.init === 'function') {
        componentData.init.call(componentData, contentArea, container, component, self);
      } else {
        (0, _log.default)("\"init\" function of component type \"".concat(componentType, "\" does not exist"));
      }

      if (typeof options.onInitComponent === 'function') {
        options.onInitComponent.call(self, component, contentArea);
      }

      component.addClass('keditor-initialized-component');
      component.removeClass('keditor-initializing-component');
    } else {
      if (component.hasClass('keditor-initialized-component')) {
        (0, _log.default)('Component is already initialized!');
      } else {
        (0, _log.default)('Component is initializing...');
      }
    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.initDynamicContent = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(dynamicElement) {
    (0, _log.default)('initDynamicContent', dynamicElement);
    var self = this;
    var options = self.options;
    var component = dynamicElement.closest('.keditor-component');
    var contentArea = dynamicElement.closest('.keditor-content-area');
    dynamicElement.attr('id', self.generateId('dynamic-element'));

    if (typeof options.onBeforeDynamicContentLoad === 'function') {
      options.onBeforeDynamicContentLoad.call(self, dynamicElement, component, contentArea);
    }

    var dynamicHref = dynamicElement.attr('data-dynamic-href');
    var data = self.getDataAttributes(component, ['data-type', 'data-dynamic-href'], false);
    data = $.param(data);
    (0, _log.default)("Dynamic href: ".concat(dynamicHref, ", Data: ").concat(data));
    return $.ajax({
      url: dynamicHref,
      data: data,
      type: 'GET',
      dataType: 'HTML',
      success: function success(response, status, xhr) {
        (0, _log.default)('Dynamic content is loaded', dynamicElement, response, status, xhr);
        dynamicElement.html(response);

        if (typeof options.onDynamicContentLoaded === 'function') {
          options.onDynamicContentLoaded.call(self, dynamicElement, response, status, xhr, contentArea);
        }
      },
      error: function error(response, status, xhr) {
        (0, _log.default)('Error when loading dynamic content', dynamicElement, response, status, xhr);

        if (typeof options.onDynamicContentError === 'function') {
          options.onDynamicContentError.call(self, dynamicElement, response, status, xhr, contentArea);
        }
      }
    });
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.convertToContainer = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(contentArea, target) {
    (0, _log.default)('convertToContainer', contentArea, target);
    var self = this;
    var container;

    if (target.is('section')) {
      target.addClass('keditor-ui keditor-container');
      target.wrapInner('<section class="keditor-ui keditor-container-inner"></section>');
      container = target;
    } else {
      target.wrap('<section class="keditor-ui keditor-container"><section class="keditor-ui keditor-container-inner"></section></section>');
      container = target.parent().parent();
    }

    self.initContainer(contentArea, container);
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.getContainerContent = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(container, isNested) {
    (0, _log.default)("getContainerContent - isNested=".concat(isNested), container);
    var self = this;
    var containerInner = container.children('.keditor-container-inner').clone();
    containerInner.find('[data-type=container-content]').not(isNested ? '' : '.keditor-sub-container-content').each(function () {
      var containerContent = $(this);
      containerContent.removeClass('keditor-container-content keditor-sub-container-content ui-sortable').removeAttr('id');
      var containerContentInner = containerContent.children();
      var content = '';
      containerContentInner.children().each(function () {
        var child = $(this);

        if (child.is('.keditor-component')) {
          content += self.getComponentContent(child);
        } else if (child.is('.keditor-sub-container')) {
          content += self.getContainerContent(child, true);
        }
      });
      containerContent.html(content);
    });
    return "<section>".concat(containerInner.html(), "</section>");
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../constants/toolbarType", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../constants/toolbarType"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.toolbarType, global.log);
    global.initContainer = mod.exports;
  }
})(this, function (_exports, _toolbarType, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _toolbarType = _interopRequireDefault(_toolbarType);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(contentArea, container) {
    var self = this;
    var options = self.options;
    var isNested = options.nestedContainerEnabled && container.closest('[data-type="container-content"]').length > 0;
    (0, _log.default)("initContainer - isNested=".concat(isNested), contentArea, container);

    if (!container.hasClass('keditor-initialized-container') || !container.hasClass('keditor-initializing-container')) {
      container.addClass('keditor-initializing-container');

      if (typeof options.onBeforeInitContainer === 'function') {
        options.onBeforeInitContainer.call(self, container, contentArea);
      }

      if (isNested) {
        container.addClass('keditor-sub-container');
      }

      (0, _log.default)('Render KEditor toolbar for container', container);
      container.append(self.generateToolbar(isNested ? _toolbarType.default.SUB_CONTAINER : _toolbarType.default.CONTAINER));
      container.attr('id', self.generateId(isNested ? 'sub-container' : 'container'));
      var containerContents = container.find('[data-type="container-content"]');
      (0, _log.default)("Initialize ".concat(containerContents.length, " container content(s)"));
      containerContents.each(function () {
        var containerContent = $(this);

        if (options.nestedContainerEnabled && !isNested && containerContent.parents('[data-type="container-content"]').length > 0) {
          // Do nothing because it's container content of sub container
          return;
        }

        self.initContainerContent(contentArea, container, containerContent, isNested);
      });

      if (typeof options.onInitContainer === 'function') {
        options.onInitContainer.call(self, container, contentArea);
      }

      container.addClass('keditor-initialized-container');
      container.removeClass('keditor-initializing-container');
    } else {
      if (container.hasClass('keditor-initialized-container')) {
        (0, _log.default)('Container is already initialized!');
      } else {
        (0, _log.default)('Container is initializing...');
      }
    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../constants/toolbarType", "../constants/snippetType", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../constants/toolbarType"), require("../constants/snippetType"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.toolbarType, global.snippetType, global.log);
    global.initContainerContent = mod.exports;
  }
})(this, function (_exports, _toolbarType, _snippetType, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _toolbarType = _interopRequireDefault(_toolbarType);
  _snippetType = _interopRequireDefault(_snippetType);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(contentArea, container, containerContent, isNested) {
    (0, _log.default)("initContainerContent - isNested=".concat(isNested), contentArea, container, containerContent);
    var self = this;
    var options = self.options;
    containerContent.addClass('keditor-container-content');

    if (isNested) {
      containerContent.addClass('keditor-sub-container-content');
    }

    containerContent.attr('id', self.generateId('container-content'));
    var containerContentInner = $('<div class="keditor-container-content-inner"></div>');
    containerContentInner.html(containerContent.html());
    containerContent.html(containerContentInner);
    (0, _log.default)('Initialize toolbar for container content');
    var containerContentToolbar = $(self.generateToolbar(isNested ? _toolbarType.default.SUB_CONTAINER_CONTENT : _toolbarType.default.CONTAINER_CONTENT));
    containerContentToolbar.appendTo(containerContent);

    if (options.explicitSnippetEnabled) {
      if (!isNested) {
        if (options.explicitSnippetEnabled) {
          containerContentToolbar.children('.btn-add-container').on('click', function (e) {
            e.preventDefault();
            self.openModal(containerContentInner, _snippetType.default.CONTAINER);
          });
        }
      }

      containerContentToolbar.children('.btn-add-component').on('click', function (e) {
        e.preventDefault();
        self.openModal(containerContentInner, _snippetType.default.COMPONENT);
      });
    } else {
      containerContentToolbar.children('.btn-add-content').on('click', function (e) {
        e.preventDefault();
        self.openModal(containerContentInner, isNested ? _snippetType.default.COMPONENT : options.nestedContainerEnabled ? _snippetType.default.ALL : _snippetType.default.COMPONENT);
      });
    }

    (0, _log.default)('Initialize $.fn.sortable for container content');
    containerContentInner.sortable({
      handle: '.btn-component-reposition, .btn-container-reposition',
      helper: 'clone',
      items: '> section',
      connectWith: '.keditor-container-content-inner',
      tolerance: 'pointer',
      sort: function sort() {
        $(this).removeClass('ui-state-default');
      },
      receive: function receive(event, ui) {
        (0, _log.default)('On received snippet', event, ui);
        var helper = ui.helper;
        var item = ui.item;
        var container;

        if (helper) {
          helper.remove();
        }

        container = item.closest('.keditor-container');

        if (!container.hasClass('showed-keditor-toolbar')) {
          $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
          container.addClass('showed-keditor-toolbar');
        }

        if (typeof options.onContainerChanged === 'function') {
          options.onContainerChanged.call(self, event, container, contentArea);
        }

        if (typeof options.onContentChanged === 'function') {
          options.onContentChanged.call(self, event, contentArea);
        }

        item.removeClass('keditor-ui-dragging');
      },
      start: function start(e, ui) {
        ui.item.addClass('keditor-ui-dragging');
      },
      stop: function stop(e, ui) {
        if (ui.helper) {
          ui.helper.remove();
        }

        ui.item.removeClass('keditor-ui-dragging');
      }
    });
    (0, _log.default)('Initialize existing components inside container content');
    containerContentInner.children().each(function () {
      var child = $(this);

      if (child.find('[data-type="container-content"]').length > 0) {
        self.convertToContainer(contentArea, child);
      } else {
        self.convertToComponent(contentArea, container, child, true);
      }
    });
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../constants/toolbarType", "../constants/snippetType", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../constants/toolbarType"), require("../constants/snippetType"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.toolbarType, global.snippetType, global.log);
    global.initContentArea = mod.exports;
  }
})(this, function (_exports, _toolbarType, _snippetType, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _toolbarType = _interopRequireDefault(_toolbarType);
  _snippetType = _interopRequireDefault(_snippetType);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(contentArea, dontInitToolbar) {
    (0, _log.default)('initContentArea', contentArea);
    var self = this;
    var options = self.options;
    contentArea.addClass('keditor-content-area');
    var content = contentArea.html();
    var contentAreaInner = $('<div class="keditor-content-area-inner"></div>').html(content);
    contentArea.html(contentAreaInner);

    if (typeof options.onBeforeInitContentArea === 'function') {
      options.onBeforeInitContentArea.call(self, contentArea);
    }

    if (!dontInitToolbar) {
      var contentAreaToolbar = $(self.generateToolbar(_toolbarType.default.CONTENT_AREA));
      contentArea.append(contentAreaToolbar);
      contentAreaToolbar.children(options.explicitSnippetEnabled ? '.btn-add-container' : '.btn-add-content').on('click', function (e) {
        e.preventDefault();
        self.openModal(contentAreaInner, options.explicitSnippetEnabled ? _snippetType.default.CONTAINER : _snippetType.default.ALL);
      });
    }

    (0, _log.default)('Initialize $.fn.sortable for content area');
    contentAreaInner.sortable({
      handle: '.keditor-toolbar-container:not(.keditor-toolbar-sub-container) .btn-container-reposition',
      items: '> section',
      helper: 'clone',
      connectWith: '.keditor-content-area',
      axis: 'y',
      tolerance: 'pointer',
      sort: function sort() {
        $(this).removeClass('ui-state-default');
      },
      receive: function receive(event, ui) {
        (0, _log.default)('On received snippet', event, ui);
        var helper = ui.helper;
        var item = ui.item;

        if (helper) {
          helper.remove();
        }

        self.closeSidebar();

        if (typeof options.onContentChanged === 'function') {
          options.onContentChanged.call(self, event, contentArea);
        }

        item.addClass('keditor-ui-dragging');
      },
      start: function start(e, ui) {
        ui.item.addClass('keditor-ui-dragging');
      },
      stop: function stop(e, ui) {
        if (ui.helper) {
          ui.helper.remove();
        }

        ui.item.removeClass('keditor-ui-dragging');
      }
    });
    (0, _log.default)('Initialize existing containers in content area');
    contentAreaInner.children('section').each(function () {
      self.convertToContainer(contentArea, $(this));
    });

    if (typeof options.onInitContentArea === 'function') {
      var contentData = options.onInitContentArea.call(self, contentArea);

      if (contentData && contentData.length > 0) {
        $.each(contentData, function () {
          self.convertToContainer(contentArea, $(this));
        });
      }
    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.initContentAreas = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default() {
    (0, _log.default)('initContentAreas');
    var self = this;
    var contentAreasWrapper = self.contentAreasWrapper;
    var options = self.options;
    var contentAreas;

    if (options.contentAreasSelector) {
      contentAreas = contentAreasWrapper.find(options.contentAreasSelector);
    }

    if (!contentAreas || contentAreas.length === 0) {
      (0, _log.default)('Do not find any content area. Creating default content area...');
      var originalContent = contentAreasWrapper.html();
      contentAreas = $('<div />').html(originalContent);
      contentAreasWrapper.empty().append(contentAreas);
    }

    contentAreas.each(function () {
      var contentArea = $(this);

      if (!contentArea.attr('id')) {
        contentArea.attr('id', self.generateId('content-area'));
      }

      self.initContentArea(contentArea);
    });
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.destroy = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    var self = this;
    var element = self.element;
    var id = self.id;
    var content = self.getContent(false);

    if (self.options.iframeMode) {
      self.iframeWrapper.remove();
    } else {
      self.contentAreasWrapper.remove();
    }

    if (element.is('textarea')) {
      element.val(content);
    } else {
      element.html(content);
    }

    element.removeClass('keditor-hidden-element');
    element.data('keditor', null);
    delete KEditor.instances[id];
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.getContent = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(inArray) {
    var self = this;
    var result = [];
    self.contentAreasWrapper.find('.keditor-content-area-inner').each(function () {
      var html = '';
      $(this).children('.keditor-container').each(function () {
        var container = $(this);
        html += self.getContainerContent(container);
      });
      result.push(html);
    });
    return inArray ? result : result.join('\n');
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.initIframe = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default() {
    var self = this;
    var options = self.options;
    var element = self.element;
    var originalContent = element.is('textarea') ? element.val() : element.html();
    var wrapper = self.iframeWrapper = $('<div class="keditor-ui keditor-iframe-wrapper"></div>');
    var iframe = self.iframe = $('<iframe class="keditor-ui keditor-iframe"></iframe>');
    element.after(wrapper);
    wrapper.attr('id', self.generateId('iframe-wrapper')).append(iframe);
    element.addClass('keditor-hidden-element');
    var iframeDoc = self.iframeDoc = iframe.contents(); // Fix issue Firefox can't render content inside iframe
    // ======================================================

    iframeDoc.get(0).open();
    iframeDoc.get(0).close(); // ======================================================

    self.window = iframe[0].contentWindow ? iframe[0].contentWindow : iframe[0].contentDocument.defaultView;
    var iframeHead = self.iframeHead = iframeDoc.find('head');
    var iframeBody = self.iframeBody = self.body = iframeDoc.find('body');
    (0, _log.default)('Adding styles to iframe...');
    var styles = '';
    $('[data-type="keditor-style"]').each(function () {
      var style = $(this);
      var href = style.attr('href') || style.attr('data-href') || '';

      if (href) {
        styles += "<link rel=\"stylesheet\" type=\"text/css\" href=\"".concat(href, "\" />\n");
      } else {
        styles += "<style type=\"text/css\">".concat(style.html(), "</style>\n");
      }
    });

    if (options.contentStyles && $.isArray(options.contentStyles)) {
      $.each(options.contentStyles, function (i, style) {
        var idStr = '';

        if (style.id) {
          idStr = " id=\"".concat(style.id, "\" ");
        }

        if (style.href) {
          styles += "<link rel=\"stylesheet\" type=\"text/css\" href=\"".concat(style.href, "\" ").concat(idStr, " />\n");
        } else {
          styles += "<style type=\"text/css\" ".concat(idStr, ">").concat(style.content, "</style>\n");
        }
      });
    }

    iframeHead.append(styles);
    (0, _log.default)('Adding original content to iframe...');
    var contentAreasWrapper = self.generateContentAreasWrapper(originalContent);
    iframeBody.append(contentAreasWrapper);
    self.contentAreasWrapper = contentAreasWrapper;

    if (typeof options.onInitIframe === 'function') {
      options.onInitIframe.call(self, iframe, iframeHead, iframeBody);
    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.initIframeCover = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(iframe, wrapper) {
    if (!wrapper) {
      iframe.wrap('<div class="keditor-iframe-wrapper-fake"></div>');
      wrapper = iframe.parent();
    }

    wrapper.addClass('keditor-iframe-wrapper');
    var cover = $('<div class="keditor-iframe-cover"></div>');
    wrapper.prepend(cover);
    wrapper.on('mouseleave', function () {
      wrapper.removeClass('hidden-cover');
    });
    cover.on('dblclick', function (e) {
      e.preventDefault();
      wrapper.addClass('hidden-cover');
    });
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./constants/defaults", "./constants/classNames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./constants/defaults"), require("./constants/classNames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defaults, global.classNames);
    global.init = mod.exports;
  }
})(this, function (_exports, _defaults, _classNames) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _defaults = _interopRequireDefault(_defaults);
  _classNames = _interopRequireDefault(_classNames);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(target, config) {
    var self = this;
    var element = self.element = target;
    var options = self.options = $.extend({}, _defaults.default, config);

    if (options.iframeMode) {
      self.initIframe();
    } else {
      self.window = window;
      self.body = $(document.body);
      var originalContent = element.val() || element.html() || '';
      var contentAreasWrapper = self.generateContentAreasWrapper(originalContent);

      if (element.is('textarea')) {
        element.after(contentAreasWrapper);
        element.addClass(_classNames.default.HIDDEN_ELEMENT);
      } else {
        element.empty().append(contentAreasWrapper);
      }

      self.contentAreasWrapper = contentAreasWrapper;
    }

    self.initSidebar();
    self.initSnippetsModal();
    self.initContentAreas();

    if (!self.body.hasClass(_classNames.default.CLICKS_INITIALIZED)) {
      self.initKEditorClicks();
    }

    self.id = self.generateId();
    KEditor.instances[self.id] = self;

    if (typeof options.onReady === 'function') {
      options.onReady.call(self);
    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.closeModal = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    var self = this;
    var modal = self.modal;
    self.modalTarget = null;
    self.modalAction = null;
    modal.find('.keditor-modal-title').html('');
    modal.find('.keditor-snippets-wrapper .selected').removeClass('selected');
    modal.removeClass('showed');
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../constants/snippetType", "../utils/error", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../constants/snippetType"), require("../utils/error"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.snippetType, global.error, global.log);
    global.initSnippetsModal = mod.exports;
  }
})(this, function (_exports, _snippetType, _error, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _snippetType = _interopRequireDefault(_snippetType);
  _error = _interopRequireDefault(_error);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default() {
    var self = this;
    var options = self.options;
    var modalId = self.generateId('modal');
    var snippetsWrapperHtml = '';

    if (options.explicitSnippetEnabled) {
      snippetsWrapperHtml = "<div class=\"keditor-snippets-wrapper keditor-snippets-wrapper-container\"><div class=\"keditor-snippets keditor-snippets-container\"></div></div><div class=\"keditor-snippets-wrapper keditor-snippets-wrapper-component\"><div class=\"keditor-snippets keditor-snippets-component\"></div></div>";
    } else {
      snippetsWrapperHtml = "<div class=\"keditor-snippets-wrapper\"><div class=\"keditor-snippets\"></div></div>";
    }

    var modal = self.modal = $("<div class=\"keditor-ui keditor-modal\" id=\"".concat(modalId, "\"><div class=\"keditor-modal-header\"><button type=\"button\" class=\"keditor-modal-close\">&times;</button><h4 class=\"keditor-modal-title\"></h4></div><div class=\"keditor-modal-body\">").concat(snippetsWrapperHtml, "</div><div class=\"keditor-modal-footer\"><button type=\"button\" class=\"keditor-ui keditor-btn keditor-btn-default keditor-modal-close\">Close</button><button type=\"button\" class=\"keditor-ui keditor-btn keditor-btn-primary keditor-modal-add\">Add</button></div></div>"));

    if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
      (0, _log.default)("Getting snippets form \"".concat(options.snippetsUrl, "\"..."));
      $.ajax({
        type: 'get',
        dataType: 'html',
        url: options.snippetsUrl,
        success: function success(resp) {
          (0, _log.default)('Success in getting snippets');

          if (typeof options.onSnippetsLoaded === 'function') {
            resp = options.onSnippetsLoaded.call(self, resp) || resp;
          }

          self.renderSnippets(resp);

          if (options.snippetsFilterEnabled) {
            if (options.explicitSnippetEnabled) {
              self.initSnippetsFilter(_snippetType.default.CONTAINER);
              self.initSnippetsFilter(_snippetType.default.COMPONENT);
            } else {
              self.initSnippetsFilter(_snippetType.default.ALL);
            }
          }
        },
        error: function error(jqXHR) {
          (0, _log.default)('Error when getting snippets', jqXHR);

          if (typeof options.onSnippetsError === 'function') {
            options.onSnippetsError.call(self, jqXHR);
          }
        }
      }); // Close buttons

      modal.find('.keditor-modal-close').on('click', function (e) {
        e.preventDefault();
        self.closeModal();
      }); // Add button

      modal.find('.keditor-modal-add').on('click', function (e) {
        e.preventDefault();
        var selectedSnippet = modal.find('.keditor-snippets-wrapper .selected');

        if (selectedSnippet.length === 0) {
          return;
        }

        var contentArea = self.modalTarget.closest('.keditor-content-area');
        var snippetType = selectedSnippet.attr('data-type');
        var snippetContentElement = modal.find(selectedSnippet.attr('data-snippet'));
        var snippetContent = snippetContentElement.html();
        var isAddingContainer = false;
        var isAddingComponent = false;
        var isAddingComponentWithContainer = false;

        if (options.explicitSnippetEnabled) {
          switch (self.modalSnippetType) {
            case _snippetType.default.COMPONENT:
              isAddingComponent = true;
              break;

            case _snippetType.default.CONTAINER:
              isAddingContainer = true;
              break;

            default: // Do nothing

          }
        } else {
          if (snippetType === 'container') {
            isAddingContainer = true;
          } else {
            switch (self.modalSnippetType) {
              case _snippetType.default.COMPONENT:
                isAddingComponent = true;
                break;

              case _snippetType.default.ALL:
                if (self.modalTarget.is('.keditor-container-content-inner')) {
                  isAddingComponent = true;
                } else {
                  isAddingComponentWithContainer = true;
                }

                break;

              default: // Do nothing

            }
          }
        }

        var newContainer;
        var newComponent;

        if (isAddingContainer) {
          self.body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
          newContainer = $("<section class=\"keditor-ui keditor-container showed-keditor-toolbar\"><section class=\"keditor-ui keditor-container-inner\">".concat(snippetContent, "</section></section>"));
          self.modalTarget.append(newContainer);

          if (typeof options.onContainerSnippetAdded === 'function') {
            options.onContainerSnippetAdded.call(self, e, newContainer, selectedSnippet, contentArea);
          }

          if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
          }

          self.initContainer(contentArea, newContainer);
        }

        if (isAddingComponent) {
          var dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
          newComponent = $("<section class=\"keditor-ui keditor-component\" data-type=\"".concat(snippetType, "\" ").concat(dataAttributes.join(' '), "><section class=\"keditor-ui keditor-component-content\">").concat(snippetContent, "</section></section>"));
          self.modalTarget.append(newComponent);
          var container = self.modalTarget.closest('.keditor-container');

          if (typeof options.onComponentSnippetAdded === 'function') {
            options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
          }

          if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
          }

          self.initComponent(contentArea, container, newComponent);
        }

        if (isAddingComponentWithContainer) {
          self.body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');

          var _dataAttributes = self.getDataAttributes(snippetContentElement, null, true);

          newContainer = $("<section class=\"keditor-ui keditor-container showed-keditor-toolbar\"><section class=\"keditor-ui keditor-container-inner\">".concat(options.containerForQuickAddComponent, "</section></section>"));
          newComponent = $("<section class=\"keditor-ui keditor-component\" data-type=\"".concat(snippetType, "\" ").concat(_dataAttributes.join(' '), "><section class=\"keditor-ui keditor-component-content\">").concat(snippetContent, "</section></section>"));
          newContainer.find('[data-type="container-content"]').eq(0).html(newComponent);
          self.modalTarget.append(newContainer);

          if (typeof options.onComponentSnippetAdded === 'function') {
            options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
          }

          if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
          }

          self.initContainer(contentArea, newContainer);
        }

        self.closeModal();
      }); // Action click for snippet

      modal.on('click', '.keditor-snippet', function (e) {
        e.preventDefault();
        var snippet = $(this);

        if (!snippet.hasClass('selected')) {
          snippet.parent().find('.selected').removeClass('selected');
          snippet.addClass('selected');
        }
      });
      var cssTransitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
      modal.on(cssTransitionEnd, function () {
        if (!modal.hasClass('showed')) {
          modal.css('display', 'none');
          $(document.body).removeClass('opened-modal');
        }
      });
      modal.appendTo(document.body);
    } else {
      (0, _error.default)('"snippetsUrl" must be not null!');
    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../constants/snippetType", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../constants/snippetType"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.snippetType, global.log);
    global.openModal = mod.exports;
  }
})(this, function (_exports, _snippetType, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _snippetType = _interopRequireDefault(_snippetType);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(target, snippetType) {
    (0, _log.default)('openModal', target, snippetType);
    var self = this;
    var modal = self.modal;
    var options = self.options;
    var modalTitle = '';

    switch (snippetType) {
      case _snippetType.default.CONTAINER:
        modalTitle = 'Add container';
        break;

      case _snippetType.default.COMPONENT:
        modalTitle = 'Add component';
        break;

      default: // Do nothing

    }

    if (options.explicitSnippetEnabled) {
      modal.find('.keditor-snippets-wrapper').css('display', 'none');
      modal.find(snippetType === _snippetType.default.COMPONENT ? '.keditor-snippets-wrapper-component' : '.keditor-snippets-wrapper-container').css('display', 'block');
    } else {
      modal.find('.keditor-snippets-wrapper').css('display', 'block').find('.keditor-snippet[data-type=container]').css('display', snippetType === _snippetType.default.COMPONENT ? 'none' : 'block');
      modalTitle = 'Add content';
    }

    modal.find('.keditor-modal-title').html(modalTitle);
    self.modalTarget = target;
    self.modalSnippetType = snippetType;
    modal.css('display', 'block');
    $(document.body).addClass('opened-modal');
    setTimeout(function () {
      modal.addClass('showed');
    }, 0);
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./utils/error"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./utils/error"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.error);
    global.setContent = mod.exports;
  }
})(this, function (_exports, _error) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _error = _interopRequireDefault(_error);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(content, contentArea) {
    var self = this;
    var contentAreasWrapper = self.contentAreasWrapper;

    if (!contentArea) {
      contentArea = contentAreasWrapper.children('.keditor-content-area');
    } else {
      if (!contentArea.jquery) {
        contentArea = contentAreasWrapper.find(contentArea);
      }
    }

    if (contentArea.length === 0) {
      (0, _error.default)('Content area does not exist!');
    }

    contentArea.html(content);
    self.initContentArea(contentArea, true);
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.closeSidebar = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default() {
    var self = this;
    var options = self.options;
    var sidebar = self.sidebar;
    var activeForm = sidebar.find('.keditor-sidebar-body').children('.active');

    if (activeForm.length > 0) {
      if (activeForm.is('.keditor-container-setting')) {
        if (typeof options.containerSettingHideFunction === 'function') {
          options.containerSettingHideFunction.call(self, activeForm, self);
        }
      } else {
        var activeType = activeForm.attr('data-type');
        var componentData = KEditor.components[activeType];

        if (typeof componentData.hideSettingForm === 'function') {
          componentData.hideSettingForm.call(componentData, activeForm, self);
        }
      }

      activeForm.removeClass('active');
    }

    self.setSettingComponent(null);
    self.setSettingContainer(null);
    sidebar.removeClass('opened');
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/error", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/error"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.error, global.log);
    global.initSidebar = mod.exports;
  }
})(this, function (_exports, _error, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _error = _interopRequireDefault(_error);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default() {
    var self = this;
    var options = self.options;
    var sidebarId = self.generateId('sidebar');
    var sidebar = self.sidebar = $("<div class=\"keditor-ui keditor-sidebar\" id=\"".concat(sidebarId, "\"><div class=\"keditor-ui keditor-sidebar-header\"><span class=\"keditor-ui keditor-sidebar-title\"></span><a href=\"javascript:void(0);\" class=\"keditor-ui keditor-sidebar-close\">&times;</a></div><div class=\"keditor-ui keditor-sidebar-body\"></div></div>"));
    sidebar.find('.keditor-sidebar-close').on('click', function (e) {
      e.preventDefault();
      self.closeSidebar();
    });
    var sidebarBody = sidebar.find('.keditor-sidebar-body');
    sidebarBody.on('submit', 'form', function (e) {
      e.preventDefault();
      return false;
    });

    if (options.containerSettingEnabled === true) {
      if (typeof options.containerSettingInitFunction === 'function') {
        var form = $('<div  class="keditor-ui keditor-setting-form keditor-container-setting"></div>');
        sidebarBody.append(form);
        (0, _log.default)('Initialize container setting panel');
        options.containerSettingInitFunction.call(self, form, self);
      } else {
        (0, _error.default)('"containerSettingInitFunction" is not function!');
      }
    }

    sidebar.appendTo(options.iframeMode ? self.iframeWrapper : self.body);
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.openSidebar = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(target) {
    var self = this;
    var options = self.options;
    var sidebar = self.sidebar;
    var sidebarTitle = sidebar.find('.keditor-sidebar-title');
    var sidebarBody = sidebar.find('.keditor-sidebar-body');
    var activeForm = sidebarBody.children('.active');
    activeForm.removeClass('active');

    if (target.is('.keditor-component')) {
      self.setSettingComponent(target);
      self.setSettingContainer(null);
      var componentType = self.getComponentType(target);
      var componentData = KEditor.components[componentType];
      sidebarTitle.html(componentData.settingTitle);
      var settingForm = sidebarBody.find(".keditor-setting-".concat(componentType));

      if (settingForm.length === 0) {
        var _componentData = KEditor.components[componentType];

        if (typeof _componentData.initSettingForm === 'function') {
          settingForm = $("<divdata-type=\"".concat(componentType, "\"class=\"keditor-ui keditor-setting-form keditor-setting-").concat(componentType, " clearfix active\"></div>"));
          var loadingText = $('<span />').html('Loading...');
          sidebarBody.append(settingForm);
          settingForm.append(loadingText);

          var initFunction = _componentData.initSettingForm.call(_componentData, settingForm, self);

          $.when(initFunction).done(function () {
            (0, _log.default)("Initialized setting form for component type \"".concat(componentType, "\""));
            setTimeout(function () {
              loadingText.remove();

              if (typeof _componentData.showSettingForm === 'function') {
                _componentData.showSettingForm.call(_componentData, settingForm, target, self);
              }
            }, 100);
          });
        }
      } else {
        if (typeof componentData.showSettingForm === 'function') {
          componentData.showSettingForm.call(componentData, settingForm, target, self);
        }

        settingForm.addClass('active');
      }
    } else {
      self.setSettingContainer(target);
      self.setSettingComponent(null);
      sidebarTitle.html('Container Settings');

      var _settingForm = sidebar.find('.keditor-container-setting');

      if (typeof options.containerSettingShowFunction === 'function') {
        options.containerSettingShowFunction.call(self, _settingForm, target, self);
      }

      _settingForm.addClass('active');
    }

    sidebar.addClass('opened');
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../constants/snippetType", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../constants/snippetType"), require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.snippetType, global.log);
    global.initSnippetsFilter = mod.exports;
  }
})(this, function (_exports, _snippetType, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _snippetType = _interopRequireDefault(_snippetType);
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(type) {
    (0, _log.default)('initSnippetsFilter');
    var self = this;
    var options = self.options;
    var modal = self.modal;
    var categories;
    var snippetsWrapperSelector;

    switch (type) {
      case _snippetType.default.ALL:
        categories = self.snippetsCategories;
        snippetsWrapperSelector = '.keditor-snippets-wrapper';
        break;

      case _snippetType.default.CONTAINER:
        categories = self.snippetsContainerCategories;
        snippetsWrapperSelector = '.keditor-snippets-wrapper-container';
        break;

      case _snippetType.default.COMPONENT:
        categories = self.snippetsComponentCategories;
        snippetsWrapperSelector = '.keditor-snippets-wrapper-component';
        break;

      default: // Do nothing

    }

    var categoriesOptions = '';
    $.each(categories, function (i, category) {
      categoriesOptions += "<option value=\"".concat(category, "\">").concat(category, "</option>");
    });
    var snippetsWrapper = modal.find(snippetsWrapperSelector);
    var snippets = snippetsWrapper.find('.keditor-snippets').children('.keditor-snippet');
    snippetsWrapper.prepend("<div class=\"keditor-ui keditor-snippets-filter-wrapper\"><select class=\"keditor-ui keditor-snippets-filter\"><option value=\"\" selected=\"selected\">All</option>".concat(categoriesOptions, "</select><input type=\"text\" class=\"keditor-ui keditor-snippets-search\" value=\"\" placeholder=\"Type to search...\" /></div>"));
    snippets.each(function () {
      var snippet = $(this);
      var categories = snippet.attr('data-keditor-categories') || '';
      var filterCategories = categories.toLowerCase();
      categories = categories.split(options.snippetsCategoriesSeparator);
      filterCategories = filterCategories.split(options.snippetsCategoriesSeparator);
      snippet.data('categories', categories);
      snippet.data('categoriesFilter', filterCategories);
    });
    var txtSearch = snippetsWrapper.find('.keditor-snippets-search');
    var cbbFilter = snippetsWrapper.find('.keditor-snippets-filter');

    var doFilter = function doFilter() {
      var selectedCategory = (cbbFilter.val() || '').toLowerCase();
      var searchText = (txtSearch.val() || '').toLowerCase();
      snippets.filter('.selected').removeClass('selected');

      if (selectedCategory || searchText) {
        (0, _log.default)('Filtering snippets');
        snippets.each(function () {
          var snippet = $(this);
          var dataCategories = snippet.data('categoriesFilter');
          var dataCategoriesString = dataCategories.join(';');
          var error = 0;

          if (selectedCategory) {
            if ($.inArray(selectedCategory, dataCategories) === -1) {
              error++;
            }
          }

          if (searchText) {
            var title = snippet.attr('title').toLowerCase();

            if (title.indexOf(searchText) === -1 && dataCategoriesString.indexOf(searchText) === -1) {
              error++;
            }
          }

          snippet[error === 0 ? 'removeClass' : 'addClass']('not-matched');
        });
      } else {
        (0, _log.default)('Show all snippets');
        snippets.removeClass('not-matched');
      }
    };

    cbbFilter.on('change', function () {
      doFilter();
    });
    var timer;
    txtSearch.on('keydown', function () {
      clearTimeout(timer);
      timer = setTimeout(doFilter, 200);
    });
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.renderSnippets = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _default(resp) {
    (0, _log.default)('renderSnippets');
    var self = this;
    var options = self.options;
    var snippetsContainerHtml = '';
    var snippetsComponentHtml = '';
    var snippetsContentHtml = '';
    self.snippetsCategories = [];
    self.snippetsContainerCategories = [];
    self.snippetsComponentCategories = [];
    $(resp).filter('div').each(function (i) {
      var snippet = $(this);
      var snippetId = self.generateId('snippet');
      var content = snippet.html().trim();
      var previewUrl = snippet.attr('data-preview');
      var type = snippet.attr('data-type');
      var title = snippet.attr('data-keditor-title');
      var categories = snippet.attr('data-keditor-categories') || '';
      var snippetHtml = "<sectionclass=\"keditor-ui keditor-snippet\"data-snippet=\"#".concat(snippetId, "\"data-type=\"").concat(type, "\"title=\"").concat(title, "\"data-keditor-categories=\"").concat(categories, "\"><span><span style=\"background-image: url('").concat(previewUrl, "')\"></span></span></section>");
      categories = categories.split(options.snippetsCategoriesSeparator);

      if (type === 'container') {
        snippetsContainerHtml += snippetHtml;
        self.snippetsContainerCategories = self.snippetsContainerCategories.concat(categories);
      } else if (type.indexOf('component') !== -1) {
        snippetsComponentHtml += snippetHtml;
        self.snippetsComponentCategories = self.snippetsComponentCategories.concat(categories);
      }

      var dataAttributes = self.getDataAttributes(snippet, ['data-preview', 'data-type', 'data-keditor-title', 'data-keditor-categories'], true);
      snippetsContentHtml += "<script id=\"".concat(snippetId, "\" type=\"text/html\" ").concat(dataAttributes.join(' '), ">").concat(content, "</script>");
    });
    self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
    self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
    self.snippetsCategories = self.beautifyCategories([].concat(_toConsumableArray(self.snippetsContainerCategories), _toConsumableArray(self.snippetsComponentCategories)));

    if (options.explicitSnippetEnabled) {
      self.modal.find('.keditor-snippets-container').html(snippetsContainerHtml);
      self.modal.find('.keditor-snippets-component').html(snippetsComponentHtml);
    } else {
      self.modal.find('.keditor-snippets').html(snippetsContainerHtml + snippetsComponentHtml);
    }

    self.modal.find('.keditor-modal-body').append(snippetsContentHtml);
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.beautifyCategories = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(categories) {
    var newArray = [];

    for (var i = 0; i < categories.length; i++) {
      var category = categories[i] || '';

      if (category !== '' && $.inArray(category, newArray) === -1) {
        newArray.push(category);
      }
    }

    return newArray.sort();
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.error = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default(message) {
    throw new Error("[ KEditor ] ".concat(message));
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.generateContentAreasWrapper = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(content) {
    var self = this;
    var options = self.options;
    var contentAreasWrapper = $(options.contentAreasWrapper || '<div />');
    contentAreasWrapper.attr('class', 'keditor-ui keditor-content-area-wrapper');

    if (!contentAreasWrapper.attr('id')) {
      contentAreasWrapper.attr('id', self.generateId('content-area-wrapper'));
    }

    contentAreasWrapper.html(content);
    return contentAreasWrapper;
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.generateId = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = function _default() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var timestamp = new Date().getTime();
    var random = Math.round(Math.random() * 9876543210);
    return "keditor-".concat(type, "-").concat(timestamp).concat(random);
  };

  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../constants/toolbarType"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../constants/toolbarType"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.toolbarType);
    global.generateToolbar = mod.exports;
  }
})(this, function (_exports, _toolbarType) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _toolbarType = _interopRequireDefault(_toolbarType);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default(type, isComponentConfigurable) {
    var self = this;
    var options = self.options;
    var settingBtn = '';

    if (!options.explicitSnippetEnabled) {
      var toolbarClass = '';

      switch (type) {
        case _toolbarType.default.CONTENT_AREA:
          toolbarClass = 'keditor-content-area-toolbar';

        case _toolbarType.default.CONTAINER_CONTENT:
        case _toolbarType.default.SUB_CONTAINER_CONTENT:
          toolbarClass = 'keditor-container-content-toolbar';
          return "<div class=\"keditor-ui ".concat(toolbarClass, "\"><a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-content\" title=\"Add content\">").concat(options.btnAddContentText, "</a></div>");

        default: // Do nothing

      }
    }

    switch (type) {
      case _toolbarType.default.CONTENT_AREA:
        return "<div class=\"keditor-ui keditor-content-area-toolbar\"><a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-container\" title=\"Add container\">".concat(options.btnAddContainerText, "</a></div>");

      case _toolbarType.default.CONTAINER:
        if (options.containerSettingEnabled === true) {
          settingBtn = "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-setting\">".concat(options.btnSettingContainerText, "</a>");
        }

        return "<div class=\"keditor-toolbar keditor-toolbar-container\"><a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-reposition\">".concat(options.btnMoveContainerText, "</a>").concat(settingBtn, "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-duplicate\">").concat(options.btnDuplicateContainerText, "</a><a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-delete\">").concat(options.btnDeleteContainerText, "</a></div>");

      case _toolbarType.default.SUB_CONTAINER:
        if (options.containerSettingEnabled === true) {
          settingBtn = "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-setting\">".concat(options.btnSettingContainerText, "</a>");
        }

        return "<div class=\"keditor-toolbar keditor-toolbar-container keditor-toolbar-sub-container\"><a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-reposition\">".concat(options.btnMoveContainerText, "</a>").concat(settingBtn, "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-duplicate\">").concat(options.btnDuplicateContainerText, "</a><a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-delete\">").concat(options.btnDeleteContainerText, "</a></div>");

      case _toolbarType.default.CONTAINER_CONTENT:
        return "<div class=\"keditor-ui keditor-container-content-toolbar keditor-btn-group\"><a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-container\" title=\"Add sub-container\">".concat(options.btnAddSubContainerText, "</a><a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-component\" title=\"Add component\">").concat(options.btnAddComponentText, "</a></div>");

      case _toolbarType.default.SUB_CONTAINER_CONTENT:
        return "<div class=\"keditor-ui keditor-container-content-toolbar\"><a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-component\" title=\"Add component\">".concat(options.btnAddComponentText, "</a></div>");

      case _toolbarType.default.COMPONENT:
        if (isComponentConfigurable) {
          settingBtn = "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-component-setting\">".concat(options.btnSettingComponentText, "</a>");
        }

        return "<div class=\"keditor-toolbar keditor-toolbar-component\"><a href=\"javascript:void(0);\" class=\"keditor-ui btn-component-reposition\">".concat(options.btnMoveComponentText, "</a>").concat(settingBtn, "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-component-duplicate\">").concat(options.btnDuplicateComponentText, "</a><a href=\"javascript:void(0);\" class=\"keditor-ui btn-component-delete\">").concat(options.btnDeleteComponentText, "</a></div>");

      default: // Do nothing

    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.getClickedElement = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(event, selector) {
    var target = $(event.target);
    var closest = target.closest(selector);

    if (target.is(selector)) {
      return target;
    } else if (closest.length > 0) {
      return closest;
    } else {
      return null;
    }
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.getDataAttributes = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(target, ignoreAttributes, isArray) {
    var dataAttributes = isArray ? [] : {};

    if (!ignoreAttributes) {
      ignoreAttributes = [];
    }

    $.each(target.get(0).attributes, function (i, attr) {
      if (attr.name.indexOf('data-') === 0 && $.inArray(attr.name, ignoreAttributes) === -1) {
        if (isArray) {
          dataAttributes.push("".concat(attr.name, "=\"").concat(attr.value, "\""));
        } else {
          dataAttributes[attr.name] = attr.value;
        }
      }
    });
    return dataAttributes;
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../utils/log"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../utils/log"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.log);
    global.initKEditorClicks = mod.exports;
  }
})(this, function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _log = _interopRequireDefault(_log);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _default() {
    (0, _log.default)('initKEditorClicks');
    var self = this;
    var options = self.options;
    var body = self.body;
    body.on('click', function (e) {
      var sidebar = self.getClickedElement(e, '.keditor-sidebar');
      var modal = self.getClickedElement(e, '.keditor-modal');
      var container = self.getClickedElement(e, '.keditor-container');

      if (container) {
        if (!container.hasClass('showed-keditor-toolbar')) {
          body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
          body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
          container.addClass('showed-keditor-toolbar');
          var contentArea = container.parent();

          if (typeof options.onContainerSelected === 'function') {
            options.onContainerSelected.call(self, e, container, contentArea);
          }
        }
      } else {
        if (!sidebar && !modal) {
          body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
          body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        }
      }

      var component = self.getClickedElement(e, '.keditor-component');

      if (component) {
        if (!component.hasClass('showed-keditor-toolbar')) {
          body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
          component.addClass('showed-keditor-toolbar');

          var _contentArea = component.parent();

          if (typeof options.onComponentSelected === 'function') {
            options.onComponentSelected.call(self, e, component, _contentArea);
          }
        }
      } else {
        if (!sidebar) {
          body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        }
      }
    });
    body.on('click', '.btn-container-setting', function (e) {
      e.preventDefault();
      var btn = $(this);
      (0, _log.default)('Click on .btn-container-setting', btn);
      var container = btn.closest('.keditor-container');

      if (body.hasClass('opened-keditor-setting') && body.hasClass('opened-keditor-sidebar')) {
        if (!container.is(self.settingContainer)) {
          self.openSidebar(container);
        } else {
          self.closeSidebar();
        }
      } else {
        self.openSidebar(container);
      }
    });
    body.on('click', '.btn-container-duplicate', function (e) {
      e.preventDefault();
      var btn = $(this);
      (0, _log.default)('Click on .btn-container-duplicate', btn);
      var container = btn.closest('.keditor-container');
      var contentArea = container.parent();
      var newContainer = $(self.getContainerContent(container, btn.parent().hasClass('keditor-toolbar-sub-container')));
      container.after(newContainer);
      self.convertToContainer(contentArea, newContainer);
      (0, _log.default)('Container is duplicated');

      if (typeof options.onContainerDuplicated === 'function') {
        options.onContainerDuplicated.call(self, container, newContainer, contentArea);
      }

      if (typeof options.onContentChanged === 'function') {
        options.onContentChanged.call(self, e, contentArea);
      }
    });
    body.on('click', '.btn-container-delete', function (e) {
      e.preventDefault();
      var btn = $(this);
      (0, _log.default)('Click on .btn-container-delete', btn);

      if (confirm(options.confirmDeleteContainerText)) {
        var container = btn.closest('.keditor-container');
        var components = container.find('.keditor-component');
        var contentArea = container.parent();

        if (typeof options.onBeforeContainerDeleted === 'function') {
          options.onBeforeContainerDeleted.call(self, e, container, contentArea);
        }

        var settingComponent = self.settingComponent;

        if (settingComponent) {
          var settingComponentParent = settingComponent.closest('.keditor-container');

          if (settingComponentParent.is(container)) {
            (0, _log.default)('Deleting container is container of setting container. Close setting panel for this setting component', settingComponent);
            self.closeSidebar();
          }
        } else if (container.is(self.settingContainer)) {
          (0, _log.default)('Deleting container is setting container. Close setting panel for this container', container);
          self.closeSidebar();
        }

        if (components.length > 0) {
          components.each(function () {
            self.deleteComponent($(this));
          });
        }

        container.remove();

        if (typeof options.onContainerDeleted === 'function') {
          options.onContainerDeleted.call(self, e, container, contentArea);
        }

        if (typeof options.onContentChanged === 'function') {
          options.onContentChanged.call(self, e, contentArea);
        }
      }
    });
    body.on('click', '.btn-component-setting', function (e) {
      e.preventDefault();
      var btn = $(this);
      (0, _log.default)('Click on .btn-component-setting', btn);
      var component = btn.closest('.keditor-component');

      if (body.hasClass('opened-keditor-setting') && body.hasClass('opened-keditor-sidebar')) {
        if (!component.is(self.settingComponent())) {
          self.openSidebar(component);
        } else {
          self.closeSidebar();
        }
      } else {
        self.openSidebar(component);
      }
    });
    body.on('click', '.btn-component-duplicate', function (e) {
      e.preventDefault();
      var btn = $(this);
      (0, _log.default)('Click on .btn-component-duplicate', btn);
      var component = btn.closest('.keditor-component');
      var container = component.closest('.keditor-container');
      var contentArea = container.parent();
      var newComponent = $(self.getComponentContent(component));
      component.after(newComponent);
      self.convertToComponent(contentArea, container, newComponent);
      (0, _log.default)('Component is duplicated');

      if (typeof options.onComponentDuplicated === 'function') {
        options.onComponentDuplicated.call(self, component, newComponent, contentArea);
      }

      if (typeof options.onContainerChanged === 'function') {
        options.onContainerChanged.call(self, e, container, contentArea);
      }

      if (typeof options.onContentChanged === 'function') {
        options.onContentChanged.call(self, e, contentArea);
      }
    });
    body.on('click', '.btn-component-delete', function (e) {
      e.preventDefault();
      var btn = $(this);
      (0, _log.default)('Click on .btn-component-delete', btn);

      if (confirm(options.confirmDeleteComponentText)) {
        var component = btn.closest('.keditor-component');
        var container = component.closest('.keditor-container');
        var contentArea = component.closest('.keditor-content-area');

        if (typeof options.onBeforeComponentDeleted === 'function') {
          options.onBeforeComponentDeleted.call(self, e, component, contentArea);
        }

        if (component.is(self.settingComponent)) {
          self.closeSidebar();
        }

        self.deleteComponent(component);

        if (typeof options.onComponentDeleted === 'function') {
          options.onComponentDeleted.call(self, e, component, contentArea);
        }

        if (typeof options.onContainerChanged === 'function') {
          options.onContainerChanged.call(self, e, container, contentArea);
        }

        if (typeof options.onContentChanged === 'function') {
          options.onContentChanged.call(self, e, contentArea);
        }
      }
    });
    body.addClass('keditor-clicks-initialized');
  }

  ;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "./constants/defaults", "./utils/log", "./utils/error", "./utils/generateId", "./utils/generateToolbar", "./utils/generateContentAreasWrapper", "./utils/beautifyCategories", "./utils/getDataAttributes", "./utils/getClickedElement", "./utils/initKEditorClicks", "./iframe/initIframe", "./iframe/initIframeCover", "./sidebar/initSidebar", "./sidebar/openSidebar", "./sidebar/closeSidebar", "./snippet/renderSnippets", "./snippet/initSnippetsFilter", "./modal/initSnippetsModal", "./modal/openModal", "./modal/closeModal", "./contentArea/initContentAreas", "./contentArea/initContentArea", "./container/convertToContainer", "./container/initContainer", "./container/initContainerContent", "./container/getContainerContent", "./component/getComponentType", "./component/convertToComponent", "./component/initComponent", "./component/initDynamicContent", "./component/deleteComponent", "./component/getComponentContent", "./init", "./destroy", "./getContent", "./setContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("jquery"), require("./constants/defaults"), require("./utils/log"), require("./utils/error"), require("./utils/generateId"), require("./utils/generateToolbar"), require("./utils/generateContentAreasWrapper"), require("./utils/beautifyCategories"), require("./utils/getDataAttributes"), require("./utils/getClickedElement"), require("./utils/initKEditorClicks"), require("./iframe/initIframe"), require("./iframe/initIframeCover"), require("./sidebar/initSidebar"), require("./sidebar/openSidebar"), require("./sidebar/closeSidebar"), require("./snippet/renderSnippets"), require("./snippet/initSnippetsFilter"), require("./modal/initSnippetsModal"), require("./modal/openModal"), require("./modal/closeModal"), require("./contentArea/initContentAreas"), require("./contentArea/initContentArea"), require("./container/convertToContainer"), require("./container/initContainer"), require("./container/initContainerContent"), require("./container/getContainerContent"), require("./component/getComponentType"), require("./component/convertToComponent"), require("./component/initComponent"), require("./component/initDynamicContent"), require("./component/deleteComponent"), require("./component/getComponentContent"), require("./init"), require("./destroy"), require("./getContent"), require("./setContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery, global.defaults, global.log, global.error, global.generateId, global.generateToolbar, global.generateContentAreasWrapper, global.beautifyCategories, global.getDataAttributes, global.getClickedElement, global.initKEditorClicks, global.initIframe, global.initIframeCover, global.initSidebar, global.openSidebar, global.closeSidebar, global.renderSnippets, global.initSnippetsFilter, global.initSnippetsModal, global.openModal, global.closeModal, global.initContentAreas, global.initContentArea, global.convertToContainer, global.initContainer, global.initContainerContent, global.getContainerContent, global.getComponentType, global.convertToComponent, global.initComponent, global.initDynamicContent, global.deleteComponent, global.getComponentContent, global.init, global.destroy, global.getContent, global.setContent);
    global.index = mod.exports;
  }
})(this, function (_jquery, _defaults, _log2, _error2, _generateId2, _generateToolbar2, _generateContentAreasWrapper2, _beautifyCategories2, _getDataAttributes2, _getClickedElement2, _initKEditorClicks2, _initIframe2, _initIframeCover2, _initSidebar2, _openSidebar2, _closeSidebar2, _renderSnippets2, _initSnippetsFilter2, _initSnippetsModal2, _openModal2, _closeModal2, _initContentAreas2, _initContentArea2, _convertToContainer2, _initContainer2, _initContainerContent2, _getContainerContent2, _getComponentType2, _convertToComponent2, _initComponent2, _initDynamicContent2, _deleteComponent2, _getComponentContent2, _init, _destroy2, _getContent2, _setContent2) {
  "use strict";

  _jquery = _interopRequireDefault(_jquery);
  _defaults = _interopRequireDefault(_defaults);
  _log2 = _interopRequireDefault(_log2);
  _error2 = _interopRequireDefault(_error2);
  _generateId2 = _interopRequireDefault(_generateId2);
  _generateToolbar2 = _interopRequireDefault(_generateToolbar2);
  _generateContentAreasWrapper2 = _interopRequireDefault(_generateContentAreasWrapper2);
  _beautifyCategories2 = _interopRequireDefault(_beautifyCategories2);
  _getDataAttributes2 = _interopRequireDefault(_getDataAttributes2);
  _getClickedElement2 = _interopRequireDefault(_getClickedElement2);
  _initKEditorClicks2 = _interopRequireDefault(_initKEditorClicks2);
  _initIframe2 = _interopRequireDefault(_initIframe2);
  _initIframeCover2 = _interopRequireDefault(_initIframeCover2);
  _initSidebar2 = _interopRequireDefault(_initSidebar2);
  _openSidebar2 = _interopRequireDefault(_openSidebar2);
  _closeSidebar2 = _interopRequireDefault(_closeSidebar2);
  _renderSnippets2 = _interopRequireDefault(_renderSnippets2);
  _initSnippetsFilter2 = _interopRequireDefault(_initSnippetsFilter2);
  _initSnippetsModal2 = _interopRequireDefault(_initSnippetsModal2);
  _openModal2 = _interopRequireDefault(_openModal2);
  _closeModal2 = _interopRequireDefault(_closeModal2);
  _initContentAreas2 = _interopRequireDefault(_initContentAreas2);
  _initContentArea2 = _interopRequireDefault(_initContentArea2);
  _convertToContainer2 = _interopRequireDefault(_convertToContainer2);
  _initContainer2 = _interopRequireDefault(_initContainer2);
  _initContainerContent2 = _interopRequireDefault(_initContainerContent2);
  _getContainerContent2 = _interopRequireDefault(_getContainerContent2);
  _getComponentType2 = _interopRequireDefault(_getComponentType2);
  _convertToComponent2 = _interopRequireDefault(_convertToComponent2);
  _initComponent2 = _interopRequireDefault(_initComponent2);
  _initDynamicContent2 = _interopRequireDefault(_initDynamicContent2);
  _deleteComponent2 = _interopRequireDefault(_deleteComponent2);
  _getComponentContent2 = _interopRequireDefault(_getComponentContent2);
  _init = _interopRequireDefault(_init);
  _destroy2 = _interopRequireDefault(_destroy2);
  _getContent2 = _interopRequireDefault(_getContent2);
  _setContent2 = _interopRequireDefault(_setContent2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  // Check dependencies
  if (!_jquery.default.fn.sortable) {
    (0, _error2.default)('$.fn.sortable does not exist. Please import $.fn.sortable into your document for continue using KEditor.');
  } // KEditor class


  var KEditor =
  /*#__PURE__*/
  function () {
    _createClass(KEditor, null, [{
      key: "log",
      value: function log() {
        _log2.default.apply(void 0, arguments);
      }
    }, {
      key: "error",
      value: function error() {
        _error2.default.apply(void 0, arguments);
      }
    }, {
      key: "init",
      value: function init(target, config) {
        return new KEditor(target, config);
      }
    }]);

    function KEditor(target, config) {
      _classCallCheck(this, KEditor);

      return _init.default.apply(this, [target, config]);
    }

    _createClass(KEditor, [{
      key: "generateId",
      value: function generateId(type) {
        return _generateId2.default.apply(this, [type]);
      }
    }, {
      key: "generateContentAreasWrapper",
      value: function generateContentAreasWrapper(content) {
        return _generateContentAreasWrapper2.default.apply(this, [content]);
      }
    }, {
      key: "generateToolbar",
      value: function generateToolbar(type, isComponentConfigurable) {
        return _generateToolbar2.default.apply(this, [type, isComponentConfigurable]);
      }
    }, {
      key: "beautifyCategories",
      value: function beautifyCategories(categories) {
        return _beautifyCategories2.default.apply(this, [categories]);
      }
    }, {
      key: "setSettingContainer",
      value: function setSettingContainer(container) {
        this.settingContainer = container;
      }
    }, {
      key: "getSettingContainer",
      value: function getSettingContainer() {
        return this.settingContainer;
      }
    }, {
      key: "setSettingComponent",
      value: function setSettingComponent(component) {
        this.settingComponent = component;
      }
    }, {
      key: "getSettingComponent",
      value: function getSettingComponent() {
        return this.settingComponent;
      }
    }, {
      key: "getDataAttributes",
      value: function getDataAttributes(target, ignoreAttributes, isArray) {
        return _getDataAttributes2.default.apply(this, [target, ignoreAttributes, isArray]);
      }
    }, {
      key: "getComponentType",
      value: function getComponentType(component) {
        return _getComponentType2.default.apply(this, [component]);
      }
    }, {
      key: "getClickedElement",
      value: function getClickedElement(event, selector) {
        return _getClickedElement2.default.apply(this, [event, selector]);
      } // Iframe
      //---------------------------------

    }, {
      key: "initIframe",
      value: function initIframe() {
        return _initIframe2.default.apply(this);
      }
    }, {
      key: "initIframeCover",
      value: function initIframeCover(iframe, wrapper) {
        return _initIframeCover2.default.apply(this, [iframe, wrapper]);
      } // KEditor clicks
      //---------------------------------

    }, {
      key: "initKEditorClicks",
      value: function initKEditorClicks() {
        return _initKEditorClicks2.default.apply(this);
      } // Sidebar
      //---------------------------------

    }, {
      key: "initSidebar",
      value: function initSidebar() {
        return _initSidebar2.default.apply(this);
      }
    }, {
      key: "openSidebar",
      value: function openSidebar(target) {
        return _openSidebar2.default.apply(this, [target]);
      }
    }, {
      key: "closeSidebar",
      value: function closeSidebar() {
        return _closeSidebar2.default.apply(this);
      } // Legacy methods. DEPRECATED
      //---------------------------------

    }, {
      key: "showSettingPanel",
      value: function showSettingPanel(target) {
        this.openSidebar(target);
      }
    }, {
      key: "hideSettingPanel",
      value: function hideSettingPanel() {
        this.closeSidebar();
      } // Snippet modal
      //---------------------------------

    }, {
      key: "initSnippetsModal",
      value: function initSnippetsModal() {
        return _initSnippetsModal2.default.apply(this);
      }
    }, {
      key: "renderSnippets",
      value: function renderSnippets(resp) {
        return _renderSnippets2.default.apply(this, [resp]);
      }
    }, {
      key: "initSnippetsFilter",
      value: function initSnippetsFilter(type) {
        return _initSnippetsFilter2.default.apply(this, [type]);
      }
    }, {
      key: "openModal",
      value: function openModal(target, snippetType) {
        return _openModal2.default.apply(this, [target, snippetType]);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        return _closeModal2.default.apply(this);
      } // Content areas
      //---------------------------------

    }, {
      key: "initContentAreas",
      value: function initContentAreas() {
        return _initContentAreas2.default.apply(this);
      }
    }, {
      key: "initContentArea",
      value: function initContentArea(contentArea, dontInitToolbar) {
        return _initContentArea2.default.apply(this, [contentArea, dontInitToolbar]);
      } // Containers
      //---------------------------------

    }, {
      key: "convertToContainer",
      value: function convertToContainer(contentArea, target) {
        return _convertToContainer2.default.apply(this, [contentArea, target]);
      }
    }, {
      key: "initContainer",
      value: function initContainer(contentArea, container) {
        return _initContainer2.default.apply(this, [contentArea, container]);
      }
    }, {
      key: "initContainerContent",
      value: function initContainerContent(contentArea, container, containerContent, isNested) {
        return _initContainerContent2.default.apply(this, [contentArea, container, containerContent, isNested]);
      } // Components
      //---------------------------------

    }, {
      key: "convertToComponent",
      value: function convertToComponent(contentArea, container, target, isExisting) {
        return _convertToComponent2.default.apply(this, [contentArea, container, target, isExisting]);
      }
    }, {
      key: "initComponent",
      value: function initComponent(contentArea, container, component) {
        return _initComponent2.default.apply(this, [contentArea, container, component]);
      }
    }, {
      key: "initDynamicContent",
      value: function initDynamicContent(dynamicElement) {
        return _initDynamicContent2.default.apply(this, [dynamicElement]);
      }
    }, {
      key: "deleteComponent",
      value: function deleteComponent(component) {
        return _deleteComponent2.default.apply(this, [component]);
      } // Get content
      //---------------------------------

    }, {
      key: "getComponentContent",
      value: function getComponentContent(component) {
        return _getComponentContent2.default.apply(this, [component]);
      }
    }, {
      key: "getContainerContent",
      value: function getContainerContent(container, isNested) {
        return _getContainerContent2.default.apply(this, [container, isNested]);
      }
    }, {
      key: "getContent",
      value: function getContent(inArray) {
        return _getContent2.default.apply(this, [inArray]);
      } // Set content
      //---------------------------------

    }, {
      key: "setContent",
      value: function setContent(content, contentArea) {
        return _setContent2.default.apply(this, [content, contentArea]);
      } // Destroy
      //---------------------------------

    }, {
      key: "destroy",
      value: function destroy() {
        return _destroy2.default.apply(this);
      }
    }]);

    return KEditor;
  }(); // KEditor plugins


  _defineProperty(KEditor, "DEFAULTS", _defaults.default);

  _defineProperty(KEditor, "debug", false);

  _defineProperty(KEditor, "version", '@{version}');

  _defineProperty(KEditor, "instances", {});

  _defineProperty(KEditor, "components", {
    blank: {
      settingEnabled: false
    }
  });

  _jquery.default.fn.keditor = function (options) {
    var element = (0, _jquery.default)(this);
    var instance = element.data('keditor');

    if (typeof options === 'string') {
      if (instance && instance[options] && typeof instance[options] === 'function') {
        return instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      if (!instance) {
        instance = KEditor.init(element, options);
        element.data('keditor', instance);
      }

      return instance;
    }
  };

  window.KEditor = _jquery.default.keditor = _jquery.default.fn.keditor.constructor = KEditor;
});