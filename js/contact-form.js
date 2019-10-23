$(document).ready(function() {
	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $label = $this.parent().find("label");
					
						switch(e.type) {
							case 'keyup': {
								 $label.toggleClass('js-hide-label', $this.val() == '');
							} break;
							case 'blur': {
								if( $this.val() == '' ) {
                    $label.addClass('js-hide-label');
                } else {
                    $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
							} break;
							case 'focus': {
								if( $this.val() !== '' ) {
                    $label.removeClass('js-unhighlight-label');
                }
							} break;
							default: break;
                        }
                        
						
        });
    }

    function validateForm() {
        var name = document.forms["contact-form"]["name"].value;
        var email = document.forms["contact-form"]["email"].value;
        var subject = document.forms["contact-form"]["subject"].value;
        var message = document.forms["contact-form"]["message"].value; 

        if (name == "" || email == "" || subject == "" || message == "") {
          alert("This is a mandatory field.");
          return false;
        }
      }
      function sendMail(str) {
        var link = "mailto:bryan@orthomusic.com" + "&subject=" + escape("This is my subject") + "&body=" + escape(str);
        location.href = link;
    }
    
    
});