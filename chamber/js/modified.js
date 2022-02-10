let dateModified = new Date(document.lastModified);
document.getElementById("whenModified").textContent = dateModified.toLocaleString('en-US', { timeZone: 'UTC'});