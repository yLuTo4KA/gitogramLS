<template>
  <div :class="['slide__wrapper', { active }]">
    <div class="slide">
      <div class="slide__header">
        <div class="slide__progress-bar">
          <ProgressBar :active="active" @onFinish="$emit('onNextSlide')" />
        </div>
        <div class="slide__user">
          <User
            :username="data.username"
            :avatarUrl="data.userAvatar"
            vClass="slide-user"
          />
        </div>
      </div>
      <div class="slide__content">
        <div class="slide__content-loader" v-if="loading">
          <Spinner />
        </div>
        <div class="slide__content-view" v-else>
          <!-- <div
            class="slide__content-text"
            v-if="data?.content?.length"
            v-html="data.content"
          ></div> -->
          <Markdown
            :source="data.content"
            class="slide__content-text"
            v-if="data?.content?.length"
            :html="true"
          />
          <Preloader :paragraphs="2" v-else />
        </div>
      </div>
      <div class="slide__footer">
        <Button
          :loading="data.following.loading"
          :text="data.following.status ? 'Unfollow' : 'Follow'"
          :bg="data.following.status ? 'grey' : 'green'"
          @click="
            $emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)
          "
        />
      </div>
    </div>
    <template v-if="active">
      <button
        class="arrow arrow__prev"
        v-if="btnsShown.includes('prev')"
        @click="$emit('onPrevSlide')"
      >
        <div class="arrow__icon">
          <Icon name="ArrowNext" />
        </div>
      </button>
      <button
        class="arrow arrow__next"
        v-if="btnsShown.includes('next')"
        @click="$emit('onNextSlide')"
      >
        <div class="arrow__icon">
          <Icon name="ArrowNext" />
        </div>
      </button>
    </template>
  </div>
</template>

<script>
import { ProgressBar } from "../ProgressBar";
import { User } from "../User";
import { Button } from "../Button";
import { Icon } from "../icons";
import Spinner from "../Spinner/Spinner.vue";
import Preloader from "../Preloader/Preloader.vue";
import Markdown from "vue3-markdown-it";

export default {
  name: "SlideItem",
  components: {
    ProgressBar,
    User,
    Icon,
    Button,
    Spinner,
    Preloader,
    Markdown,
  },
  emits: ["onPrevSlider", "onNextSlide", "onFollow", "onUnFollow"],
  props: {
    data: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    btnsShown: {
      type: Array,
      default: () => ["next", "prev"],
      validator(value) {
        return value.every((item) => item == "next" || item == "prev");
      },
    },
  },
};
</script>

<style lang="scss" scoped>
template {
  display: flex;
}
.slide__wrapper {
  display: flex;
  justify-content: center;
  transform: scale(0.8);
  position: relative;
  transition: 0.5s;
  opacity: 30%;
  &.active {
    transform: scale(1);
    z-index: 99;
    opacity: 100%;
  }
}
.slide {
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 667px;
  background: #fff;
  border-radius: 5px;
  @media screen and (max-height: 900px) {
    width: 302px;
    height: 538px;
  }
  &__header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    padding: 8px;
  }
  &__progress-bar {
    margin-bottom: 10px;
  }
  &__content {
    flex: 1;
    overflow-y: scroll;
    padding: 20px 25px 10px 15px;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    &-loader {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #000;
  background: #fff;
  border-radius: 50%;
  &:hover {
    color: #31ae54;
  }

  &__prev {
    left: -55px;
  }
  &__next {
    right: -55px;
    .arrow__icon {
      transform: rotate(180deg);
    }
  }
  &__icon {
    display: block;
    width: 20px;
    height: 18px;
  }
}
@media screen and (max-width: 376px) {
  .slide {
    &__content {
      font-size: 12px;
      padding: 15px 35px 30px 35px;
    }
  }
  .arrow {
    &__prev {
      left: -25px;
    }
    &__next {
      right: -25px;
    }
  }
}
</style>
