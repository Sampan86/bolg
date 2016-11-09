define(function(require, exports) {
    ! function(obj) {
        var userSystem = {}
        var ua = navigator.userAgent.toLowerCase();
        userSystem.winW = window.innerWidth;
        userSystem.winH = window.innerHeight;
        userSystem.pc = ua.indexOf("window") !== -1 ? true : false;
        userSystem.iphone = ua.indexOf("iphone") !== -1 ? true : false;
        userSystem.android = ua.indexOf("android") !== -1 ? true : false;
        userSystem.mobile = userSystem.iphone || userSystem.android ? true : false;
        obj.userSystem = userSystem;

    }(exports);
});