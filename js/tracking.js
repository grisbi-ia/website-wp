/*-----------------------------------------------
# Tracking - Google Analytics 4 + Metricool
# Unificado para reducir requests y facilitar mantenimiento
-----------------------------------------------*/
(function () {
    var gtagId = 'G-VMPXMYT6W1';

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gtagId;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', gtagId);
})();

(function () {
    function loadScript(callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://tracker.metricool.com/resources/be.js';
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    }

    loadScript(function () {
        beTracker.t({ hash: '53730d288566ede873483620e348630c' });
    });
})();
