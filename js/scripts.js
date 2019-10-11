window.onload = function () {
    $('.food').click(function () {
        $(this).addClass('selected')
            .siblings()
            .removeClass('selected');
    });
    $('.icing').click(function () {
        $(this).addClass('selected')
            .siblings()
            .removeClass('selected');
    });

    //as this method hits siblings only, there will be two selected fields, 
    //one for icing and one for the base item.
    $('#addToCart').click(function () {
        var roll = $('.food.selected').find('a').find('div').text()
        var icing = $('.icing.selected').find('div').text()
        var count = $( "select option:selected" ).text();
        alert(count+" "+roll +"(s) with " +icing+" added to cart.");
    })

    //simulate add to cart


}