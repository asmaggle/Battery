const batteryIcon = document.getElementById("batteryIcon");
// const batteryLevel = document.getElementById("batteryLevel");
const batteryStatus = document.getElementById("batteryStatus");
const batteryChargeTime = document.getElementById("batteryChargeTime");
const batteryDischargeTime = document.getElementById("batteryDischargeTime");

function updateChargingChange(status) {
    if (status) {
        batteryStatus.innerText = "Charging";
        // console.log("charging");
    }
    else {
        batteryStatus.innerText = "Not Charging";
        // console.log("not charging");
    }
}
// debugger
function updateChargingTimeChange(duration) {
    batteryChargeTime.innerHTML = duration / 60 + " Minutes";
}

function updateDischargingTimeChange(duration) {
    batteryDischargeTime.innerHTML = duration / 60 + " Minutes";
}

function levelChange(level) {
    console.log(level);
    if (level <= 10) {
        batteryIcon.innerHTML =
            '<i class="fa fa-7x fa-rotate-270 fa-battery-empty" aria-hidden="true"></i> <h3 id="batteryLevel">' +
            level +
            "%</h3>";
    } else if (level <= 25) {
        batteryIcon.innerHTML =
            '<i class="fa fa-7x fa-rotate-270 fa-battery-quarter" aria-hidden="true"></i><h3 id="batteryLevel">' +
            level +
            "%</h3>";
    } else if (level <= 50) {
        batteryIcon.innerHTML =
            '<i class="fa fa-7x fa-rotate-270 fa-battery-half" aria-hidden="true"></i><h3 id="batteryLevel">' +
            level +
            "%</h3>";
    } else if (level <= 75) {
        batteryIcon.innerHTML =
            '<i class="fa fa-7x fa-rotate-270 fa-battery-three-quarters" aria-hidden="true"></i><h3 id="batteryLevel">' +
            level +
            "%</h3>";
    } else {
        batteryIcon.innerHTML =
            '<i class="fa fa-7x fa-rotate-270 fa-battery-full" aria-hidden="true"></i><h3 id="batteryLevel">' +
            level +
            "%</h3>";
    }
}

const success = function (battery) {
    console.log(battery);

    battery.addEventListener("chargingchange", function () {
        updateChargingChange(battery.charging);
    });
    
    battery.addEventListener("chargingtimechange", function () {
        updateChargingTimeChange(battery.chargingTime);
    });

    battery.addEventListener("levelchange", function () {
        levelChange(battery.level * 100);
    });

    battery.addEventListener("dischargingtimechange", function () {
        updateDischargingTimeChange(battery.dischargingTime);
    });

    updateChargingChange(battery.charging);
    updateChargingTimeChange(battery.chargingTime);
    updateDischargingTimeChange(battery.dischargingTime);
    levelChange(battery.level * 100);
};

navigator
.getBattery()
.then(success)
.catch(function (error) {
  console.log(error);
});
