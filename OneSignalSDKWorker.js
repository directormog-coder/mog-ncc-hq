Integrate the one signal initialization script into the bottom of my index.html:<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(async function(OneSignal) {
    await OneSignal.init({
      appId: "YOUR_ONESIGNAL_APP_ID_HERE", // Replace with your actual App ID
      safari_web_id: "web.onesignal.auto.617...", // If applicable
      notifyButton: {
        enable: true,
      },
    });
  });
</script>