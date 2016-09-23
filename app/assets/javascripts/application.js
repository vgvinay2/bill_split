// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require_tree .


// dynmaic form
function remove_fields(link) {
    $(link).prev("input[type=hidden]").val(true);
    $(link).closest(".plan-feature-lists").hide();
}
function add_fields(link, association, content) {
    var new_id = new Date().getTime();
    var regexp = new RegExp("new_" + association, "g");
    $(".addfunction").append("<div class='form-group plan-feature-lists'>" + content.replace(regexp, new_id) + "</div>");
    enableSelect()
}