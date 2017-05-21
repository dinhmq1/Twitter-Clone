importScripts('https://www.gstatic.com/firebasejs/3.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.0/firebase-messaging.js');

firebase.initializeApp(config);

const config = {
    messagingSenderId: '128746739862'
};

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    const title = payload.title;
    const options = {
        body: payload.body,
        icon: payload.icon
    };
    self.registration.showNotification(title, options);
});