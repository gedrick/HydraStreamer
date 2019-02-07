<template>
  <div class="privacy-policy">
    <h1>Privacy Policy</h1>
    <p><b>HydraStreamer</b> is developed and run by one person as a passion project, purely for your entertainment and convenience to watch Twitch streams. I have no interest in collecting or selling any data.</p>

    <p>Due to the nature of <b>HydraStreamer</b>, and the login system we interface with, there is some data we store that is returned when you sign in with Twitch. The following information is stored in our database and used purely for base functionality and communication.</p>

    <h2>What We Store and What We Do With It</h2>
    <ul class="privacy-policy__list">
      <li><b>Your email address</b>: for notifications and announcements from the operator of <b>HydraStreamer</b>. We will not send you junk mail nor will your email be transferred to any person or service for any reason.</li>
      <li><b>Your Twitch username</b>: for displaying in the design.</li>
      <li><b>Your Twitch avatar (stored as a URL)</b>: for displaying in the design.</li>
      <li><b>Your Twitch access_token</b>: for adding/removing streamers from your favorites and any other potential features. Stored as an encrypted string. Currently this is not in use, but will be used as more features are developed.</li>
      <li><b>Your Twitch refresh_token</b>: for refreshing your access_token, as needed. Stored as an encrypted string.</li>
    </ul>

    <h2>Signing in With Twitch</h2>
    <p>By signing in with Twitch, you consent to the above information being transferred from Twitch to the <b>HydraStreamer</b> server. When you are signing in with Twitch, the sign-in page on Twitch.tv will provide you full disclosure with the privileges you are granting to HydraStreamer on behalf of your Twitch account. These are referred to as "scopes", and the only scope we use is "user_read" which allows pulling your email address, display name, and avatar. For more information, see <a href="https://dev.twitch.tv/docs/authentication/#scopes" target="_blank">here</a>.</p>

    <h2>Cookies</h2>
    <p>All of the cookies you see stored in your browser are set from signing in with Twitch, with the exception of <i>connect.sid</i>, which is a secret code used to identify yourself when you use the site. There is no personal information being stored in any cookies on <b>HydraStreamer</b>.</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.privacy-policy {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 0 20px 20px 20px;
  text-align: left;
  height: 100vh;

  a {
    text-decoration: none;
    color: $bright-orange;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
