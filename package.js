Package.describe({
  summary: "Login service for Steam accounts"
});

Package.on_use(function(api) {
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('steam', ['client', 'server']);

  api.add_files('steam_login_button.css', 'client');

  api.add_files("steam.js");
});
