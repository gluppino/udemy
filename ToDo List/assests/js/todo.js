// // check off specific todo's by clicking
$('li').click(function () {
    $(this).toggleClass('completed');

});

//     // if li is gray
//     if ($(this).css('color') === 'rgb(128, 128, 128)') {
//         $(this).css({
//             color: 'black',
//             textDecoration: 'none'
//     }
//     else {
//         $(this).css({
//           color: 'gray',
//           textDecoration: 'line-through'
//     }
//         // turn it black else turn it gray
 
//     })


$("input[type='text']").keypress(function(event){}

// Click on X to delete todo

$('span').click(function (){
    alert('clicked on X');
});