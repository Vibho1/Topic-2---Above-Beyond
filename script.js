// Function to update the color of a light and its corresponding bulb
function updateLightColor(light, color) {
    $("#" + light).css("background-color", color);
    $("#" + light.replace("light", "bulb")).css("background-color", color);
}

// Function to check if a light is on or off
function isLightOn(light) {
    return $("#" + light).prop("checked");
}

// Function to handle light and color updates
function update() {
    // Update each light
    $(".light-selector").each(function () {
        var light = $(this).find("input[type='checkbox']").attr("id");
        if (isLightOn(light)) {
            var color = $(this).find("input[type='color']").val();
            updateLightColor(light, color);
        } else {
            updateLightColor(light, "#000000");
        }
    });
}

// Add event listeners to the light selectors and color inputs
$("#light-control input[type='checkbox'], #light-control input[type='color']").on("change", function () {
    update();
});

// Initialize the lights with their default colors
update();

function myFunction() {
    let click = alert("By clicking on the checkbox right to me, you can change the colour of the Bedroom's Light");
}

function myFunction1() {
    let click = alert("By clicking on the checkbox right to me, you can change the colour of the Living Room's Light");
}

function myFunction2() {
    let person = alert("By clicking on the checkbox right to me, you can change the colour of the Garden's Light");
}

function myFunction3() {
    let person = alert("By clicking on the checkbox right to me, you can change the colour of the Kitchen's Light");
}

function myFunction4() {
    let person = alert("By clicking on the checkbox right to me, you can change the colour of the Restroom's Light");
}

const d = new Date();
document.getElementById("demo").innerHTML = d.toString();