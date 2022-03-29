module.exports = function(str) {
    if (window.django == undefined || window.django.gettext == undefined) {
        return str;
    }
    return django.gettext(str);
};
