(function ($) {
    $(function () {
        initModalConfig();
        initModalContent();
        initToolbar();
    });

    function initToolbar() {
        var toolbar = $('<div class="toolbar"></div>');
        var btnViewConfig = $('<button type="button" class="view-config"><i class="fa fa-code"></i> View config</button>');
        var btnViewContent = $('<button type="button" class="view-content"><i class="fa fa-file-text-o"></i> Get content</button>');

        toolbar.appendTo(document.body);
        toolbar.append(btnViewConfig);
        toolbar.append(btnViewContent);

        btnViewConfig.on('click', function () {
            $('#modal-config').modal('show');
        });

        btnViewContent.on('click', function () {
            var modal = $('#modal-content');
            modal.find('.content-html').html(
                beautifyHtml(
                    $('#editor').keditor('getContent')
                )
            );

            modal.modal('show');
        });
    }

    function initModalContent() {
        var modal = $(
            '<div id="modal-content" class="modal fade" tabindex="-1">' +
            '    <div class="modal-dialog modal-lg">' +
            '        <div class="modal-content">' +
            '            <div class="modal-header">' +
            '                <button type="button" class="close" data-dismiss="modal">&times;</button>' +
            '                <h4 class="modal-title">Content</h4>' +
            '            </div>' +
            '            <div class="modal-body">' +
            '                <pre class="prettyprint lang-html content-html"></pre>' +
            '            </div>' +
            '            <div class="modal-footer">' +
            '                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>'
        );

        modal.appendTo(document.body);
    }

    function initModalConfig() {
        var modal = $(
            '<div id="modal-config" class="modal fade" tabindex="-1">' +
            '    <div class="modal-dialog modal-lg">' +
            '        <div class="modal-content">' +
            '            <div class="modal-header">' +
            '                <button type="button" class="close" data-dismiss="modal">&times;</button>' +
            '                <h4 class="modal-title">Config</h4>' +
            '            </div>' +
            '            <div class="modal-body">' +
            '                <ul class="nav nav-tabs">' +
            '                    <li class="active"><a href="#config-html" data-toggle="tab"><i class="fa fa-html5"></i> HTML</a></li>' +
            '                    <li ><a href="#config-js" data-toggle="tab"><i class="fa fa-code"></i> JavaScript</a></li>' +
            '                </ul>' +
            '                <div class="tab-content">' +
            '                    <div class="tab-pane active" id="config-html">' +
            '                        <pre class="prettyprint lang-html config-html"></pre>' +
            '                    </div>' +
            '                    <div class="tab-pane" id="config-js">' +
            '                        <pre class="prettyprint lang-js config-js"></pre>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '            <div class="modal-footer">' +
            '                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>'
        );

        var htmlCode = $('[data-keditor="html"]').html();
        var htmlInclude = $('<div />').html($('[data-keditor="html-include"]').clone()).html();
        htmlInclude = htmlInclude.replace('data-keditor="html-include"', '');
        modal.find('.config-html').html(beautifyHtml(htmlCode + htmlInclude));

        var jsCode = $('[data-keditor="script"]').html();
        modal.find('.config-js').html(beautifyJs(jsCode));

        modal.appendTo(document.body);
    }

    function beautifyHtml(htmlCode) {
        htmlCode = html_beautify(htmlCode, {
            'indent_size': '4',
            'indent_char': ' ',
            'space_after_anon_function': true,
            'end_with_newline': true
        });
        htmlCode = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

        return PR.prettyPrintOne(htmlCode, 'lang-html');
    }

    function beautifyJs(jsCode) {
        jsCode = js_beautify(jsCode, {
            'indent_size': '4',
            'indent_char': ' ',
            'space_after_anon_function': true,
            'end_with_newline': true
        });

        return PR.prettyPrintOne(jsCode, 'lang-js');
    }

})(jQuery);