$(document).ready(function () {
    console.profile();

    console.time("Execution time took");

    $('.item-name').each(function(i,elem){
        if($(this).text().length > 40){
         var cutText = ($(this).text()).substr(1, 40);
          $(this).text(cutText+'...');
        }
    });
    for (var i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log('FizzBuzz %d',i);
        }

        if (i % 3 == 0) {
            console.log('Fizz' + i);
        }

        if (i % 5 == 0) {
            console.log('Buzz' + i);
        }
    }
    console.error("%s numbers %d, %d and %d","hello",1,2,3);
    console.warn("%s numbers %d, %d and %d","hello",1,2,3);
    console.timeEnd("Execution time took");
    console.profileEnd();
});
