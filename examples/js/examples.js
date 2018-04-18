(function ($) {
    $(function () {
        initModalSource();
        initViewSourceBtn();
    });
    
    function initViewSourceBtn() {
        var btn = $('<button type="button" class="view-source"><i class="fa fa-code"></i> View source</button>');
        btn.appendTo(document.body);
        btn.on('click', function () {
            $('#modal-source').modal('show');
        });
    }
    
    function initModalSource() {
        var modal = $(
            '<div id="modal-source" class="modal fade" tabindex="-1">' +
            '    <div class="modal-dialog modal-lg">' +
            '        <div class="modal-content">' +
            '            <div class="modal-header">' +
            '                <button type="button" class="close" data-dismiss="modal">&times;</button>' +
            '                <h4 class="modal-title">Source</h4>' +
            '            </div>' +
            '            <div class="modal-body">' +
            '                <ul class="nav nav-tabs">' +
            '                    <li class="active"><a href="#html" data-toggle="tab"><i class="fa fa-html5"></i> HTML</a></li>' +
            '                    <li ><a href="#js" data-toggle="tab"><i class="fa fa-code"></i> JavaScript</a></li>' +
            '                </ul>' +
            '                <div class="tab-content">' +
            '                    <div class="tab-pane active" id="html">' +
            '                        <pre class="prettyprint"></pre>' +
            '                    </div>' +
            '                    <div class="tab-pane" id="js">' +
            '                        <pre class="prettyprint"></pre>' +
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
        htmlCode += htmlInclude;
        htmlCode = html_beautify(htmlCode, {
            'indent_size': '4',
            'indent_char': ' ',
            'space_after_anon_function': true,
            'end_with_newline': true
        });
        htmlCode = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        modal.find('#html .prettyprint').html(htmlCode);
        
        var jsCode = $('[data-keditor="script"]').html();
        jsCode = js_beautify(jsCode, {
            'indent_size': '4',
            'indent_char': ' ',
            'space_after_anon_function': true,
            'end_with_newline': true
        });
        jsCode = jsCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        modal.find('#js .prettyprint').html(jsCode);
        
        modal.appendTo(document.body);
        
        prettyPrint();
    }
    
})(jQuery);