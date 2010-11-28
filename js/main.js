// emulate checkboxes with styled spans
$(function() {
    $('input[data-beautify]').each(function(i, input) {
        var $input = $(input);
        var checked = $input.attr('checked');
        $input.wrap(
            $('<span>')
                .addClass('ui-icon ui-icon-custom-checkbox ' + ((checked) ? 'ui-icon-custom-checkbox-on' : ''))
        );
        var $emulator = $input.parent();

        $input.parents('.ui-checkbox').bind({
            'touchstart mousedown' : function(event) {
                // prevents whole row from being clicked
                event.stopPropagation();
            },
            // touchstart is questionable here
            // I am not sure about how checkbox clicks should be handled on iphone from UX point of view
            'touchstart click' : function(event) {
                if ($emulator.hasClass('ui-icon-custom-checkbox-on')) {
                    $input.removeAttr('checked');
                    $emulator.removeClass('ui-icon-custom-checkbox-on');
                } else {
                    $input.attr('checked', true);
                    $emulator.addClass('ui-icon-custom-checkbox-on');
                }
                event.stopPropagation();
                return false;
            }
        });
    });
});