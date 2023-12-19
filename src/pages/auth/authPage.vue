<template>
  <div class="auth">
    <div class="container">
      <div class="auth__wrapper">
        <div class="auth__info">
          <div class="auth__logo">
            <Icon name="logo" />
          </div>
          <div class="auth__desc">
            <p>More than just one repository. This is our digital world.</p>
          </div>
          <div class="auth__button">
            <Button
              text="Authorize with github"
              icon="GitCat"
              @click="authUser"
            />
          </div>
        </div>
      </div>
    </div>
    <footer class="auth__footer">
      <div class="footer__text">© Gitogram from Loftschool</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Icon } from "../../components/icons";
import { Button } from "../../components/Button";
import { mapActions } from "vuex";
export default {
  name: "authPage",
  components: {
    Icon,
    Button,
  },
  methods: {
    ...mapActions({
      authUser: "auth/authUser",
      getToken: "auth/getToken",
      getUserData: "auth/getUserData",
    }),
  },
  async created() {
    const authCode = new URLSearchParams(window.location.search).get("code");
    if (authCode !== null) {
      const token = await this.getToken(authCode);
      localStorage.setItem("token", token);
    } else {
      return;
    }
    const user = await this.getUserData();
    if (user) {
      this.$router.replace({ name: "feedsPage" });
    }
  },
};
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../../assets/authbg.png") center right -10% / 40% no-repeat;

  &__logo {
    width: 200px;
    margin-bottom: 25px;
    color: black;
  }
  &__desc {
    max-width: 256px;
    font-size: 18px;
    color: #6f6f6f;
    margin-bottom: 55px;
    line-height: 1.58;
  }

  &__footer {
    border-top: 1px solid #a7a7a7;
    color: #a7a7a7;
    background-color: #fcfcfc;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 32px 0;
    position: absolute;
    bottom: 0;
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .auth {
    justify-content: flex-start;
    padding-top: 225px;
    background: url("../../assets/authbg-ipad.png") center bottom 0% / 80%
      no-repeat;
    &__wrapper {
      display: flex;
      justify-content: center;
    }
    &__footer {
      display: none;
    }
  }
}
@media screen and (max-width: 468px) {
  .auth {
    justify-content: flex-end;
    padding-bottom: 100px;
    background: url("../../assets/authbg-iphone.png") center top 5% / 80%
      no-repeat;
    &__wrapper {
      display: flex;
      justify-content: center;
    }
    &__footer {
      display: none;
    }
  }
}
.container {
  max-width: 1200px;
  padding: 0 10px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
