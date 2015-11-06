// create a HTML notification:
var notification = webkitNotifications.createHTMLNotification(
    'notification.html' // html url - can be relative
);

// Then show the notification.
notification.show();