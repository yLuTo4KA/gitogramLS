import { Button } from "./";

export default {
  title: "Button",
  components: {
    Button,
  },
  argType: {
    hoverText: {
      control: {
        type: 'boolean'
      }
    }
  }
};

export const defaultView = (args) => ({
  components: {
    Button,
  },
  data() {
    return {
      isFollowing: false,
    }
  },
  template: `
   <Button @click="isFollowing='!isFollowing'" :text="isFollowing ? 'Unfollow' : 'Follow'" />
   `,
});
export const miniButtonView = (args) => ({
  components: {
    Button,
  },
  data() {
    return {
      isFollowing: false,
    }
  },
  template: `
  <Button @click="isFollowing='!isFollowing'" :text="isFollowing ?'Unfollow' : 'Follow'" size="small" />
  `
});
