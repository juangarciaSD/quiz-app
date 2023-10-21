//check how many times an item has been clicked
//if 1 then don't register other item clicks
var counter = 0;
$("input[type='radio']").on("click", () => {
    var correctAns = $("[data-correct]");
    var selectedAns = $("input[name='ans']:checked");
    if(counter === 1) return;
    if(selectedAns.val() === correctAns.val()) {
    counter++;
        correctAns.parent("label").css("background-color", "green");
        $(".correct-ans").addClass("dis-block");
    } else {
        counter++;
        selectedAns.parent("label").css("background-color", "red");
        $(".wrong-ans").addClass("dis-block");
    }
    console.log(counter)
})