// emulate checkboxes with styled spans
$(document).ready(function() {
    // listen for page creation event
    // bind listner to the page wrapper, so we will get only new inputs on each new page creation
    // its important to listen to pagecreate, so checkboxes will be wrapped in div.ui-checkbox by the time we get in
    $('div.whole-page').live('pagecreate', function(event) {
        $(this)
            .find('input.custom-checkbox')
            .each(function(i, input) {
                var $input = $(input);
                var checked = $input.attr('checked');

                $input.wrap(
                    $('<span>')
                        .addClass('ui-icon ui-icon-custom-checkbox ' + ((checked) ? 'ui-icon-custom-checkbox-on' : ''))
                );
                // our fancy looking wrapper around the actual checkbox
                var $emulator = $input.parent();

                $input.parents('.ui-checkbox').bind({
                    'touchstart mousedown' : function(event) {
                        // prevents whole row from being clicked
                        event.stopPropagation();
                    },
                    'click' : function(event) {
                        var isOn = $emulator.hasClass('ui-icon-custom-checkbox-on');
                        // !isOn makes checkbox and emulator actually change their state to opposite
                        $input.attr('checked', !isOn);
                        $emulator.toggleClass('ui-icon-custom-checkbox-on', !isOn);
                        event.stopPropagation();
                    }
                });
        });
    });
});