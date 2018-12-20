import CLASS_NAMES from './classNames';

export default {
    nestedContainerEnabled: true,
    
    explicitSnippetEnabled: false,
    containerForQuickAddComponent: `
        <div class="row">
            <div class="col-sm-12" data-type="container-content">
            </div>
        </div>
    `,
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
    contentAreasWrapper: `<div class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTENT_AREAS_WRAPPER}"></div>`,
    
    containerSettingEnabled: false,
    containerSettingInitFunction: null,
    containerSettingShowFunction: null,
    containerSettingHideFunction: null,
    
    onReady: function () {
    },
    
    onSnippetsLoaded: function (modal) {
    
    },
    onSnippetsError: function (modal, error) {
    
    },
    
    onInitIframe: function (iframe, iframeHead, iframeBody) {
    },
    
    onContentChanged: function (event, contentArea) {
    },
    
    onBeforeInitContentArea: function (contentArea) {
    },
    onInitContentArea: function (contentArea) {
    },
    
    onBeforeInitContainer: function (container, contentArea) {
    },
    onInitContainer: function (container, contentArea) {
    },
    onBeforeContainerDeleted: function (event, selectedContainer, contentArea) {
    },
    onContainerDeleted: function (event, selectedContainer, contentArea) {
    },
    onContainerChanged: function (event, changedContainer, contentArea) {
    },
    onContainerDuplicated: function (event, originalContainer, newContainer, contentArea) {
    },
    onContainerSelected: function (event, selectedContainer, contentArea) {
    },
    onContainerSnippetAdded: function (event, newContainer, selectedSnippet, contentArea) {
    },
    
    onComponentReady: function (component) {
    },
    onBeforeInitComponent: function (component, contentArea) {
    },
    onInitComponent: function (component, contentArea) {
    },
    onBeforeComponentDeleted: function (event, selectedComponent, contentArea) {
    },
    onComponentDeleted: function (event, selectedComponent, contentArea) {
    },
    onComponentChanged: function (event, changedComponent, contentArea) {
    },
    onComponentDuplicated: function (event, originalComponent, newComponent, contentArea) {
    },
    onComponentSelected: function (event, selectedComponent, contentArea) {
    },
    onComponentSnippetAdded: function (event, newComponent, selectedSnippet, contentArea) {
    },
    
    onBeforeDynamicContentLoad: function (dynamicElement, component, contentArea) {
    },
    onDynamicContentLoaded: function (dynamicElement, response, status, xhr, contentArea) {
    },
    onDynamicContentError: function (dynamicElement, response, status, xhr, contentArea) {
    }
};

