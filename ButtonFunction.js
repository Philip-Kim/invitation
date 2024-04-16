$( document ).ready(function() {

    const mainDiv = $('#mainDiv');
    const pageOne = $('#pageOne')[0];
    const getDomRect = pageOne.getBoundingClientRect();
    const topButton = $('#topButton');

    mainDiv[0].addEventListener('scroll', showHideTopButton);

    function showHideTopButton() {

        const pointBottom = (getDomRect.bottom)/2;

        var scrollPoint = mainDiv[0].scrollTop;

        if ( scrollPoint < pointBottom ) {
            topButton.css('visibility','hidden');
        } else if ( scrollPoint >= pointBottom ) {
            topButton.css('visibility','visible');
        }

    }

});