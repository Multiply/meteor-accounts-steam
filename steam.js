Accounts.oauth.registerService('steam');

if (Meteor.isClient) {
  Meteor.loginWithSteam = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Steam.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.steam'],
    forOtherUsers: ['services.steam.username']
  });
}
