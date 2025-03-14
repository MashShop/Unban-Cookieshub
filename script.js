document.getElementById("appealForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const reason = document.getElementById("reason").value;
    const webhookURL = "https://discord.com/api/webhooks/1350123776628490242/tu4D_rLRioFiR_DiXZ_EBAUIVKkpRBq6ymgKCfrnFly_YDYREo7EWHLtCPI3vs0wpgav";

    if (!username || !reason) {
        alert("Please fill out all fields.");
        return;
    }

    const payload = {
        content: `📩 **New Unban Appeal Submitted**\n👤 **Username:** ${username}\n📝 **Reason:** ${reason}`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("✅ Appeal submitted successfully!");
            document.getElementById("appealForm").reset();
        } else {
            alert("❌ Error submitting appeal. Try again later.");
        }
    })
    .catch(error => {
        alert("❌ Failed to connect to Discord Webhook.");
        console.error("Webhook Error:", error);
    });
});
