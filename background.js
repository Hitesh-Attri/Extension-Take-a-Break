chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(

            {
                type: "basic",
                iconUrl: "logo.jpg",
                title: "EYES!!",
                message: "Been 20 minutes!! Do not stare at your screen for too long.. Look Away!",
                silent: false
            },
            () => { }
        )
    },
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.time)
            createAlarm();

        sendResponse(() => {
            return false
        });
    }
);

function createAlarm() {
    chrome.alarms.create(
        "EYES!!",
        {
            delayInMinutes: 1,
            periodInMinutes: 1
        }
    );
}
