// jQuery(($) => {
//     $(document).ready(function () {
//         $('.select').on('click', '.select__head', function () {
//             if ($(this).hasClass('open')) {
//                 $(this).removeClass('open');
//                 $(this).next().fadeOut();
//             } else {
//                 $('.select__head').removeClass('open');  
//                 $('.select__list').fadeOut();
//                 $(this).addClass('open');
//                 $(this).next().fadeIn();
//             }
//         });

//         $('.select').on('click', '.select__item', function () {
//             $('.select__head').removeClass('open');
//             $(this).parent().fadeOut();
//             $(this).parent().prev().text($(this).text());
//             $(this).parent().prev().prev().val($(this).text());
//             $(this).parent().parent().next().html("Цена: " + $(this).val() + " грн.");
//         });

//         $(document).click(function (e) {
//             if (!$(e.target).closest('.select').length) {
//                 $('.select__head').removeClass('open');
//                 $('.select__list').fadeOut();
//             }
//         });
//     });
// });