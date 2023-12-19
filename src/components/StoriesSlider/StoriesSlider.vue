<template>
  <div class="slider__wrapper">
    <div class="slider__container">
      <ul class="slider__stories-list" ref="storiesList">
        <li
          class="slider__stories-item"
          ref="storiesItem"
          v-for="(story, ndx) in trandPost.data"
          :key="story.id"
        >
          <SlideItem
            :data="getStoryData(story)"
            :active="slideNdx == ndx && readyState"
            :btnsShown="activeBtns"
            :progressBar="slideNdx == ndx && progressBar"
            :loading="slideNdx == ndx && loading"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onNextSlide="handleSlide(ndx + 1)"
            @onFollow="starRepo(story.id)"
            @onUnFollow="unStarRepo(story.id)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SlideItem } from "../SlideItem";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      slideNdx: 0,
      loading: false,
      btnsShown: true,
      readyState: false,
    };
  },
  components: {
    SlideItem,
  },
  computed: {
    ...mapState({
      trandPost: (state) => state.trandings.trandPost,
    }),
    ...mapGetters({
      getUnstarredRepo: "getUnstarredRepo",
    }),
    activeBtns() {
      if (this.btnsShown == false) return [];
      if (this.slideNdx == 0) return ["next"];
      if (this.slideNdx == this.trandPost.data.length - 1) return ["prev"];
      return ["next", "prev"];
    },
  },
  methods: {
    ...mapActions({
      getTrandRepo: "trandings/getTrandRepo",
      getReadme: "trandings/getReadme",
      starRepo: "trandings/starRepo",
      unStarRepo: "trandings/unStarRepo",
    }),
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following,
      };
    },
    async handleSlide(indexSlide) {
      if (indexSlide < this.trandPost.data.length) {
        this.openSlide(indexSlide);
        await this.loadReadme();
      }
    },
    openSlide(indexSlide) {
      const { storiesList, storiesItem } = this.$refs;
      const getWidth = parseInt(getComputedStyle(storiesItem[0]).width, null);

      this.slideNdx = indexSlide;
      storiesList.style.transform = `translateX(-${getWidth * indexSlide}px)`;
    },
    async getActiveReadme() {
      const { id, owner, name } = this.trandPost.data[this.slideNdx];
      await this.getReadme({ id, owner: owner.login, repo: name });
    },
    async loadReadme() {
      this.loading = true;
      this.btnsShown = false;
      try {
        await this.getActiveReadme();
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
        this.btnsShown = true;
      }
    },
  },
  async created() {
    await this.getTrandRepo();
    await this.loadReadme();
  },
  async mounted() {
    setTimeout(() => {
      this.readyState = true;
    }, 10);
    if (this.$route.params.openedSlide) {
      this.handleSlide(this.$route.params.openedSlide);
      this.$router.replace("/stories");
    }
  },
};
</script>

<style lang="scss" scoped>
.slider {
  &__container {
    position: relative;
    height: 660px;
  }
  &__stories-list {
    position: absolute;
    left: 50%;
    margin-left: -150px;
    display: flex;
    align-items: center;
    transition: 0.5s;
    @media screen and (max-width: 376px) {
      padding-top: 55px;
    }
  }
}
</style>
